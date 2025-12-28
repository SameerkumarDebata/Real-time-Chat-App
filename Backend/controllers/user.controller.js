import User from "../models/user.model.js";
import { asyncHandller } from "../utilities/asyncHandler.utility.js";

export const register = asyncHandller((req, res,next) => {
  const { fullName, username, password, gender } = req.body;

  if (!fullName || !username || !password || !gender) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Register validation passed",
  });
});

export const login = (req, res) => {
  res.send("Hello this is login route");
};
