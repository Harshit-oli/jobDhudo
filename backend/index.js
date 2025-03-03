import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/jobs.route.js"
import applicationRoute from "./routes/application.route.js"
dotenv.config({});

const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));
connectDB();

const PORT=process.env.PORT || 3000;
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/jobs",jobRoute);
app.use("/api/v1/applications",applicationRoute);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
});



//v4OPAromlQVTnQPk


//mongodb+srv://olih0607:v4OPAromlQVTnQPk@cluster0.q8t3r.mongodb.net/
