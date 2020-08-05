import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ msg: `Hello World`})
})

app.listen(3333);