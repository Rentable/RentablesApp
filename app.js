var mongoose = require('mongoose');
var PropertyModel = require('./models/propertySchema.js');

mongoose.connect('mongodb://tc:tctote@ds059712.mongolab.com:59712/tote');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Conntecion to db');
});

      var bet = new PropertyModel({ propertyType: 'house', rating: 3, address: '2230' });
      bet.save(function (err) {
        if (err) return console.error(err);
      });