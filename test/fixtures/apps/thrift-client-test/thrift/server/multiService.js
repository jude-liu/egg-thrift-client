'use strict';

const thrift = require('thrift');
const EggService = require('../gen-nodejs/EggService');
const DuckEggService = require('../gen-nodejs/DuckEggService');

const port = 10241;

let mulit = new thrift.MultiplexedProcessor();

let processor1 = new EggService.Processor({
  sayHello: function(cb) {
    cb(null, 'Hi, i am egg service!');
  }
});
let processor2 = new DuckEggService.Processor({
  sayHello: function(cb) {
    cb(null, 'Hi, i am duck\'s egg service!');
  }
});

mulit.registerProcessor('eggService', processor1);
mulit.registerProcessor('duckEggService', processor2);

const server = thrift.createMultiplexServer(mulit);

server.listen(port);

server.on('listening', () => {
  console.log(`Multiplex server bound to port ${port}.`);
});
