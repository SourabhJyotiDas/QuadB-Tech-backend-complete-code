const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: String,
  base_unit: String,
  quote_unit: String,
  low: String,
  high: String,
  last: String,
  type: String,
  open: String,
  volume: String,
  sell: String,
  buy: String,
  at: Number,
});

module.exports = mongoose.model('Crypto', cryptoSchema);