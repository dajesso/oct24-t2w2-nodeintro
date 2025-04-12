const express = require('express') // CommonJS modules
const app = express()
const port = 3000

// Python:
// @app.route('/')
// def home():
// return 'hello world', method=['GET']

// app.[http-verb]([path], [callback])

app.get('/', (req, res) => {
  res.send('Hello Felicis was here.!')
})

// start the dev server on the given port
// the callback is called when the server is running

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

