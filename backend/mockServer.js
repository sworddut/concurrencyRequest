const express = require('express');
const cors = require('cors'); // 引入 cors 中间件
const app = express();
const port = 3001;

// 配置 CORS
app.use(cors({
  origin: true,
  credentials: true,
}));

app.get('/data/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Received request for data ${id}`);
  
  // 模拟延迟
  setTimeout(() => {
    res.json({ data: `Response for data ${id}` });
  }, 100); // 100ms 的延迟
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
