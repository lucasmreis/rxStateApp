angular.module('rxStateApp').factory('AppState', function() {
  var state = Rx.Observable.just({
    foos: [1, 2, 3],
    bars: [4, 5, 6]
  });

  return state;
});