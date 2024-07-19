import express from "express";
import cors from "cors";
import postsRoutes from "./routes/Postsroutes.js"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./routes/Userroutes.js"



dotenv.config({ path: 'config.env'})

const PORT = process.env.PORT;
const MONGODB_URI = process.env.ATLAS_URI;


const app = express();

app.use(cors());
app.use(express.json());

//used to sue the imported things
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/posts', postsRoutes)
app.use('/user', userRoutes)

//Htpp
import https from "https"
const httpsServer = https.createServer(app)

//Used to start the express server
mongoose.connect(MONGODB_URI)
    .then(() => {
        // to start the express server after connected to db
        httpsServer.listen(PORT, () => {
            console.log('HTTPS Server connected to database and listening on port', PORT);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

    export default app