var dgram = require('dgram');
var async = require('async');


function Client(id, host, port) {
  this.host = host || 'localhost';
  this.port = (port || 2000) + id;

  this.socket = dgram.createSocket('udp4')
  this.q = async.queue(this.sender.bind(this));
}


Client.prototype.sender = function(message, cb) {
  var b = new Buffer(message);
  this.socket.send(b, 0, b.length, this.port, this.host, function(err) {
    if (err) throw err;
    setTimeout(cb, 5);
  });
};


Client.prototype.clear = function() {
  this.q.push('CLEAR');
};


Client.prototype.close = function() {
  this.q.push('CLOSE');
};


Client.prototype.names = function(arr) {
  this.q.push('NAMES ' + arr.join(' '));
};


Client.prototype.labels = function(arr) {
  this.q.push('LABELS ' + arr.join(' '));
};


Client.prototype.push = function(arr) {
  var msg = 's ' + arr.join(' ');
  this.q.push(msg);
};


module.exports = Client;
