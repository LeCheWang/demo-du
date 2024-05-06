const express = require('express')
const app = express()
const HomeController = require("./controllers/home.controller"); 
//HTTP method: GET, POST...

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get('/', HomeController.getHomePage);

app.listen(5000, () => {
    console.log("server run at port 5000");
})