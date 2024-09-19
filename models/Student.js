const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  rollNo:{type: String},
  name:{type: String },
  fatherName: {type: String},
  aadharCardNo: { type: String},
  mobileNo: {type : String}

})

module.exports = mongoose.model('Student',StudentSchema)//same tablename same as file name