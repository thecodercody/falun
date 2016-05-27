angular.module('thegreatlaw').controller('OneCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){
      $scope.pageClass = 'one';
      
  });
}]);