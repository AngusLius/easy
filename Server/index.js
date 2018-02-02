const Koa = require('koa')
const Server = require('koa-static')
const path = require('path')
const cp = require('child_process')

const app = new Koa()
const staticPath = '../dist'

app.use(Server(path.join(__dirname, staticPath)))

cp.exec('start chrome http://localhost:3000')

app.listen('3000', () => {
  console.log('Mock Server is starting at port 3000')
})
