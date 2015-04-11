angular.module('rxStateApp').factory('AppStateUtil', function() {
  var curry = R.curry;
  var ifElse = R.ifElse;
  var contains = R.contains;
  var identity = R.identity;
  var append = R.append;
  var evolve = R.evolve;
  var compose = R.compose;
  var prop = R.prop;

  var maybeInsert = curry(function(e, list) {
    return ifElse(
      contains(e),
        identity,
        append(e)
      )(list);
  });

  var joinFoo = function(foo) {
    return evolve({
      foos: maybeInsert(foo)
    });
  };

  var joinBar = function(bar) {
    return ifElse(
      compose(contains('requiredFoo'), prop('foos')),
        evolve({
          bars: maybeInsert(bar)
        }),
        identity);
  };

  return {
    joinFoo: joinFoo,
    joinBar: joinBar
  };
});