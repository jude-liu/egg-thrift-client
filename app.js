'use strict';

const path = require('path');
const thrift = require('thrift');

module.exports = app => {
  app.thriftClient = {
    clients: {},
    get(clientName) {
      return this.clients[clientName];
    },
  };

  init(app.config.thriftClient);

  function init(clients) {
    if (!clients || typeof clients !== 'object') throw new Error('Thrift client config is missing.');

    for (const key in clients) {
      if (!Array.isArray(clients[key].serviceClient)) {
        createClient(clients[key]);
      } else {
        createMultiplexer(clients[key]);
      }
    }
  }

  function createClient(clientConf) {
    const conn = thrift.createConnection(clientConf.host, clientConf.port);
    const serviceClient = require(path.join(app.config.baseDir, clientConf.serviceClient.path));
    const client = thrift.createClient(serviceClient, conn);
    app.thriftClient.clients[clientConf.serviceClient.name] = client;
  }

  function createMultiplexer(clientConf) {
    const mulit = new thrift.Multiplexer();
    const conn = thrift.createConnection(clientConf.host, clientConf.port, {
      transport: thrift.TBufferedTransport,
      protocol: thrift.TBinaryProtocol,
    });

    for (const sc of clientConf.serviceClient) {
      const serviceClinetPath = path.join(app.config.baseDir, sc.path);
      const client = mulit.createClient(sc.name, require(serviceClinetPath), conn);
      app.thriftClient.clients[sc.name] = client;
    }
  }

};
