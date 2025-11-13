import Users from "../models/usersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashpsrwd = await bcrypt.hash(password, 10);
    if (await Users.findOne({ email })) {
      return res.json("Email Already In Use");
    }

    const user = new Users({ username, email, password: hashpsrwd });
    await user.save();
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.username,
      },
      process.env.JWT_SECRET_KEY, 
      { expiresIn: "2d" } 
    );
    console.log("User Added:", req.body);
    res.status(201).json({ message: "User Saved Successfully", token });
  } catch (err) {
    console.error("Error Saving User:", err);
    res.status(500).json("Error Saving User");
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
      const pswrdok = await bcrypt.compare(password, user.password);
      if (pswrdok) {
        const token = jwt.sign(
          {
            email: user.email,
            name: user.username,
          },
          process.env.JWT_SECRET_KEY, 
          { expiresIn: "2d" } 
        );

        console.log("User Logged In:", email);
        res.status(200).json({ message: "Login Successful", token });
      } else {
        return res.status(400).json("Incorrect Password");
      }
    } else {
      return res.status(400).json("User Not Found");
    }
  } catch (err) {
    console.error("Error During Login:", err);
    res.status(500).send("Error During Login");
  }
};



export { signup, login };
// module.exports = {
//   signup,
//   login,
// };
