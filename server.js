const express = require('express');
const SanPham = require('./SanPham');
const app = express();

app.get('/', async (req, res) => {
  try {
    const docs = await SanPham.find({});
    res.send(docs);
  } catch (error) {
    res.status(500).send('Đã xảy ra lỗi trong quá trình truy vấn dữ liệu.');
  }
});

// Khởi động máy chủ và lắng nghe cổng
app.listen(3000, () => {
  console.log('API đang chạy trên cổng 3000');
});
