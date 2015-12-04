angular.module('thegreatlaw', ['ngRoute'])

  .factory('appFact', function appFactory(){
    return {};
  })

  .controller('MainCtrl', ['$scope', 'appFact', function($scope, appFact){
   window.onload = function(){
      var darks = $('.dark'),
         lights = $('.light'),
         begins = $('#beginButton');

      var lightLinks = ["img/bclearsmall/tmp-0.gif",
                         "img/bclearsmall/tmp-1.gif",
                         "img/bclearsmall/tmp-2.gif",
                         "img/bclearsmall/tmp-3.gif",
                         "img/bclearsmall/tmp-4.gif",
                         "img/bclearsmall/tmp-5.gif",
                         "img/bclearsmall/tmp-6.gif",
                         "img/bclearsmall/tmp-7.gif",
                         "img/bclearsmall/tmp-8.gif",
                         "img/bclearsmall/tmp-9.gif",
                         "img/bclearsmall/tmp-10.gif",
                         "img/bclearsmall/tmp-11.gif"
      ];

      var darkLinks = ["img/dark/resized/b1.png",
                         "img/dark/resized/b2.png",
                         "img/dark/resized/b3.png",
                         "img/dark/resized/b4.png",
                         "img/dark/resized/b5.png",
                         "img/dark/resized/b6.png",
                         "img/dark/resized/b7.png",
                         "img/dark/resized/b8.png",
                         "img/dark/resized/b9.png",
                         "img/dark/resized/b10.png",
                         "img/dark/resized/b11.png",
                         "img/dark/resized/b12.png"
      ];

      var zLinks = ["img/zhenshanren1.png",
                    "img/zhenshanren2.png",
                    "img/zhenshanren3.png",
                    "img/zhenshanren4.png",
                    "img/zhenshanren5.png",
                    "img/zhenshanren6.png",
                    "img/zhenshanren7.png",
                    "img/zhenshanren8.png",
                    "img/zhenshanren9.png"
      ];

      var beginLinks = ["img/begin/begin0.png",
                        "img/begin/begin1.png",
                        "img/begin/begin2.png",
                        "img/begin/begin3.png"
      ];

        //$('.background').draggable({ axis: 'y'});
        $.each(beginLinks, function(i, el){
          $('<img id="begin' + i + '" class="beginImg">').attr('src', el).appendTo(begins)
        })

        $.each(darkLinks, function(i, el){
          $('<img class="darkImg">').attr('src', el).appendTo(darks);
        });

        $.each(lightLinks, function(i, el){
          $('<img class="lightImg">').attr('src', el).appendTo(lights);
        });  

        $('img', darks).each(function(i, el){
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });

        $('img', begins).each(function(i, el){
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });

        $('img', lights).each(function(i, el){
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });

        $('#falunArea').append(darks);
        $('#falunArea').append(lights);
        $('#begin').append(begins);     

        var images;
        var numLoops;
        var lightLoops = 0;
        var darkLoops = 0;
        var lightCurrent = 0;
        var darkCurrent = 0;
        var start = true;
        var rand = 0;
        var zCur = 0;
        var zLoops = 0;
        var beginLoops = 0;
        var beginCurrent = 0;
        var images2;

        var sparkle = function(){
         images2 = $('.beginImg');
         setTimeout(function(){
            if(beginCurrent < images2.length - 1){
              $(images2[beginCurrent]).hide();
              $(images2[beginCurrent + 1]).show();
              beginCurrent++;
            } else {
              $(images2[beginCurrent]).hide();
              $(images2[0]).show();
              beginCurrent = 0;
            }
            setTimeout(arguments.callee, 500);
          }, 500);
        };
        
        $(function() {
          $('#begin0').delay(64800).fadeIn(3000, sparkle);
        });




      var rotate = function(links, shade, direction) {
        setTimeout(function(){
            if(shade === 'light'){
          images = $('.lightImg');
        } else { // if dark
          images = $('.darkImg');
        }
            if(shade === 'light'){  
              links = lightLinks;
              if(direction === 'backward') {
                if(lightCurrent < images.length - 1){  
                  $(images[lightCurrent]).hide();
                  $(images[lightCurrent + 1]).show();
                  lightCurrent++;
                } else {
                  $(images[lightCurrent]).hide();
                  $(images[0]).show();
                  lightCurrent = 0;
                  lightLoops++;
                }
              } else { // if forward
                if(lightCurrent !== 0){
                  $(images[lightCurrent]).hide();
                  $(images[lightCurrent - 1]).show();
                  lightCurrent--;
                } else {
                  $(images[lightCurrent]).hide();
                  $(images[images.length - 1]).show();
                  lightCurrent = images.length - 1;
                  lightLoops++;
                }
              }
            } else { // if shade === dark
              links = darkLinks;        
              if(direction === 'backward') {
                if(darkCurrent < images.length - 1){  
                  $(images[darkCurrent]).hide();
                  $(images[darkCurrent + 1]).show();
                  darkCurrent++;
                } else {
                  $(images[darkCurrent]).hide();
                  $(images[0]).show();
                  darkCurrent = 0;
                  darkLoops++;
                }
              } else { // if forward
                if(darkCurrent !== 0){
                  $(images[darkCurrent]).hide();
                  $(images[darkCurrent - 1]).show();
                  darkCurrent--;
                } else {
                  $(images[darkCurrent]).hide();
                  $(images[images.length - 1]).show();
                  darkCurrent = images.length - 1;
                  darkLoops++;
                }
              }
            }
          if(shade === 'light'){
            numLoops = lightLoops;
          } else {
            numLoops = darkLoops;
          }
          
          if(numLoops === 18){
            if(shade === 'light'){
              lightLoops = -1;
              numLoops = 0;
              if(direction === 'backward'){
                $('.light').removeClass('enter pulseOut').addClass('pulseIn');
                $('#enterGlow').removeClass('enterGlow pulseOutGlow').addClass('pulseInGlow');
                $('#innerWhite').removeClass('enterInnerWhite pulseOutInnerWhite').addClass('pulseInInnerWhite');
                rotate(lightLinks, 'light', 'forward');
                return 1;
              } else { // if forward
                $('.light').removeClass('pulseIn').addClass('pulseOut');
                $('#enterGlow').removeClass('pulseInGlow').addClass('pulseOutGlow');
                $('#innerWhite').removeClass('pulseInInnerWhite').addClass('pulseOutInnerWhite');
                rotate(lightLinks, 'light', 'backward');
                return 1;
              }
            } else { // if dark
              darkLoops = -1;
              numLoops = 0;
              if(direction === 'forward'){
                $('.dark').removeClass('pulseIn').addClass('pulseOut');
                $('#colors').removeClass('pulseInColor').addClass('pulseOutColor');
                $('#dark').removeClass('pulseIn').addClass('pulseOut');
                $('#innerWhite').removeClass('pulseInInnerWhite').addClass('pulseOutInnerWhite');
                rotate(darkLinks, 'dark', 'backward');
                return 1;
              } else { // if backward
                $('.dark').removeClass('enter pulseOut').addClass('pulseIn');
                $('#colors').removeClass('enterColors pulseOutColor').addClass('pulseInColor');
                $('#dark').removeClass('enter pulseOut').addClass('pulseIn');
                $('#innerWhite').removeClass('enterInnerWhite pulseOutInnerWhite').addClass('pulseInInnerWhite');
                rotate(darkLinks, 'dark', 'forward');
                return 1;
              }
            }
          }
          setTimeout(arguments.callee, 100);
        }, 100);
      };

      rotate(lightLinks, 'light','backward');
      rotate(darkLinks, 'dark', 'backward');


      $('.dark').on('click', function(){
        $('.dark').addClass('hidden');
        $('.light').removeClass('hidden');
        $('#dark').addClass('hidden');
        $('#enterGlow').removeClass('hidden');
        $('#bgColor').removeClass('hidden');
        $('#innerWhite').removeClass('hidden');
      });

      $('.light').on('click', function(){
        $('.light').addClass('hidden');
        $('.dark').removeClass('hidden');
        $('#dark').removeClass('hidden');
        $('#enterGlow').addClass('hidden');
        $('#bgColor').addClass('hidden');
        $('#innerWhite').addClass('hidden');
      });
    };
  }])

  .config(function($routeProvider, $locationProvider){
    $routeProvider

      .when('/', {
        templateUrl : '../pages/home.html',
        controller: 'MainCtrl'
      })

      .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
  })