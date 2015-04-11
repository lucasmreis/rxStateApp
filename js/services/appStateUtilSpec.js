describe('AppStateUtil', function() {
  var util;

  beforeEach(module('rxStateApp'));
  beforeEach(inject(function(AppStateUtil) {
    util = AppStateUtil;
  }));

  it('adds foos', function() {
    var previousState = {
      foos: [1, 2, 3],
      bars: [4, 5, 6]
    };

    var newFoo = 100;

    var expectedNew = {
      foos: [1, 2, 3, 100],
      bars: [4, 5, 6]
    };

    var containedNewFoo = 2;

    expect(util.joinFoo(newFoo)(previousState)).to.deep.equal(expectedNew);
    expect(util.joinFoo(containedNewFoo)(previousState)).to.deep.equal(previousState);
  });

  it('adds bars', function() {
    var previousStateOk = {
      foos: [1, 2, 3, 'requiredFoo'],
      bars: [4, 5, 6]
    };

    var previousStateNotOk = {
      foos: [1, 2, 3],
      bars: [4, 5, 6]
    };

    var newBar = 100;

    var expectedOk = {
      foos: [1, 2, 3, 'requiredFoo'],
      bars: [4, 5, 6, 100]
    };

    expect(util.joinBar(newBar)(previousStateOk)).to.deep.equal(expectedOk);
    expect(util.joinBar(newBar)(previousStateNotOk)).to.deep.equal(previousStateNotOk);
  });
});