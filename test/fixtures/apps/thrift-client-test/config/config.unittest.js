'use strict';

const config = {};

// thrift client
config.thriftClient = {
  client1: {
    port: '10241',
    host: '127.0.0.1',
    serviceClient: [
      {
        name: 'eggService',
        path: '/thrift/gen-nodejs/EggService.js',
      },
      {
        name: 'duckEggService',
        path: '/thrift/gen-nodejs/DuckEggService.js',
      },
    ],
  },
  client2: {
    port: '10240',
    host: '127.0.0.1',
    serviceClient: {
      name: 'eggService',
      path: '/thrift/gen-nodejs/EggService.js',
    },
  },
};

module.exports = exports = config;
