const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log("tu base si funciona"))
  .catch(err => console.log("upsi algo salio mal", err));
