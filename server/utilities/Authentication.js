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
