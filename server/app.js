const express = require('express');
const app = express();
const users=require('./Controllers/user.controller');

app.use('/users',users);
app.all('/',(req, res) =>
{
    res.send("הניתוב ששלחת אינו תקין:(")
})

app.listen(5000,()=>{
    console.log("listening on http://localhost:5000");
});
