const express = require('express')
const path = require('path')
const open = require('open')
const compression = require('compression')
const serveStatic = require('serve-static')

const port = process.env.PORT || 3000
const app = express()

app.use(compression())
app.use(serveStatic(path.join(__dirname, 'dist/')))
app.use(serveStatic(path.join(__dirname, 'storybook-static/')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.get('/storybook', function (req, res) {
  res.sendFile(path.join(__dirname, 'storybook-static/index.html'))
})

app.listen(port, function (err) {
  if (err) {
    // eslint-disable no-console
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})
