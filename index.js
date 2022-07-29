import express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerMember from "./routes/member.js";
import routerPackage from "./routes/package.js";
import routerOutlet from "./routes/outlet.js";

const app = express();

//Connection to db(automatic create db)
mongoose.connect("mongodb://127.0.0.1:27017/laundry",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', (error)=> console.log(error));
db.once('open', () => console.log('Database Connected'));

// middleware
app.use(cors());
app.use(express.json());
app.use('/member', routerMember )
app.use('/package', routerPackage )
app.use('/outlet', routerOutlet )




//setting port
app.listen('2005', () => console.log("Server running at port 2005"));