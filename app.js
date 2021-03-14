const { urlencoded } = require('body-parser');
const express = require('express')
const path = require('path')
const engines = require('consolidate');

const app = express();
const port = 80;

app.use('/static',express.static('./static'))
app.use(express.urlencoded())

app.set('view engine','html')
app.engine('html', engines.mustache);
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.status(200).render('index.html')
})

app.listen(port,()=>{
    console.log(`Application started successfully on port ${port}`)
})