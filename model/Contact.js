// require mongoose
const mongoose = require("mongoose");
// require Schema
const { Schema } = mongoose;

// create contactSchema
const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: Number,
});

module.exports = mongoose.model("contact", contactSchema);
