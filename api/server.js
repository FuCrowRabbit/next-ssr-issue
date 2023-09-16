const express = require('express');
const app = express();
const port = 3001;

// JSONを返すエンドポイントを作成
app.get('/a', (req, res) => {
    setTimeout((() => {
        res.json({
                     result: 'a',
                 });
    }), 5000);
});

// サーバーを起動
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});