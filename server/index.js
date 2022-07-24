const { Server } = require('socket.io');
const httpServer = require('http').createServer();

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) return next(new Error('Invalid username'));
  socket.username = username;
  return next();
});

io.on('connection', (socket) => {
  // Listing all connected socket instances (user)
  const users = [];
  for (let [id, socket] of io.of('/').sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  console.log('users:', users);
  socket.emit('users', users);
});

httpServer.listen(5001);
