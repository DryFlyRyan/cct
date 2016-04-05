var code = require('../betaScripts');
var expect = require('chai').expect;

describe('', function(){
	it('The function should return the unsorted array if sorted is set to false', function() {
		expect(code.displayData([4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12], 'unsort', false)).to.deep.equal([4,6,'Hi',15.4432,'Noob',47,'Omaha',4.345,'Hike',12])
	});
});
