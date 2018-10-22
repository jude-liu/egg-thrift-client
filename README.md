# egg-thrift-client

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-thrift-client.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-thrift-client
[travis-image]: https://img.shields.io/travis/eggjs/egg-thrift-client.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-thrift-client
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-thrift-client.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-thrift-client?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-thrift-client.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-thrift-client
[snyk-image]: https://snyk.io/test/npm/egg-thrift-client/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-thrift-client
[download-image]: https://img.shields.io/npm/dm/egg-thrift-client.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-thrift-client

<!--
Description here.
-->

## Install

```bash
$ npm i egg-thrift-client --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.thriftClient = {
  enable: true,
  package: 'egg-thrift-client',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.thriftClient = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
