const mongoose = require("mongoose");
require('dotenv').config(); // Ensure this is at the top if using local .env file

// Connection URI from MongoDB Atlas or fallback to local MongoDB
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/Login-tut";

// Connect to MongoDB
mongoose.connect(mongoURI)
.then(() => {
    console.log("Database connected Successfully");
})
.catch(err => {
    console.error("Database connection error:", err);
});

// Create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection part
const Collection = mongoose.model("users", LoginSchema);

module.exports = Collection;
