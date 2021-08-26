const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(400).send("access-denied");

  try {
    const verified = jwt.verify(token, process.env.token_key);
    req.user = verified;
  } catch (err) {
    res.status(400).send("invalid token");
  }
}
