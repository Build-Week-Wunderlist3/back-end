const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Import Secrets
const secrets = require('../config/secrets.js');

const Users = require('../auth/auth-model');
const restricted = require('../auth/restrictedmiddleware.js');


//Register New User

router.get('/',  restricted, (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json({ users, decodedToken: req.decodedToken });
        })
        .catch(err => res.send(err));
});

router.post('/register', (req, res) => {
    const user = req.body;

    if(!user.username || !user.password) {
        res.status(400).json({ errorMessage: 'New users require a username and password.' })
    } else {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        Users.addUser(user)
            .then(saved => {
                res.status(200).json(saved)
            })
            .catch(err => {
                res.status(500).json({ error: err, message: 'This username is already taken.' })
            })
    }
})

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.addUser(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// Login

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findUser({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);  //calling the generatetoken function below and paaing the user object
                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    jwt_token: token
                });
            } else {
                res.status(401).json({ message: 'invalid credentials for login' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    };
    // const secret = secrets.jwt_secret;
    const options = {
        expiresIn: '30min'
    };
    const token = jwt.sign(payload, secrets.jwt_secret, options);
    return token
    // return jwt.sign(payload, secret, options);
};

module.exports = router;
