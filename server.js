const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

require('./routes')(app); 

app.listen(3000, () => {
    console.log('API rodando na porta 3000');
});