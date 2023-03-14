const model = require("../models");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const Pagination = require("../config/pagging");
const argon2 = require("argon2");
const url = require("url");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
var nodemailer = require("nodemailer");

require("dotenv").config();

const getUser = async (req, res) => {
  try {
    const search = req.query.search || "";
    const hostname = req.headers.host;
    const pathname = url.parse(req.url).pathname;
    const pagination = new Pagination(
      req.query.page,
      req.query.perPage,
      hostname,
      pathname
    );
    const totalRows = await model.user.count();
    const results = await model.user.findAll({
      where: {
        [Op.or]: [
          {
            username: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },

      offset: pagination.page * pagination.perPage,
      limit: pagination.perPage,
      order: [["createdAt", "DESC"]],
    });
    if (results.length > 0) {
      return res.status(200).json({
        success: true,
        massage: "Get All Berkendara",
        result: results,
        page: pagination.page,
        limit: pagination.perPage,
        totalData: totalRows,
        currentPage: pagination.currentPage,
        nextPage: pagination.next(),
        previouspage: pagination.prev(),
      });
    } else {
      return res.status(404).json({
        success: false,
        massage: "No data",
      });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await model.user.findOne({
      where: { id: req.body.id },
    });

    const passwordIsValid = await argon2.verify(
      user.password,
      req.body.password
    );

    const hashpass = await argon2.hash(req.body.passwordnew);

    if (passwordIsValid) {
      const userUpdate = await model.user.update(
        { password: hashpass },
        {
          where: { id: user.id },
        }
      );
      const Resresult = {
        id: user.id,
        user: userUpdate,
      };
      return res.status(200).json({ msg: true, result: Resresult });
    } else {
      return res
        .status(401)
        .json({ msg: false, result: "password lama salah!" });
    }
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

const forgotPass = async (req, res) => {
  const { email } = req.body;

  try {
    const oldUser = await model.user.findOne({
      where: { email: email },
    });
    if (!oldUser) {
      res.status(400).json({ msg: "Email does not exist" });
    }
    const secret = process.env.PASSWORD_FORGET;
    const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, secret, {
      expiresIn: "30m",
    });
    var decode = jwt_decode(token);
    const data = `<div style="top:10px;">
    <div style="position: absolute; left: 40%; margin-left: -40px; width: 30%; height: auto; background-color: #3F7459; color: #FFF;">
        <h3 style="text-align: center;">SPPD</h3>
        <h4 style="margin-left: 5px">Hello, ${oldUser.username}</h4>
        <h5 style="margin-left: 5px">Anda baru-baru ini meminta untuk mengatur ulang kata sandi untuk akun Anda. Gunakan
            tombol di bawah untuk mengatur ulang. Reset kata sandi ini hanya berlaku selama 24 jam ke depan.
        </h5>
        <br />
        <div style="margin-left: 30%; width: auto; margin-bottom: 40px;">
            <a href="${process.env.client_url}/resetpassword/${token}" style="background-color: #3869D4; border-top: 10px solid #3869D4; border-right: 18px solid #3869D4; border-bottom: 10px solid #3869D4; border-left: 18px solid #3869D4; display: inline-block;color: #FFF; text-decoration: none; border-radius: 3px; box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16); -webkit-text-size-adjust: none; box-sizing: border-box;" target="_blank">Reset your password</a>
        </div>
    </div>
</div>`;

    var transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "capungkoneng@@gmail.com",
        pass: "kabtwpunorxasetp",
      },
    });

    var mailOptions = {
      from: "capungkoneng@@gmail.com",
      to: "tedi.suryadi77@gmail.com",
      subject: "Sending Email using Node.js",
      html: data,
      text: oldUser.email,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(200).json({
      msg: "Email Sukses Terkirim",
      resetpas: {
        email: decode.email,
        id: decode.id,
        expires: decode.exp,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const changePassById = async (req, res) => {
  try {
    const user = await model.user.findOne({
      where: { id: req.body.id },
    });

    const hashpass = await argon2.hash(req.body.password);

    const userUpdate = await model.user.update(
      { password: hashpass },
      {
        where: { id: user.id },
      }
    );
    const Resresult = {
      id: user.id,
      user: userUpdate,
    };
    return res.status(200).json({ msg: true, result: Resresult });
  } catch (error) {
    res.status(500).json({ masagge: error.message });
  }
};

module.exports = {
  getUser,
  updateUser,
  forgotPass,
  changePassById,
};
