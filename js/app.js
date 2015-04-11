angular.module('simpleStateApp', ['baobab']).run(function(StorageService, AppState) {
    AppState.on('update', 
      function() { 
        StorageService.save('baobab', AppState.get()); 
      });
  });