var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "root",
  database: 'mydb'
});

con.connect(function(err) {
  if(err)
    console.log(err)
   else
    console.log("Connected to MYSQL sERVER.....") 
});

module.exports=con;

