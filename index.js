const express = require('express') // CommonJS modules
const app = express()
const port = 3000

// Python:
// @app.route('/')
// def home():
// return 'hello world', method=['GET']

const person = {
    name: "Felicis",
    age: 27
}


const posts = [{
    title: 'Felicis',
    body: '',
    is_published: false
}, {
    title: 'Jesso',
    body: '',
    is_published: true
}]
// app.[http-verb]([path], [callback])

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.get('/', (req, res) => {

    // Serialize person and send to the client
    res.send(person)
  //res.send('<h1>Hello Felicis was here.!</h1>')
})

// start the dev server on the given port
// the callback is called when the server is running

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

