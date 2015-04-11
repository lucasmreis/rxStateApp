angular.module('rxStateApp').factory('BarsActions', function(AppStateUtil) {
  var actions = Rx.Observable.from([
    1111,
    2222
  ]).map(AppStateUtil.joinBar);

  return actions;
});