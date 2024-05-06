const ProductModel = require("../models/product.model");

module.exports = {
    getHomePage: (req, res) => {
        res.render("home/index.ejs", {data: ProductModel.getData()});
    }
}