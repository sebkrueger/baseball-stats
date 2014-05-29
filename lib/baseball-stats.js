/*------------------------------------------------------------------------------

 Project : baseball-stats
 Filename : lib/baseball-stats.js
 Author : (c) Sebastian Krüger <krueger.oh@googlemail.com>
 Date : 29.05.2014

 For the full copyright and license information, please view the LICENSE
 file that was distributed with this source code.

 ----------------------------------------------------------------------------*/

function BaseballStats(playerNumber, playerName) {
    this._playerNumber = playerNumber;
    this._playerName = playerName;
}

BaseballStats.prototype.getPlayerNumber = function() {
    return this._playerNumber;
};

BaseballStats.prototype.getPlayerName = function() {
    return this._playerName;
};

exports.BaseballStats = BaseballStats;