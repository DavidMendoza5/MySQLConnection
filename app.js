const mysql = require('mysql')
require('dotenv').config()

const data_base = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

data_base.connect((err) => {
    if(err) {
        throw err
    } else {
        console.log(`Conexión exitosa en el puerto ${process.env.PORT}`)

    }
})