require("dotenv").config();
const express=require("express");
const cors=require("cors");
const app= express();
const errorMiddleware=require("./middlewares/error-middleware")
const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}
app.use(cors(corsOptions));
app.use(express.json());


 const port=process.env.PORT||3000;
const authRoute=require("./router/auth-router");
const contactRoute=require("./router/contact-router");
const serviceRoute=require("./router/service-router");
const adminRoute=require("./router/admin-router");
const messTTRoute=require("./router/messtt-router");
const connectDb=require("./utils/db");
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRoute);
app.use("/api/timetable",messTTRoute);
connectDb().then(()=>{
app.listen(port,()=>{
    console.log(`hey Mohan,server is running at port: ${port}`);
})   ;   
});
app.use(errorMiddleware);