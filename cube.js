var config = require('./config');

function Cube (id) {
	this.id = id;
	this.x = Math.random()*config.MAP_WIDTH;
	this.y = Math.random()*config.MAP_HEIGHT;
	this.edge = Math.random()*(config.MAX_EDGE-config.MIN_EDGE)+config.MIN_EDGE;
}
Cube.prototype.updateWithCubeData = function(data) {
	if (data === undefined) return;
	if (data.x !== undefined) this.x = data.x;
	if (data.y !== undefined) this.y = data.y;
	if (data.edge !== undefined) this.edge = data.edge;
}

module.exports = Cube;