// Import the MySQL database connection 
const database = require("./database.js");

const express = require("express");

var router = express.Router();


// Get user by user_id
router.get("/users/by-user-id",(request,response) => {
    let mysql_query = `select * from users where user_id = ${request.query.user_id}`;
    console.log("MySQL Query: " + mysql_query);
    database.connection.query(mysql_query, (error,result) => {
        if (error) {
            response.status(500).send("Error at Backend!");
        } else {
            let send_result = {
                first_name : result[0].first_name,
                last_name : result[0].last_name,
                high_risk : result[0].high_risk,
                medium_risk : result[0].medium_risk,
                low_risk : result[0].low_risk
            }
            response.status(200).send(send_result);
        }
    });
});

// Update user's risk profile
router.put("/users/by-user-id",(request,response) => {
    let mysql_query = `update users set high_risk = ${request.body.new_high_risk},
                                        medium_risk = ${request.body.new_medium_risk},
                                        low_risk = ${request.body.new_low_risk}
                       where user_id = ${request.query.user_id}`;
    // console.log("MySQL Query: " + mysql_query);
    database.connection.query(mysql_query, (error,result) => {
        if (error) {
            response.status(500).send("Error at Backend!");
        } else {
            response.status(200).send("Updated!");
        }
    });
});

// Get user's stock records by user_id
router.get("/stock_records/by-user-id",(request,response) => {
    let mysql_query = `select r.exchange_code, r.stock_code, r.no_of_shares, r.purchase_cost, p.current_price
                       from stock_records as r 
                       left join stock_prices as p
                       on r.exchange_code = p.exchange_code and r.stock_code = p.stock_code
                       where r.user_id = ${request.query.user_id}`;
    console.log("MySQL Query: " + mysql_query);
    database.connection.query(mysql_query, (error,result) => {
        if (error) {
            response.status(500).send("Error at Backend!");
            console.log("Error accessing Database!");
        } else {
            response.status(200).send(result);
        }
    });
});

// Get user's deposit records by user_id
router.get("/deposit_records/by-user-id",(request,response) => {
    let mysql_query = `select r.bank_name, r.deposit_type, r.deposit_amt, i.interest_rate
                       from deposit_records as r 
                       left join interests as i
                       on r.bank_name = i.bank_name and r.deposit_type = i.deposit_type
                       where r.user_id = ${request.query.user_id}`;
    console.log("MySQL Query: " + mysql_query);
    database.connection.query(mysql_query, (error,result) => {
        if (error) {
            response.status(500).send("Error at Backend!");
            console.log("Error accessing Database!");
        } else {
            response.status(200).send(result);
        }
    });
});


module.exports = {
    router
};