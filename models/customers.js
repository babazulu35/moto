var mongoose = require('mongoose');

// Customers Schema

var CustomersSchema = mongoose.Schema({

});

var Customers = moduel.exports = mongoose.model('Customers',CustomersSchema);

module.exports.getCustomers = function(callback,limit) {
	Customers.find(callback).limit(limit);
}

module.exports.getCustomerById = function(id,callback){

}

module.exports.getCusotmersByUsername = function(username,callback) {

}

