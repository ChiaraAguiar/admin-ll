const ProductsController = require('../controllers/products.controller');
modules.exports = (app) => {
    app.get('/api', ProductsController.index);
    app.post('/api/products', ProductsController.createaProduct);

}
