'use strict';

/**
 * egg-thrift-client default config
 * @member Config#thriftClient
 * @property {String} SOME_KEY - some description
 */
exports.thriftClient = {
  // multi service
  client1: {
    port: '10240',
    host: '127.0.0.1',
    serviceClient: [
      {
        name: 'testService1',
        path: '/thrift/gen-nodejs/testService1.js',
      },
      {
        name: 'testService2',
        path: '/thrift/gen-nodejs/testService2.js',
      },
    ],
  },
  // single service
  client2: {
    port: '10241',
    host: '127.0.0.1',
    serviceClient: {
      name: 'testService',
      path: '/thrift/gen-nodejs/testService.js',
    },
  },
};
