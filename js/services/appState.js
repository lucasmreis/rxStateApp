angular.module('simpleStateApp')
  .tree('AppState', function(StorageService) {
    var initial = {
      foos: [1, 2, 3],
      bars: [4, 5]
    };

    return [
      StorageService.load('baobab', initial), 
      { 
        maxHistory: 10,
        clone: true,
        cloningFunction: R.clone
      }
    ];
  });