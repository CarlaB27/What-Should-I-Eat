const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



module.exports = {
    signUp(req, res, next) {
        res.render("users/sign_up");
    },

    create(req, res, next) {
        let newUser = {
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };
        userQueries.createUser(newUser, (err, user) => {
            const msg = {
                to: req.body.email,
                from: 'support@wsie.com',
                subject: 'Welcome to What Should I Eat',
                text: 'Thanks for joining What Should I Eat. Happy recipe hunting!',
                html: '<strong>Thanks for joining What Should I Eat. Happy recipe hunting!</strong>',
            };
            if (err) {
                req.flash("error", err);
                res.redirect("/users/sign_up");
            } else {
                passport.authenticate("local")(req, res, () => {
                    req.flash("notice", "You have signed in");
                    sgMail.send(msg);
                    res.redirect("/");
                })
            }
        });
    },


}