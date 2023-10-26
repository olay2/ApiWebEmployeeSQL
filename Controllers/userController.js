const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    var { fname, lname, sex, day, tel, email, password } = req.body;

    console.log("req.body", req.body);
    var pwd = bcrypt.hashSync(password, 10);
    var register = userModel.register(fname, lname, sex, day, tel, email, pwd);
    if (register) {
      res.status(200).json({
        status: 200,
        success: "true",
        message: "ສຳເລັດ",
      });
    } else {
      res
        .json({ status: 405, success: "false", message: "ບໍ່ສຳເລັດ" })
        .status(405);
    }
  },
  login: (req, res) => {
    var { email, password } = req.body;
    userModel.login(email).then((result) => {
      var email = result[0]["email"];
      if (email) {
        var pwd = result[0]["password"];
        var passwordCompare = bcrypt.compareSync(password, pwd);
        
        if (!passwordCompare) {
          return res.status(400).send({
            message: "Invalid Password!!!!",
          });
        }  
      
        const payload = { 
            id: result[0]["id"],
            uname: result[0]['fname']+ " " + result[0]['lname'],
            email: result[0]['email']
        } 
      jwt.sign(payload, 'jwtsecret' ,{ expiresIn: '1h' }, (err, token) =>{
          if (err) throw err;
          res.json({token, payload});
      });
      } else {
        res.json({ status: 401, success: "false", message: "login fail" });
      }
    });
  },
};
