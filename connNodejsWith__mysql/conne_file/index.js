var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "library",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE library", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
await client.db('mydb').collection("customers").findOne({customer_name:"Asdhish"});