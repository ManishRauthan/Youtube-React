import userModel from "../Model/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function register(req, res) {
  const { fullname, email, password } = req.body;

  userModel.findOne({ email: email.toLowerCase() }).then((data) => {
    if (data) {
      return res.status(409).json({ message: "User already Exists" });
    } else {
      const newUser = new userModel({
        fullname,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password, 10),
      });

      newUser
        .save()
        .then((data) => {
          return res.status(200).json(data);
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    }
  });
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const data = await userModel.findOne({ email: email.toLowerCase() });

    if (!data) {
      return res.status(404).json({ message: "User is not Registered" });
    }

    const validPassword = await bcrypt.compare(password, data.password);

    if (!validPassword) {
      return res.status(403).json({ message: "Invalid Password" });
    }

    const token = jwt.sign({ id: data._id }, "secretkey", { expiresIn: "40m" });

    res.status(200).json({
      user: {
        email: data.email,
        fullname: data.fullname,
      },
      accessToken: token,
      message: {
        output: "Successful Login",
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
}
