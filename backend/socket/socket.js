import { Server } from "socket.io";
import http from "http";
import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import axios from "axios";
import { log } from "console";

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

io.on("connection", async (socket) => {
    console.log(`A new user has joined ${socket.id}`);

    socket.on("speechToText", async (audioBlob, callback) => {
        try {
            const buffer = Buffer.from(audioBlob);
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const tempFilePath = path.join(
                __dirname,
                "../temp/audioInput.webm"
            );
            fs.writeFileSync(tempFilePath, buffer);

            const res = await axios.post(
                "http://localhost:3001/api/comm/getText",
                {
                    tempFilePath,
                }
            );

            callback(res.data.data);
        } catch (error) {
            console.log(error);
        }
    });

    socket.on("textToSpeech", async (text, callback) => {
        try {
            const __filename = fileURLToPath(import.meta.url);
            const __dirname = path.dirname(__filename);
            const tempFilePath = path.join(
                __dirname,
                "../.././frontend/./temp/audioOutput.mp3"
            );

            const res = await axios.post(
                "http://localhost:3001/api/comm/getSpeech",
                {
                    tempFilePath,
                    text,
                }
            );

            callback();
        } catch (error) {
            console.log(error);
        }
    });
});

export { app, io, server };
