'use strict';

const path = require('path');
const thrift = require('thrift');

module.exports = app => {
	app.thriftClient = {
		clients: {},
		get: function(clientName) {
			return this.clients[clientName];
		}
	};
	
	init(app.config.thrift);

	function init(clients) {
		if (!clients || typeof clients !== 'object') throw new Error('Thrift client config is missing.');

		for (let key in clients) {
			if (!Array.isArray(clients[key].serviceClient)) {
				createClient(clients[key]);
			} else {
				createMultiplexer(clients[key]);
			}
		}
	}

	function createClient(clientConf) {
		let conn = thrift.createConnection(clientConf.host, clientConf.port);
		let serviceClient = require(path.join(app.config.baseDir, clientConf.serviceClient.path));
		let client = thrift.createClient(serviceClient, conn);
		app.thriftClient.clients[clientConf.serviceClient.name] = client;
	}

	function createMultiplexer(clientConf) {
		let mulit = new thrift.Multiplexer();
		let conn = thrift.createConnection(clientConf.host, clientConf.port,  {
			transport: thrift.TBufferedTransport,
			protocol: thrift.TBinaryProtocol,
		});

		for (let sc of clientConf.serviceClient) {
			let serviceClinetPath = path.join(app.config.baseDir, sc.path);
			let client = mulit.createClient(sc.name, require(serviceClinetPath), conn);
			app.thriftClient.clients[sc.name] = client;
		}
	}

};
