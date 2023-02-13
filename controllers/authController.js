const model = require("../models");
const auth = require("../middleware/auth");
const argon2 = require("argon2");
const ip = require("ip");

const registerNewUsers = async (req, res) => {
  const { role_name, username, email, password, fullName, phone } = req.body;
  try {
    const user = await model.user.findOne({
      where: { username: username },
    });
    if (user) {
      return res.status(403).json({ msg: "User already registered" });
    }
    const hashpass = await argon2.hash(password);
    const result = await model.user.create({
      role_name: role_name,
      username: username,
      password: hashpass,
      email: email,
      fullName: fullName,
      phone: phone,
    });
    const resResult = {
      role_name: result.role_name,
      username: result.username,
      id: result.id,
    };
    return res.status(201).json({ msg: true, result: resResult });
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const loginUsers = async (req, res) => {
  try {
    const user = await model.user.findOne({
      attributes: ["id", "password", "username"],
      where: { username: req.body.username },
    });

    if (!user) {
      return res.status(403).json("username tidak ada / belum daftar");
    }
    const passwordIsValid = await argon2.verify(
      user.password,
      req.body.password
    );
    if (!passwordIsValid) {
      return res.status(403).json("salah password");
    }
    const token = auth.generateToken(user.id);
    const userSession = await model.session.create({
      user_id: user.id,
      ip_address: ip.address(),
      acces_token: token,
      is_bloked: false,
      lat: "-6.914744",
      long: "107.609810",
    });
    const Resresult = {
      id: user.id,
      username: user.username,
      role_name: user.role_name,
      session: userSession,
    };
    return res.status(200).json({ msg: true, result: Resresult });
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const logoutUsers = async (req, res) => {
  const id = req.session.userId;
  try {
    const sessionDel = await model.session.destroy({
      where: {
        user_id: id,
      },
    });
    if (sessionDel) {
      req.session.destroy();
      return res.status(200).json({
        success: true,
        msg: "berhasil logout ",
      });
    } else {
      return res.status(200).json({ success: false, msg: "gagal logout" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.masagge });
  }
};

module.exports = {
  registerNewUsers,
  loginUsers,
  logoutUsers,
};
