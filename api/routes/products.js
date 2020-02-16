const express = require('express');
const router = express.Router();
const dbActions = require('../../models/dbActions.js');

router.get('/', async (req, res, next) => {
    //const products
    const products = await dbActions.dbGetProducts().then((results) => {
        return results;
    });

    res.status(200).json({
        message: 'Handling GET requests to /product',
        products: products
    });
});

router.post('/', async (req, res, next) => {
    console.log({name: req.body.name, price: req.body.price});

    const product = await dbActions.dbInsert(req.body.name, req.body.price).then((result) => {
        return result;
    });
    
    res.status(200).json({
        message: 'Handling POST requests to /product',
        product: product      
    })
})

router.get('/:productId', async (req, res, next) => {
    const id = req.params.productId;

    const products = await dbActions.dbGetProducts(id).then((results) => {
        return results;
    });

    res.status(200).json({
        message: 'Handling GET requests to /product',
        products: products
    });
});

router.delete('/:productId', async (req, res, next) => {
    const id = req.params.productId;

    await dbActions.dbDeleteProduct(id).then(() => {
        console.log('Delete a product successfully');
    });

    res.status(200).json({
        message: 'Handling GET requests to /product',
    });
});


module.exports = router;

