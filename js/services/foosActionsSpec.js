describe('FoosActions', function() {
  var service;

  beforeEach(module('rxStateApp'));
  beforeEach(inject(function(FoosActions) {
    actions = FoosActions;
  }));

  it('works', function() {
    expect(1).to.equal(1);
  });
});