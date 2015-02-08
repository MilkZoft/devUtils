var should = require('chai').should(),
    utils = require('../index'),
    uaDesktop = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.111 Safari/537.36',
    uaMobile = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_10_2 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4';

describe('#isYear', function() {
  it('Validate if is a year', function() {
    utils.isYear('2015').should.equal(true);
  });
});

describe('#isMonth', function() {
  it('Validate if is a month', function() {
    utils.isMonth('12').should.equal(true);
  });
});

describe('#isDay', function() {
  it('Validate if is a day', function() {
    utils.isDay('31').should.equal(true);
  });
});

describe('#isDesktop', function() {
  it('Validate if is a Desktop version', function() {
    utils.isDesktop(uaDesktop).should.equal(true);
  });
});

describe('#isMobile', function() {
  it('Validate if is a Mobile version', function() {
    utils.isMobile(uaMobile).should.equal(true);
  });
});

describe('#getCurrentDevice', function() {
  it('Validate if is a Desktop device', function() {
    utils.getCurrentDevice(uaDesktop).should.equal('desktop');
  });

  it('Validate if is a Mobile device', function() {
    utils.getCurrentDevice(uaMobile).should.equal('mobile');
  });
});
