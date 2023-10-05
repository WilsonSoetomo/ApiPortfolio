const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var data = [
    {
        name: 'Jody',
        age: 23
    },
    {
        name: 'Peter',
        age: 21
    },
    {
        name: 'Wilson',
        age: 23
    },
];

app.get('/', (req, res) => {
    res.json(data);
})

app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data);
})

app.patch('/:index', (req,res) =>
{
    data[req.params.index] = req.body;
    res.json(data);
})
app.delete('/:index',(req,res)=>
{
    data.splice(req.params.index, 1);
    res.json(data);
})

app.listen(3000, () =>{
    console.log('server is running on port 3000')
})
