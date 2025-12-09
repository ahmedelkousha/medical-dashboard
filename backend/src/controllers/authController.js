import * as authService from "../services/authService.js";

export const registerController = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const loginController = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.json(data);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
