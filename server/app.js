const net = require('net')
const NodeCache = require('node-cache')

//TODO: create an environment file
const port = 80
const host = 'localhost'
const secretToken = '12345'

const server = net.createServer()
const cache = new NodeCache()

server.listen(port, host, () => {
  console.log(`Server listening on port ${port}`)
})

server.on('connection', socket => {
  socket.on('data', buffer => {
    const connectionData = JSON.parse(buffer.toString())

    if(connectionData.secretToken !== secretToken) {
      socket.end()

      return
    }

    //TODO: receive message content, save in database and update message history

    const updatedMessageHistory = 'mocked'

    console.log(connectionData.messageInfo)

    const responseBuffer = Buffer.from(JSON.stringify({ messages: updatedMessageHistory}))

    socket.write(responseBuffer)
  })

  socket.on('error', error => {
    console.log(error.code)
  })
})
