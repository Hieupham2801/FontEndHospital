import userServices from "../serviecs/userServices";
let handleLoginUser = async (req, res) => {
  try {
    let email = req.body.email;
    let passWord = req.body.passWord;
    let data = await userServices.handleLoginUserSV(email, passWord);
    return res.status(200).json(data);
  } catch (e) {
    return res.status(200).json({
      errCode: -1,
      errMessege: "Error from server",
    });
  }
};
module.exports = { handleLoginUser };
