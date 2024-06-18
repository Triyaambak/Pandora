import "dotenv/config";
import "express-async-errors";

import express from "express";
import cors from "cors";

const app = express();

import connectDB from "./connectDB/connect.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandlerMiddleware from "./middleware/errorHandleMiddleware.js";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";

app.use(
    cors({
        origin: "http://localhost:3000/",
    })
);

app.use(express.json());
app.use("api/auth", authRoutes);
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(`Databse connected`);
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT} ...`);
        });
    } catch (error) {
        console.log(`Error while trying to host server ${error}`);
    }
};

start();
