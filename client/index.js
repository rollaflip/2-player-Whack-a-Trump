// Import from the module './whiteboard':
//   The default export, naming it draw,
//   An export named `events`, calling it `whiteboard`.
import whiteboard, {draw} from './whiteboard'
// const socketio = require('socket.io');

var socket = io(window.location.origin)
// Example: Draw a single stroke.
draw([0, 0], [250, 250], 'red', true)

whiteboard.on('draw', function(payload) {
  console.log(payload)
});

socket.on('connect', function() {
  console.log('I have made a 2 way connection with the server!')
});
