'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePlayer = removePlayer;
exports.getPlayer = getPlayer;

var _players = require('@/api/players');

var _players2 = _interopRequireDefault(_players);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @private
 * Removes the Api instance from the list of active players.
 * The instance will no longer be queryable
 * @param {Api} api - The Player API to remove
 * @returns {void}
 */

function removePlayer(api) {
  for (var i = _players2.default.length; i--;) {
    if (_players2.default[i].id === api.id) {
      _players2.default.splice(i, 1);
      break;
    }
  }
}
/**
 * @private
 * Return the Api instance from the list of active players.
 * @param {Api} api - The Player API to remove
 * @returns {player instance}
 */

function getPlayer(api) {
  for (var p = 0; p < _players2.default.length; p++) {
    if (_players2.default[p].id === api.id) {
      return _players2.default[p];
    }
  }
  return null;
}