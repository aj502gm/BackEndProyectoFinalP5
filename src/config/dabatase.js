//const mysql = require('mysql2')
const mysql = require('mysql')
//const { rootcertificates } = require("tls")

const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'holamundo',
    connectionLimit: 5,
    dabatase: 'proyectocomics',
    port:'3306',
})

conn.connect(err =>{
    if(err){
        console.log(err)
    }else{
        console.log("success")
        console.log(conn)
    }
})

module.exports = conn;
