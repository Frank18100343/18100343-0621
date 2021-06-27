const express = require('express');
const cors = require('cors');

const app = express();

const alasql = require('alasql');

alasql("CREATE TABLE Curso (id INT,nombre STRING,nota NUMBER)");

alasql("INSERT INTO Curso VALUES(1,'Desarrollo Web',15)");
alasql("INSERT INTO Curso VALUES(2,'Base de datos',16)");
alasql("INSERT INTO Curso VALUES(3,'Desarrollo Móvil',19)");

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','*');
  next();
})


app.get("/",(req,res)=>{

    res.setHeader('Conten-Type','application/json');
    res.end(JSON.stringify(alasql("SELECT * FROM Curso WHERE nota > 15")));
});

app.listen(8080,()=>{

  console.log('Servidor Iniciando...');
});