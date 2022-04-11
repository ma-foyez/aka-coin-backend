const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connect : ${connect.connection.host}`.cyan.underline);
    } catch (error) {
        console.log('error :>> ', error.message.red.bold);
        process.exit();
    }
}

module.exports = connectDB;