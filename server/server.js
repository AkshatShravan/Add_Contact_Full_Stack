const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Creating Database
const mysql = require("mysql");

const database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"akshatdb"
});

database.connect();

app.post("/savecontact", function(req,res){
    var n =req.body.fname;
    var e =req.body.email;
    var m =req.body.mobile;

    var sql = "insert into contact(name, mobile, email) values('"+n+"','"+m+"','"+e+"')";

    database.query(sql , function(error , rows, fields){
        if(error) throw error
        res.send(n + " Added Successfully" );
        res.end();
    })

})

app.get("/contactlist",function(req, res){
    var sql = "select * from contact order by id asc";
    database.query(sql , function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })

});

app.post("/deletecontact", function(req, res){
    var id = req.body.id;
    var sql = "delete from contact where id="+id;
    database.query(sql , function(error , rows, fields){
        if(error) throw error
        res.send( "Record Deleted Successfully" );
        res.end();
    })
});

app.post("/getcontact", (req, res)=>{
    var id = req.body.id;
    var sql = "select * from contact where id="+id;
    database.query(sql , function(error , rows, fields){
        if(error) throw error
        res.send( JSON.stringify(rows) );
        res.end();
    })
});

app.post("/updatecontact", (req, res)=>{
    var n = req.body.name;
    var m = req.body.mobile;
    var e = req.body.email;
    var id = req.body.id;

    var sql = `update contact set name="${n}", email="${e}", mobile="${m}" where id = ${id}`;

    database.query(sql, (error, rows, fields)=>{
        if(error) throw error
        res.send(n + "Updated");
    })
})

app.listen(1234, ()=>{
    console.log("Server is running on port: 1234");
})