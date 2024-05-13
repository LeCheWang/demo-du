const express = require('express');
const app = express();
const connectDB = require('./configs/database');
const HomeController = require('./controllers/home.controller');
//HTTP method: GET, POST...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

connectDB();

app.post('/api/products', HomeController.createProduct);
app.get('/api/products', HomeController.getProducts);
app.patch('/api/products/:id', HomeController.updateProduct);
app.delete('/api/products/:id', HomeController.deleteProduct);

app.listen(5000, () => {
  console.log('server run at port 5000');
});
