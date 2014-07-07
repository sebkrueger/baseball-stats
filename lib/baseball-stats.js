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

    this._offence = {};
    this._defence = {};
    this._pitching = {};
}

BaseballStats.prototype.getPlayerNumber = function() {
    return this._playerNumber;
};

BaseballStats.prototype.getPlayerName = function() {
    return this._playerName;
};

BaseballStats.prototype.setOffenceResults = function(pa, ab, r, rbi, h, b2, b3, hr, k, bb, hp, sb, cs, sh, sf) {
    this._offence = {
        pa: pa,
        ab: ab,
        r: r,
        rbi: rbi,
        h: h,
        b2: b2,
        b3: b3,
        hr: hr,
        k: k,
        bb: bb,
        hp: hp,
        sb: sb,
        cs: cs,
        sh: sh,
        sf: sf

    }
};

BaseballStats.prototype.setDefenceResults = function(a, po, e) {
    this._defence = {
        a: a,
        po: po,
        e: e
    }
};

BaseballStats.prototype.setPitchingResults = function(bf, ab, ip, r, er, h, hr, k, bb, hp, wp, bk, wls) {
    this._pitching = {
        bf: bf,
        ab: ab,
        ip: ip,
        r: r,
        er: er,
        h: h,
        hr: hr,
        k: k,
        bb: bb,
        hp: hp,
        wp: wp,
        bk: bk,
        wls: wls
    }
};

exports.BaseballStats = BaseballStats;