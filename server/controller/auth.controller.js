import User from "../models/user.model.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (password === existingUser.password) {
      console.log(existingUser);
      res.json({ data: existingUser });
    }
  } catch (error) {
    res.json({
      message: "User doesnot exists",
    });
  }
};
export const register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const newUser = await User({
        firstname,
        lastname,
        email,
        password,
      });
      await newUser.save();
      console.log("user registered");
      res.json({ message: "User Registered" });
    }
  } catch (error) {
    console.log("user errpr");
    res.json({
      message: error.message,
    });
  }
};
