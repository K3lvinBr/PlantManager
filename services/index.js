const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'plantmanager'
});

app.post('/register', (req, res) => {
  const { place } = req.body
  const { name } = req.body
  const { image } = req.body
  const { time } = req.body

  let SQL = "INSERT INTO plants ( place, name, image, time ) VALUES ( ?, ?, ?, ? )";

  db.query(SQL, [place, name, image, time], (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
})

app.get('/plants', (req, res) => {
  let SQL = 'SELECT * from plants'

  db.query(SQL, (err, result) => {
    if (err) console.log(err)
    else res.send(result)
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});
