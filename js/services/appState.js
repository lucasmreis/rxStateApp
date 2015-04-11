angular.module('rxStateApp').factory('AppState', function(AppStateUtil, FoosActions, BarsActions) {
  var initial = {
    foos: [1, 'requiredyyFoo'],
    bars: [2]
  };

  var transform = function(acc, f) {
    return f(acc);
  };

  var state = Rx.Observable.from([])
    .merge(FoosActions)
    .merge(BarsActions)
    .reduce(transform, initial);

  return state;
});