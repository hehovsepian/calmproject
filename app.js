import express from "express";
import mongoose from "mongoose";
import config from "./mongo/mongo_config.js";
import passport from 'passport';
import cookieParser from 'cookie-parser';
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {routes} from "./routes/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 2000;
const app = express();
const connectionurl = `mongodb+srv://${config.user}:${config.password}@cluster0.fhidx.mongodb.net/${config.db}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'frontend-source/build')));
app.use(passport.initialize())

routes(app)

async function main() {
    await mongoose.connect(connectionurl);
}

main().catch(err => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('connected');
});

app.listen(port,() => {
    console.log(`Running on PORT ${port}`);
});



