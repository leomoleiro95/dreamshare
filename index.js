import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes  from './routes/posts.js'
import userRoutes from "./routes/users.js";
import dotenv from 'dotenv'

const app = express();
dotenv.config()



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

app.get('/', (req, res) => {
  res.send('APP IS RUNNING')
})

  
const CONNECTION_URL ="mongodb+srv://dreamshare:dreamshare123@cluster0.2eer1o7.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL , { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
  )
  .catch((error) => console.log({portError: error.message}));
