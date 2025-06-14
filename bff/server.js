import express from 'express';
import * as products from './db/products.json' with { type: 'json' };
import cors from 'cors';

const app = express();

/*
Без конфига = Access-Control-Allow-Origin: *
* */
app.use(cors());

app.get('/', (req, res) => {
    console.log(`[request]`, req)
    res.send('Hello world :)');
});

app.get('/products', (req, res) => {
    res.json(products.default);
})

app.listen(3000, function () {
    console.log('Listening on port 3000..');
});
