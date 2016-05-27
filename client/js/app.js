angular.module('thegreatlaw', ['ngRoute', 'ngAnimate'])

  .factory('appFact', function appFactory(){
    return {};
  })

  .controller('BeginningPlayCtrl', ['$scope', function($scope){

    $scope.$on('$routeChangeSuccess', function(){

      $scope.pageClass = 'beginningPlay';
      
      
    });
  }])

  .controller('MainCtrl', ['$scope', function($scope){
    $scope.$on('$routeChangeSuccess', function(){

      
      $scope.pageClass = 'home';
      $('#page1').fadeIn(4000);
      setTimeout(function(){
        $('#rightArrow').fadeIn(4000);
      }, 4000);
    });
  }])

  .controller('FalunCtrl', ['$scope', 'appFact', function($scope, appFact){
   $scope.$on('$routeChangeSuccess', function(){
 
      $('#divineCompassion').remove();

      $scope.pageClass = 'falun';
       $('#rightArrow').remove();
        $('#leftArrow').remove();
      var jishi = $('<audio id="jishi" autoplay loop preload="auto"><source src="client/sound/jishi.mp3" type="audio/mp3"></audio>');
      $('body').append(jishi);
      var darks = $('.dark'),
         lights = $('.light'),
         begins = $('#beginButton');

      var lightLinks = ["client/img/bclearsmall/tmp-0.gif",
                         "client/img/bclearsmall/tmp-1.gif",
                         "client/img/bclearsmall/tmp-2.gif",
                         "client/img/bclearsmall/tmp-3.gif",
                         "client/img/bclearsmall/tmp-4.gif",
                         "client/img/bclearsmall/tmp-5.gif",
                         "client/img/bclearsmall/tmp-6.gif",
                         "client/img/bclearsmall/tmp-7.gif",
                         "client/img/bclearsmall/tmp-8.gif",
                         "client/img/bclearsmall/tmp-9.gif",
                         "client/img/bclearsmall/tmp-10.gif",
                         "client/img/bclearsmall/tmp-11.gif"
      ];

      var darkLinks = ["client/img/dark/resized/b1.png",
                         "client/img/dark/resized/b2.png",
                         "client/img/dark/resized/b3.png",
                         "client/img/dark/resized/b4.png",
                         "client/img/dark/resized/b5.png",
                         "client/img/dark/resized/b6.png",
                         "client/img/dark/resized/b7.png",
                         "client/img/dark/resized/b8.png",
                         "client/img/dark/resized/b9.png",
                         "client/img/dark/resized/b10.png",
                         "client/img/dark/resized/b11.png",
                         "client/img/dark/resized/b12.png"
      ];

      var zLinks = ["client/img/zhenshanren1.png",
                    "client/img/zhenshanren2.png",
                    "client/img/zhenshanren3.png",
                    "client/img/zhenshanren4.png",
                    "client/img/zhenshanren5.png",
                    "client/img/zhenshanren6.png",
                    "client/img/zhenshanren7.png",
                    "client/img/zhenshanren8.png",
                    "client/img/zhenshanren9.png"
      ];

        $('#rightArrow').remove();
        $('#leftArrow').remove();

        setTimeout(function() {
          $('#beginButton').append('<a href="/intro"><img class="img-fluid" id="rightArrow" src="../client/img/arrow/right/rightArrow.gif" style="display: none"></a>');
          $('#leftArrowWrapper').append('<a href="/home2"><img class="img-fluid" id="leftArrow" src="../client/img/arrow/left/leftArrow.gif" style="display: none"></a>');
          $('#leftArrow, #rightArrow').fadeIn(2000);
          $('#fingers').fadeIn(2000);
          setTimeout(function(){
            $('#fingers').hide();
          }, 3000);
        }, 43200);


        $.each(darkLinks, function(i, el){
          $('<img class="darkImg img-fluid">').attr('src', el).appendTo(darks);
        });

        $.each(lightLinks, function(i, el){
          $('<img class="lightImg img-fluid">').attr('src', el).appendTo(lights);
        });  

        $('img', darks).each(function(i, el){
          $(el).addClass('img-fluid');
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });
/*
        $('img', begins).each(function(i, el){
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });
*/
        ('img', lights).each(function(i, el){
          $(el).addClass('img-fluid');
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });

        $('#falunArea').append(darks);
        $('#falunArea').append(lights);
  //      $('#begin').append(begins);     

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
/*
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
          $('#begin0').delay(1000).fadeIn(3000, sparkle);
        });
*/



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
       
      appFact = rotate;

      var rotator = function(){ 
        rotate(lightLinks, 'light','backward');
        rotate(darkLinks, 'dark', 'backward');
      };
      
      rotator();

      

      if(!!('ontouchstart' in window)){
        $('.dark').bind('touchstart', function(){
          $('.dark').addClass('hidden');
          $('.light').removeClass('hidden');
          $('#dark').addClass('hidden');
          $('#enterGlow').removeClass('hidden');
          $('#bgColor').removeClass('hidden');
          $('#innerWhite').removeClass('hidden');
      });

      $('.light').bind('touchend', function(){
        $('.light').addClass('hidden');
        $('.dark').removeClass('hidden');
        $('#dark').removeClass('hidden');
        $('#enterGlow').addClass('hidden');
        $('#bgColor').addClass('hidden');
        $('#innerWhite').addClass('hidden');
      });
      }
      else{
      $('.dark').on('mouseenter', function(){
        $('.dark').addClass('hidden');
        $('.light').removeClass('hidden');
        $('#dark').addClass('hidden');
        $('#enterGlow').removeClass('hidden');
        $('#bgColor').removeClass('hidden');
        $('#innerWhite').removeClass('hidden');
      });

      $('.light').on('mouseleave', function(){
        $('.light').addClass('hidden');
        $('.dark').removeClass('hidden');
        $('#dark').removeClass('hidden');
        $('#enterGlow').addClass('hidden');
        $('#bgColor').addClass('hidden');
        $('#innerWhite').addClass('hidden');
      });
      }



    });
  }])

  

  .config(function($routeProvider, $locationProvider){
    $routeProvider

      .when('/', {
        templateUrl: 'client/pages/beginningPlay.html',
        controller: 'BeginningPlayCtrl'
      })

      .when('/home', {
        templateUrl: 'client/pages/home.html',
        controller: 'MainCtrl'
      })

      .when('/home2', {
        templateUrl: 'client/pages/home2.html',
        controller: 'Home2Ctrl'
      })

      .when('/falun', {
        templateUrl : 'client/pages/falun.html',
        controller: 'FalunCtrl'
      })

      .when('/intro', {
        templateUrl: 'client/pages/intro.html',
        controller: 'IntroCtrl'
      })

      .when('/descent', {
        templateUrl: 'client/pages/descent.html',
        controller: 'DescentCtrl'
      })

      .when('/one', {
        templateUrl: 'client/pages/one.html',
        controller: 'OneCtrl'
      })

      .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
  })