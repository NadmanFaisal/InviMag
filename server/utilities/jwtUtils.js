const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET_KEY;
const cookieExpiration = 60 * 60 * 1000; // please understand this format of time, days * hours * minutes * secoonds * a millisecond, so one can be 30 * 24 * 60 * 60 * 1000

// generate JWT token based on a hexastring value
const generateToken = (payload, expiresIn = '1h') => {
    console.log(jwtSecret);
    const token = jwt.sign(payload, jwtSecret, { algorithm: 'HS256', expiresIn });
    return token;
};

// verify's the token's validity (not expired) by decoding with HS256 algo. 
const verifyToken = (token) => {
    const decoded = jwt.verify(token, jwtSecret, { algorithms: ['HS256'] });
    return decoded;
};

// prevent Cross-Site Scripting attacks by assigning to httpOnly, 
// meaning I shouldn't be able to access this through client-based JavaScript

const setTokenCookie = (res, token) => {
    res.cookie('auth_token', token, {
      httpOnly: true,
      maxAge: cookieExpiration
    });
};

// clear cookie session

const clearTokenCookie = (res) => {
  res.clearCookie('auth_token');
};

/*

Keep for later purposes

const authenticateToken = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
  }

  try {
      const decoded = verifyToken(token); // verifies validity of token
      req.user = decoded; // re-attach user info to the request
  } catch (error) {
      return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
*/

module.exports = {
  generateToken,
  verifyToken,
  setTokenCookie,
  clearTokenCookie,
  // authenticateToken
};
