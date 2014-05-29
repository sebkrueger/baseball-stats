var assert = require('assert');
var BaseballStats = require('../index').BaseballStats;

describe('BaseballStats', function() {

    var stats = new BaseballStats('4','John Doe');

    describe('#getPlayerNumber()', function(){
        it('should return player number', function(){
            assert.equal('4', stats.getPlayerNumber());
        });
    });

    describe('#getPlayerName()', function(){
        it('should return player name', function(){
            assert.equal('John Doe', stats.getPlayerName());
        });
    });
});