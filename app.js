const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const products = [
  {
    id: 1,
    name: "Star Wars"
  },
  {
    id: 2,
    name: "Empire Strikes back"
  }
];

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/products', (req, res) => res.json(products))

app.listen(port, () => console.log(`Example app listening on ${port} port!`))