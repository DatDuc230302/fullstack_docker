import { users } from "../models/usersModel.js";

export const getUsers = async (req, res) => {
  try {
    const data = await users.find();
    return res.status(200).json({ data });
  } catch (err) {}
};

export const createUser = async (req, res) => {
  try {
    const newUser = new users({
      displayName: "Đạt",
      age: 15,
    });
    await newUser.save();
    return res.status(200).json({ message: "Thành công" });
  } catch (err) {}
};

export const deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    await users.findOneAndDelete({ _id });
    return res.status(200).json({ message: "Thành công" });
  } catch (err) {}
};
