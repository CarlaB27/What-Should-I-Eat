const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validation = require("./validation");

router.get("/users/sign_up", userController.signUp);
router.post("/users/sign_up", validation.validateUsers, userController.create);

//router.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/profile',
//     failureRedirect: '/login',
//     failureFlash: true
// }));

module.exports = router;