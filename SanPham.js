const mongoose = require('mongoose');
const url =  "mongodb+srv://ducbinhnguyennd:ducbinhnguyennd@cluster0.geuahvt.mongodb.net/qlbanhang?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Kết nối thành công");
}).catch((err)=>{
    throw err;
});

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const SanPhamSchema = new Schema({
    name: {type: String, default: 'alooooo'},
    soLuong: {type: Number}
  });
  
  module.exports = mongoose.model('SanPham', SanPhamSchema);