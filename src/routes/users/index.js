var express = require("express");
const saveUser = require("../../api/users/controllers/saveUser");
const getRole = require("../../api/users/controllers/getRole");
var router = express.Router()


router.put("/users/:email", saveUser);
router.get("/user/:email", getRole);

module.exports = router;