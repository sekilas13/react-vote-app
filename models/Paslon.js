const mongoose = require("mongoose");

const PaslonScheme = mongoose.Schema({
  pasanganCalon: {
    required: true,
    type: String,
  },
  img: {
    data: Buffer,
    contentType: String,
  },
  date: {
    required: false,
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("paslon", PaslonScheme);