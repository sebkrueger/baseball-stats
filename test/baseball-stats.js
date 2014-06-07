var assert = require('assert');
var BaseballStats = require('../index').BaseballStats;

describe('BaseballStats', function()
{
    describe('#getPlayerNumber()', function()
    {
        var stats = new BaseballStats('4','John Doe');

        it('should return player number', function(){
            assert.equal('4', stats.getPlayerNumber());
        });
    });

    describe('#getPlayerName()', function()
    {
        var stats = new BaseballStats('4','John Doe');

        it('should return player name', function(){
            assert.equal('John Doe', stats.getPlayerName());
        });
    });
});