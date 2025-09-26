import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello Epress"); 
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`); 
});