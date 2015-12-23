angular.module('thegreatlaw').controller('Home2Ctrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){
      $scope.pageClass = 'home2';
      $('#page2').fadeIn(4000);
      setTimeout(function(){
        $('#leftArrow').fadeIn(4000);
        $('#rightArrow').fadeIn(4000);
      }, 4000);
  });
}]);