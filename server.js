const { createServer }= require('http')
const app = require('./src/app')

const PORT = process.env.PORT || 3000 

const server = createServer(app)

server.listen(PORT)
server.on('listening', () => console.log('Server on Port:', PORT))