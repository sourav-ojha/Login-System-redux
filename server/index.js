import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import AuthRoutes from "./routes/auth.routes.js";

const port = process.env.PORT || 5000;
const MONGOURL = "mongodb://localhost:27017/loginSys";
mongoose
  .connect(MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongoose connected"))
  .catch(() =>
    console.log("mongoose not connectd ------------------------------")
  );

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/auth',AuthRoutes);

app.listen(port, () => {
  console.log("server running on port : ", port);
});
