require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// My Routes
const authRoutes =  require("./routes/auth");
const userRoutes = require("./routes/user");
const facultyRoutes = require("./routes/faculty");
// const departmentRoutes =  require("./routes/department")


// DB Connection
mongoose.connect(process.env.MONGODB_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(console.log('DB CONNECTION IS DONE'))
    .catch(error => {
        console.log('DB CONNECTION IS FAILED');
        console.log(error);
        process.exit(1);
    });

// mideleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", authRoutes); 
app.use("/api", userRoutes);
app.use("/api", facultyRoutes); 
// app.use("/api", departmentRoutes); 



// My PORT
const port = process.env. PORT || 8080;

// Starting Server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});