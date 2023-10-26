const conn = require('../config/config.js');

module.exports = {
    getproductList: () => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM `product`", (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    getproduct: (id) => {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM `product` where id = ? ", [id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    addProduct: (name, type, price) => {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO `product` (name, type, price) VALUES(?,?,?)", [name, type, price], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    updateProduct: (name, type, price, id) => {
        return new Promise((resolve, reject) => {
            conn.query("UPDATE `product` SET `name` = ?, `type` = ?, `price` = ? WHERE id = ? ", [name, type, price, id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
    daleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            conn.query("DELETE FROM `product` WHERE id = ? ", [id], (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    },
}