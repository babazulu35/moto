var mongoose = require('mongoose');

var ProductsSchema = mongoose.Schema({

});

var Products = module.exports = mongoose.model('Products',ProductsSchema);

module.exports.getProductById = function(id,callback) {

}

module.exports.getProducts = function(callback,limit) {
	Products.find(callback).limit(limit);
}
