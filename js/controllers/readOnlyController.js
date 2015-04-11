angular.module('rxStateApp').controller('ReadOnlyCtrl', function(AppState) {
  var state = {};

  AppState
    .forEach(function(s) { state = s; console.log(state); });

  this.state = state;
});