const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("What Should I Eat?");
});

module.exports = router;