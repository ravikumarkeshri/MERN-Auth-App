import jwt from 'jsonwebtoken';
import { errorHandler } from './errros.js';

export const verifyToken = (res, req, next) => {
    const token = req.cookie.access_token;
    if (!token) {
        return next(errorHandler(401, 'Access Denied!'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json("Token is not valid")
        }
        req.user = user;
        next();
    })
}