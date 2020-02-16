const express = require('express');
const app = express();


//body JSON type
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*accept different domain access permission*/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-origin', '*');
    res.header('Access-Control-Allow-Orogin', "Origin, X-Requested-Width, Content-Type, Accept, Authorization");
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/*use routes*/
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;