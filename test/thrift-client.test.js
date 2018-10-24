'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/thrift-client.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/thrift-client-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, thriftClient')
      .expect(200);
  });

  it('single service request', async () => {
    const client = app.thriftClient.get('eggService');
    const res = await client.sayHello();
    assert(res === 'Hi, i am egg service!');
  });

  it('multi service request', async () => {
    let client = app.thriftClient.get('eggService');
    let res = await client.sayHello();
    assert(res === 'Hi, i am egg service!');
    client = app.thriftClient.get('duckEggService');
    res = await client.sayHello();
    assert(res === 'Hi, i am duck\'s egg service!');
  });
});
