const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/posts', (req, res)=>{

});

app.post('/events', (req, res)=>{
    
});

app.listen(4002, ()=>{
    console.log('Listing on port 4002')
});