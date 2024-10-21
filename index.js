const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

const { custDetails } = require("./controllers/custController");


app.use(express.json());


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();


app.post('/customer',custDetails)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
