import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('<h1>Yolo world</h1>');
});

app.listen(8080);
