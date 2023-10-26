const conn = require('../config/config');
 
module.exports = {
    register: (fname, lname, sex, day, tel, email, pwd) => {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO `users` (fname, lname, sex, day, tel, email, password) VALUES(?,?,?,?,?,?,?)", [fname, lname, sex, day,  tel, email, pwd], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    login: (email) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM users WHERE email = ? ",[email], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
}