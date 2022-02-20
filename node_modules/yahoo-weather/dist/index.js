'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWeather;

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getWeather(location) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';

  var queryUri = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u=\'' + unit + '\' AND woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json';
  return (0, _isomorphicFetch2.default)(queryUri).then(function (response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  }).then(function (json) {
    return json.query.results === null ? null : json.query.results.channel;
  });
}
module.exports = exports['default'];
