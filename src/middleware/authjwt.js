const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

verifyTokens = (req, res, next) => {
  console.log(req.headers.authorization);
  if (!req.headers.authorization) {
    res.status(401).send({ message: "Unauthorized" });
  } else {
    jwt.verify(req.headers.authorization, config.secret, (err, decoded) => {
      console.log(decoded);
      if (decoded) {
        req.user = decoded.data;
        next();
      } else {
        res.status(401).send({ message: "Unauthorized" });
      }
    });
  }
};

module.exports = verifyTokens;
