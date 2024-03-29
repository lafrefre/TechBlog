const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/signup', async (req, res) => {
    try {
        const {username, password} = req.body;
        await User.create({username, password});
        res.redirect('/login');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

router.get('/login', (req, res) => {
    res.render('login');
}
);

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;
        const userData = await User.findOne({where: {username}});
        if (!userData) {
            res.status(400).json({message: 'Incorrect username or password, please try again'});
            return;
        }
        const validPassword = await userData.checkPassword(password);
        if (!validPassword) {
            res.status(400).json({message: 'Incorrect username or password, please try again'});
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: 'You are now logged in!'});
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        }
        );
    } else {
        res.status(404).end();
    }
}
);


module.exports = router;