angular.module('thegreatlaw').controller('DescentCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){ 
    $('#creatorVoice').fadeIn(4000);
    setTimeout(function(){
      $('#creatorVoice').fadeOut(4000);
    }, 2000);
  });
}]);