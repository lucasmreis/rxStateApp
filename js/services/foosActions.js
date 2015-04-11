angular.module('rxStateApp').factory('FoosActions', function(AppStateUtil) {
  var actions = Rx.Observable.from([
    11,
    22
  ]).map(AppStateUtil.joinFoo);

  return actions;
});