import userModel from "../Model/users.model.js";
import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "secretkey",
      function (error, verifiedToken) {
        if (error) {
          return res.status(403).json({ message: "Invalid JWT Token" });
        }
        userModel
          .findById(verifiedToken._id)
          .then((user) => {
            (req.user = user), next();
          })
          .catch((err) => res.status(500).json({ message: err.message }));
      }
    );
  } else {
    return res.status(404).json({ message: "Token not found" });
  }
}
