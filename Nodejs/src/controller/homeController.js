import homeServices from "../serviecs/homeServices";
let createNewUser = async (req, res) => {
  try {
    let user = await homeServices.createUser(req.body);
    return res.status(200).json(user);
  } catch (e) {
    console.log("check err", e);
    return (
      res.status(200),
      json({
        errCode: -1,
        errMessege: "Error from server",
      })
    );
  }
};
let getAllUser = async (req, res) => {
  try {
    let data = await homeServices.getAllUserSv();
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({ errCode: -1, errMessege: "Err from server" });
  }
};
let editUser = async (req, res) => {
  try {
    let data = await homeServices.editUserSv(req.query.id);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({ errCode: -1, errMessege: "Err from server" });
  }
};
module.exports = {
  createNewUser,
  getAllUser,
  editUser,
};
