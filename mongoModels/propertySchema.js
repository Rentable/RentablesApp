var mongoose = require("mongoose");
var propertySchema = new mongoose.Schema({
  propertyType: String,
  rating: Number,
  address: String
});

module.exports = mongoose.model('PropertyModel', propertySchema);