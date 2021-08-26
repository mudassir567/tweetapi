const express = require("express");
const Usermodel = require("../model/Users_model");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { CustomValidation } = require("express-validator/src/context-items");

// console.log("hellllllllllllllllllll")

router.get("/", async (req, res) => {
  const user = await Usermodel.find({});
  res.send(user);
});

router.post(
  "/signup",
  [
    check("name", "please enter a valid name").not().isEmpty(),
    check("email", "email must be valid").isEmail(),
    check("password", "password must be min 8 characters").isLength({ min: 8 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    console.log(errors)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const emailexists = await Usermodel.findOne({ email: req.body.email });
      if (emailexists) return res.status(400).send("email already exists");

      //hash the passwords

      const salt = await bycrypt.genSalt(10);
      const hashpassword = await bycrypt.hash(req.body.password, salt);

      const user = new Usermodel({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword,
      });

      const saveduser = await user.save();
      res.send(saveduser);
    } catch (err) {
      res.status(400).send(err);
    }
  }
);

router.post(
  "/signin",
  [
    check("email", "email must be valid").isEmail(),
    check("password", "password must be min 8 characters").isLength({ min: 8 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await Usermodel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("email or password is wrong ");

    const validpass = await bycrypt.compare(req.body.password, user.password);
    if (!validpass) return res.status(400).send(" invalid password");

    const token = jwt.sign({ _id: user._id }, process.env.token_key);
    res.header("auth-token", token).send(token);
  }
);

module.exports = router;
