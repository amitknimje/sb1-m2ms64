const Mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

/**
 * [@Promise : native promises add to mongoose promise variable]
 * @type {[object]}
 */
Mongoose.Promise = global.Promise;

/**
 * @description [Connect with mongodb with host and port]
 * @return {[object]}
 */
const connectToDb = async () => {
  try {
    Mongoose.set('strictQuery', true);
    console.log(123445);
    await Mongoose.connect(process.env.connectionString, {
      useNewUrlParser: false,
      useUnifiedTopology: false,
    })
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.error('Error connecting to MongoDB:', err));

    return 1;
  } catch (err) {
    console.log('Could not connect to MongoDB', err);
    return 0;
  }
};

module.exports = connectToDb;
