/**
 * Hashing refers to the ability of taking a abritarily length of
 * data and mapping it to a fixed data, allowing the value of the
 * data to be encrypted. 
 * 
 * Salting is the random data used in hashing function to help
 * create mapped, fixed random datas
 * 
 * This uses bcrypt library, made by Nelis and David, to hash and salt
 * password using a cipher called Blowfish Cipher
 * 
 * This is the package used: https://www.npmjs.com/package/bcrypt
 */

const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        next(error);
    }
}

const comparePassword = async (password, hashedPassword) => {
    try {
        return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    hashPassword,
    comparePassword
};


/* Use this if you want to comparePasswords in your LogIn Screen (aka your
server/BusinessOwnerController file with the loginBusinessOwner request)

const {comparePassword} = require('../utilities/Authentication');

const isPasswordValid = await comparePassword(req.body.password, businessOwner.password);

if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid password' });
}

make sure before this to do a check on the email if it exists in db

*/
