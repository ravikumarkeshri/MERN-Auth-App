import express from 'express'
import mongoose from 'mongoose';
const app = express();
import dotenv from 'dotenv'
import userRoute from './routers/user.router.js'
import authRoute from './routers/auth.router.js'
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
const __dirname = path.resolve();
app.use(express.static(path.json(__dirname, '/client/dist')))
app.use(express.json());
app.get('*', (res, req) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("database connected")
    })
    .catch((err) => {
        console.log("Error Message: ", err)
    })
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});
app.use(cookieParser());

app.listen(3000, () => {
    console.log("server listening on port 3000");
})