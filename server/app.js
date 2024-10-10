const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override');
const history = require('connect-history-api-fallback');
const productRoutes = require('../server/routes/ProductRoutes');
const businessOwnerRoutes = require('../server/routes/BusinessOwnerRoutes');
const orderHistoryRoutes = require('../server/routes/OrderHistoryRoutes');
const supplierRoutes = require('../server/routes/SupplierRoutes');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true,               
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'],             
};

// constiables
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animalDevelopmentDB';
const port = process.env.PORT || 3000;
dotenv.config({ path: require('path').resolve(__dirname, '.env') });  // for some reason dotenv wouldnt pick up on the path without requiring absolute path check

// Connect to MongoDB
mongoose.connect(mongoURI).catch(function(err) {
    console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
    console.error(err.stack);
    process.exit(1);
}).then(function() {
    console.log(`Connected to MongoDB with URI: ${mongoURI}`); // mistake when forward porting
});

// Create Express app
const app = express();
// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend must be registered before api
app.options(cors());
app.use(cors(corsOptions));
// Use cookies
app.use(cookieParser());

// Import routes
app.get('/v1/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT342 backend ExpressJS project!'});
});

// Uses every endpoints specified inside the Controller class
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/v1/api', businessOwnerRoutes);
app.use('/v1/api', productRoutes);
app.use('/v1/api', supplierRoutes);
app.use('/v1/api', orderHistoryRoutes);
// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/v1/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});

// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets
const root = path.normalize(__dirname + '/..');
const client = path.join(root, 'client', 'dist');
app.use(express.static(client));

// Error handler (i.e., when exception is thrown) must be registered last
const env = app.get('env');
// eslint-disable-next-line no-unused-consts
app.use(function(err, req, res, next) {
    console.error(err.stack);
    const err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        // Return sensitive stack trace only in dev mode
        err_res['error'] = err.stack;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend (production): http://localhost:${port}/`);
});

module.exports = app;
