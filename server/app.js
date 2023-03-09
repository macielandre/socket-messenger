const net = require('net')
const NodeCache = require('node-cache')
const AppController = require('./src/controllers/app-controller')

require('dotenv').config()

const { PORT = 80, HOST = 'localhost', SECRET_TOKEN } = process.env

const server = net.createServer()
const cache = new NodeCache()

server.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT}`)
})

server.on('connection', socket => {
  socket.on('data', async buffer => {
    const connectionData = JSON.parse(buffer.toString())

    
    if(connectionData.secretToken !== SECRET_TOKEN) {
      socket.end()
      
      return
    }
    
    const updatedMessageHistory = await AppController.onData(connectionData.messageInfo)
    const responseBuffer = Buffer.from(JSON.stringify({ messages: updatedMessageHistory}))

    socket.write(responseBuffer)
  })

  socket.on('error', error => {
    console.log(error.code)
  })
})
