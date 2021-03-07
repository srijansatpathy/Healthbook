const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_ACCESS_KEVIN, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = connectDB;
