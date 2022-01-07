const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo ={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"project1",
}

async function addmessage(user){
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`insert into user(message)values(?)`;
    await connection.queryAsync(sql,[user.message]);
}

let user ={
    message:"hey are you there"
}

async function selectmessage()
{
    const connection=mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql=`select*fromuser`;
    const list = await Connection.queryAsync(sql,[]);
    await Connection.endAsync();
    return list;
}

module.exports={addmessage,selectmessage};