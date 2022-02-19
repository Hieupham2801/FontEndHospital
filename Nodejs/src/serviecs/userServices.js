import db from "../models";
const bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);
let handleLoginUserSV = (email, passWord) => {
  return new Promise(async (resolve, reject) => {
    try {
      let dataUser = {};
      let isExist = await checkEmailUser(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
        });
        if (user) {
          let check = await bcrypt.compareSync(passWord, user.passWord);
          if (check) {
            resolve({
              errCode: 0,
              errMessege: "OK",
              user,
            });
          }
        } else {
          resolve({
            errMessege: "User is not found",
          });
        }
      } else {
        resolve({
          errCode: 1,
          errMessege: `Your email isn"t exist`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let checkEmailUser = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let comparePassWord = (passWord) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleLoginUserSV,
};
