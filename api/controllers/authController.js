import User from "../models/User.js";

export const register = async (req, res, next) => {
  const { email } = req.body;
  console.log("body", req.body);
  const emailExist = User.findOne({ email });
  if (!emailExist) {
    return res.send(`${email} existed`);
  }

  return res.send("Register successfully");
};
