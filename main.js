const express = require("express");
const app = express();
const http = require("http");
const path = require("path"); // Thêm thư viện path để xử lý đường dẫn an toàn hơn

const server = http.createServer(app);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3000, () => {
  console.log("Server đang chạy tại http://localhost:3000");
});
