const express=require('express')
const mysql=require('mysql');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
app.use(express());
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"bulletinboard"
})

const executeQuery=(sql,res)=>{
    con.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
}
app.use('/get-articles',(req,res)=>{
    var sql="SELECT * FROM articles"
    executeQuery(sql,res);
})
app.use('/create',(req,res)=>{
    var sql="INSERT INTO articles(title,content) VALUES('"+req.body.data.title+"','"+req.body.data.content+"');"
    executeQuery(sql,res);
})
app.use('/edit',(req,res)=>{
    var sql="UPDATE articles SET title='"+req.body.data.title+"',content='"+req.body.data.content+"' WHERE id='"+req.body.id+"';"
    executeQuery(sql,res);
})
app.use('/delete',(req,res)=>{
    var sql="DELETE FROM articles WHERE id='"+req.body.data.id+"';"
    executeQuery(sql,res);
})

app.listen(8000);