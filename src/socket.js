import { io } from 'socket.io-client';

const URL = 'http://localhost:5001';
const socket = io(URL, { autoConnect: false });

socket.on('connect', () => {
  console.log('successfully connected with socket.io server');
  console.log(socket.id);
});

socket.on('connect_error', (err) => {
  if (err.message === 'Invalid username') {
    console.log('fail to connect due to invalid username');
  }
});

socket.on('users', (users) => {
  console.log(users);
});

export default socket;
