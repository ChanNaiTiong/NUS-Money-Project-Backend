// Create an object to expose all the functionalities of mysql module
const mysql = require("mysql");

// Establish connection to database
const properties = {
    host:"34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "b11_gp4_nm"
}

let connection = mysql.createConnection(properties);

connection.connect((error) => {
    if (error) {
        console.log("Failed to connect to Database! \n" + error);
    } else {
        console.log("Connected to Database!");
    }
});

module.exports = {
    connection
};
