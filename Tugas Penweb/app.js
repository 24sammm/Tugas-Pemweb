const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

connection.connect((err) => {
    if(err){
        console.error("Error Connecting to MYSQL", err.stack);
        return;
    }
    console.log("Connection MySQL Done with id" + connection.threadId)
});

app.set('view engine', 'ejs');

//ini routing(create,read,update,delete)

app.get('/', (req, res) =>{
    const query = 'SELECT * FROM users';
    connection.query(query, (err, results) =>{
        res.render('index',{users: results});
    });
});


//create/input/insert
app.post('/add',(req,res) => {
    const {name,email,phone} = req.body;
    const query = 'INSERT INTO users (name,email,phone) Values (?,?,?)';
    connection.query(query, [name,email,phone], (err,result) =>{
        if(err) throw err;
        res.redirect('/');
    });
});

//update
app.get('/edit/:id', (req,res) => {
    const query = 'SELECT * FROM users WHERE id =?';
    connection.query(query, [req.params.id] ,(err,result) => {
        res.render('edit',{user: result [0]});
    });
});

app.post('/update/:id', (req,res) => {
    const {name,email,phone} = req.body;
    const query = 'UPDATE users SET name = ?, email= ?, phone = ? WHERE id = ?';
    connection.query(query, [name,email,phone,req.params.id], (err,result) =>{
        if(err) throw err;
        res.redirect('/');
    });
});

app.listen(3000,() =>{
    console.log("server berjalan di port 3000,buka web melalui http://localhost:3000" )
});