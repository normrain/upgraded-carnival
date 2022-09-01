const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('announce dawn' , () => {
    it('returns a rooster call', () => {
      const expected = 'cock-a-doodle-doo!'
      let actual = Rooster.announceDawn();
      assert.equal(actual, expected);
    });
  });
  describe('time at dawn', () => {
    it('returns its argument as a string', () =>{
      const expected = '2';
      let actual = Rooster.timeAtDawn(2);
      assert.strictEqual(actual, expected);
    });
  });
});