const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')

app.use(morgan('combined'))

//mysql database configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
})

app.get('/user/:id', (req, res) => {
  console.log("Fetching user with id: " + req.params.id)

  const userId = req.params.id
  const queryString = "SELECT * FROM users WHERE id = ?"
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("User retrieved, attempting to show result")

    const users = rows.map((row) => {
      return {firstName: row.first_name, lastName: row.last_name}
    })

    res.json(users)
  })

  // res.end()
})

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("This is an example root route")
})

app.get("/users", (req, res) => {


  console.log("Fetching all users")

  const userId = req.params.id
  const queryString = "SELECT * FROM users"
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query for users: " + err)
      res.sendStatus(500)
      return
      // throw err
    }

    console.log("Users retrieved, attempting to show result")

    const users = rows.map((row) => {
      return {firstName: row.first_name, lastName: row.last_name}
    })


  })
})

// localhost:8080
app.listen(8080, () => {
  console.log("Server is up and listening on 8080...")
})
