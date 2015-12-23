angular.module('thegreatlaw').controller('IntroCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){
    $('#leftArrow').remove();
    $('#rightArrow').remove();
    $scope.pageClass = 'intro';
    var bool = true;

    setTimeout(function(){
      $('#blossoming').fadeIn(2500);
      $('#blackIntro').fadeIn(2500);
      setTimeout(function(){
        $('#blossoming').fadeOut(2500);
        $('.hello').fadeIn(10000);
        setTimeout(function(){
          $('#jishi').remove();
          $('#divineCompassion').remove();
          $('body').append($('<audio id="birdsSound" autoplay loop preload="auto"> <source src="sound/birds2.mp3" type="audio/mp3"/>'))
          
          setTimeout(function(){
            $('.hello').remove();
            bool = false;
            $('#hello2').fadeIn(2000);
            setTimeout(function(){
            $('#hello2').fadeOut(2000);
            $('.heavenImgs').fadeOut(2000); 
              setTimeout(function(){
              $('.heavenImgs').remove();
              $('#hello2').remove();
              $('#goldenParadisePic').fadeIn(2000);
              $('#goldenParadisePic').addClass('slideInTop');
              $('#goldenParadisePic').on('click', function(){
                $('#goldenParadisePic').fadeOut(2000);
                setTimeout(function(){
                  $('#goldenParadisePic').removeClass('slideInTop');
                  $('#jesusLordPic').fadeIn(2000);
                  $('#jesusLordPic').on('click', function(){
                    $('#jesusLordPic').fadeOut(2000);
                    setTimeout(function(){
                      $('#goldenParadisePic').fadeIn(2000);
                      
                      $('#leftArrow, #rightArrow').fadeIn(2000);
                    }, 2000);
                  });
                }, 2000);
              });
            }, 2000);

            }, 15000)
          }, 21600);
          rotate();
        }, 2500);
      }, 10000);
    }, 19000);

 
          


    var imgs = $('.imgs');
    var imgLinks = ["../../img/maiden4.png",
                     "../../img/maiden1.png",
                     "../../img/maiden2.jpg"
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
     if(bool){  
       setTimeout(function(){
          if(cur < images.length - 1){
            $(images[cur]).fadeOut(2500);
            setTimeout(function(){
              $(images[cur + 1]).fadeIn(2500);
              cur++;
            }, 2500);
          } else {
            $(images[cur]).fadeOut(2500);
            setTimeout(function(){
              $(images[0]).fadeIn(2500);
              cur = 0;
            }, 2500);
          }
          setTimeout(arguments.callee, 5000);
        }, 5000);
     }
    };

    
    
  });
}]);