angular.module('thegreatlaw').controller('IntroCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){
    setTimeout(function(){
      $('#blossoming').fadeIn(2500);
      setTimeout(function(){
        $('#blossoming').fadeOut(2500);
        setTimeout(function(){
          $('#white').css('display', 'none');
          $('#blossoming').css('display', 'none');
          $('#leftArrow').fadeIn(2500);
          $('#rightArrow').fadeIn(2500);
          $('.hello').fadeIn(2500);
          rotate();
        }, 2500);
      }, 10000);
    }, 19000);


    var imgs = $('.imgs');
    var imgLinks = ["../../img/maiden4.png",
                     "../../img/maiden1.png",
                     "../../img/maiden2.jpg",
                     "../../img/maiden3.png"
                   ];
    $.each(imgLinks, function(i, el){
      $('<img class="heavenImgs">').attr('src', el).appendTo(imgs);
    });

    

    $('img', imgs).each(function(i, el){
      if (i !== 0){
        $(el).css('display', 'none');
      }
    });

    $('#imgContainer').append(imgs);


    var images = $('.heavenImgs');
    var cur;



    var rotate = function(){
     setTimeout(function(){
        if(cur < images.length - 1){
          $(images[cur]).fadeOut(2500);
          $(images[cur + 1]).fadeIn(2500);
          cur++;
        } else {
          $(images[cur]).fadeOut(2500);
          $(images[0]).fadeIn(2500);
          cur = 0;
        }
        setTimeout(arguments.callee, 5000);
      }, 5000);
    };

    
    
  });
}]);