import db from "../models/index";
const bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
let createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassWord = await hashPassWordSV(data.password);

      await db.User.create({
        email: data.email,
        password: hashPassWord,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phonenumber: data.phonenumber,
      });
      resolve({ errMesege: "OK" });
    } catch (e) {
      reject(e);
    }
  });
};
let hashPassWordSV = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassWord = await bcrypt.hashSync(password, salt);
      resolve(hashPassWord);
    } catch (e) {
      reject(e);
    }
  });
};
let getAllUserSv = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findAll({
        raw: true,
      });
      resolve({ errMesege: "Ok", data });
    } catch (e) {
      reject(e);
    }
  });
};
let editUserSv = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.User.findOne({
        where: { id: userId },
      });
      resolve({ errMesege: "Ok", data });
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = { createUser, getAllUserSv, editUserSv };
