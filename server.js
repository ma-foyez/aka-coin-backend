const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

// const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const walletRouter = require("./routes/WalletRoute");
const guidelineRoute = require("./routes/GuidelineRoute");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
var cors = require('cors')

dotenv.config();

const app = express();


app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));

const PORT = process.env.PORT || 4200;
app.use(cors())
connectDB();

app.use(express.json()); //to accept json data;





app.use('/api/akacoin/', walletRouter)
app.use('/api/akacoin/', guidelineRoute)

// app.use(notFound)
// app.use(errorHandler)

app.listen(PORT, console.log(`Server start on PORT ${PORT}`.yellow.bold));