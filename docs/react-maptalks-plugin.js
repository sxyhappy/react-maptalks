const path = require('path');

module.exports = function (context, options) {
  return {
    name: 'react-maptalks-plugin',
    configureWebpack(config, isServer) {
      return isServer
        ? {
          resolve: {
            alias: {
              'maptalks.three': path.resolve(__dirname, './maptalksThree.js'),
              'three': path.resolve(__dirname, './three.js')
            },
          },
        }
        : {}
    },
  };
};
