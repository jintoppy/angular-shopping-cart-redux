import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = (req, res) => {
    const reqBody = req.body;
    const user = new User({
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        password: bcrypt.hashSync(reqBody.password, 10),
        email: reqBody.email
    });
    user.save((err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(201).send(result);
    });
};

export const validateUser = (req, res, next) => {
    const token = req.headers['token'];
    if (!token) {
        return res
            .status(401)
            .json({
                message: 'You need to be authenticated to access this url'
            });
    }
    jwt.verify(token, 'mysecret', (err, tokenData) => {
        if (err) {
            return res
                .status(401)
                .json({
                    message: 'Not a valid token',
                    err: err
                });
        }
        req.tokenData = tokenData;
        next();

    });
};

export const getAllUsers = (req, res) => {
    User
        .find()
        .select('firstName lastName email')
        .sort({ createdOn: -1 })
        .exec((err, users) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(users);
        });
};

export const signin = (req, res) => {
    const reqBody = req.body;
    User.findOne()
        .where('email').equals(reqBody.email)
        .exec((err, result) => {
            if (err) {
                return res
                    .status(401)
                    .send(err);
            }
            if (!result) {
                return res
                    .status(401)
                    .send({
                        message: 'not valid credentials'
                    });
            }
            const isSame = bcrypt.compareSync(reqBody.password, result.password);
            if (isSame) {
                const token = jwt.sign({
                    user: result
                }, 'mysecret');

                return res
                    .status(200)
                    .json({
                        token: token,
                        userId: result._id
                    });
            }
            else {
                return res
                    .status(401)
                    .send({
                        message: 'not valid credentials'
                    });
            }

        });

};

