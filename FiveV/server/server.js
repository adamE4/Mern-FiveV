import express from "express";
import cors from "cors";
import postsRoutes from "./routes/Postsroutes.js"
import dotenv from "dotenv"
import mongoose from "mongoose";
import userRoutes from "./routes/Userroutes.js"
import fileUpload from "express-fileupload";
import multer from "multer";


dotenv.config({ path: 'config.env'})

const PORT = process.env.PORT;
const MONGODB_URI = process.env.ATLAS_URI;

const app = express();



app.use(cors());
app.use(express.json());
app.use(fileUpload)


//used to sue the imported things
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})




//routes
app.use('/user', userRoutes)
app.use('/posts', postsRoutes)



//Htpp
import fs from "fs"
import path from "path"
const privKey = fs.readFileSync(path.join('key.pem'), 'utf8')
const certifcate = fs.readFileSync(path.join('cert.pem'), 'utf8')
const cred = { key: privKey, cert: certifcate}


import https from "https"
const httpsServer = https.createServer(cred, app)

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