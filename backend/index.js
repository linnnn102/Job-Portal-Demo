import express from 'express';
const app = express();
const port = 5003;

app.get('/api/products',(req,res) => {
    res.send("")
})
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})