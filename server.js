
var io = require('socket.io').listen(4242);
io.set('log level',1);

var Cube = require('./Cube');
var cubes = {};

io.sockets.on('connection', function(socket) {

	for (var playerId in cubes) {
		socket.emit('cubeUpdate', cubes[playerId]);
	}

	var cube = new Cube(socket.id);
	cubes[socket.id] = cube;
	io.sockets.emit('cubeUpdate', cube);

	socket.on('cubeUpdate', function (cubeData) {
		var cube = cubes[socket.id];
		if (cube !== undefined) cube.updateWithCubeData(cubeData);
		socket.broadcast.emit('cubeUpdate', cubeData);
	});

	socket.on('disconnect', function (){

	});
});