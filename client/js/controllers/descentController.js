angular.module('thegreatlaw').controller('DescentCtrl', ['$scope', function($scope){
  $scope.$on('$routeChangeSuccess', function(){ 
    $scope.pageClass = 'descent';
 
    $('#leftArrow').hide();
    $('#rightArrow').hide();
    $('#birdsSound').remove();
    $('#divineCompassion').remove();
    $('#sparklingRays, #colors, .light, #rightArrow').hide();
    $('#blackout').fadeIn(2000);
    var creatorVoice = $('<audio id="creatorVoice" autoplay preload="auto"><source src="sound/creatorVoice1.mp3" type="audio/mp3"/></audio>');
    $('body').append(creatorVoice);
    setTimeout(function(){
      $('#text2').fadeIn(2500);
    }, 2000);
    setTimeout(function(){  
      setTimeout(function(){
        $('#text2').fadeOut(4000);
      }, 5000);
      setTimeout(function(){
        $('#text').remove();
        $('#blackout').remove();
        $('#flash').show();
        setTimeout(function(){
          $('#flash').hide();
          $('#sparklingRays, #colors, .light, #falunRays').show();
          creator();
          rippler();
        }, 500);
      }, 9000);
    }, 24500);

    var switcheroo = false;

    var creator = function(){
      var music = $('<audio id="creation" autoplay loop preload="auto"><source src="sound/creation.mp3" type="audio/mp3"/></audio>');
      $('body').append(music);
        
      $('#halo').fadeIn(10000);
      $('#masterLiFalunPic, .zfRays').fadeIn(10000);
      $('#ripples').fadeIn(10000);
      $('#zhen, #shan, #ren').fadeIn(10000);



      setTimeout(function(){
        $('#theSummon').fadeIn(2500);
        setTimeout(function(){
          $('#rightArrowWrapper').append('<img id="rightArrow" src="../img/arrow/right/rightArrow.gif" style="display: none">');
          $('#rightArrowWrapper').fadeIn(2500);

        }, 2500);
      }, 13000);


      var lights = $('.light');

      var lightLinks = ["../../img/bclearsmall/tmp-0.gif",
                         "../../img/bclearsmall/tmp-1.gif",
                         "../../img/bclearsmall/tmp-2.gif",
                         "../../img/bclearsmall/tmp-3.gif",
                         "../../img/bclearsmall/tmp-4.gif",
                         "../../img/bclearsmall/tmp-5.gif",
                         "../../img/bclearsmall/tmp-6.gif",
                         "../../img/bclearsmall/tmp-7.gif",
                         "../../img/bclearsmall/tmp-8.gif",
                         "../../img/bclearsmall/tmp-9.gif",
                         "../../img/bclearsmall/tmp-10.gif",
                         "../../img/bclearsmall/tmp-11.gif"
      ];

      $.each(lightLinks, function(i, el){
        $('<img class="lightImg">').attr('src', el).appendTo(lights);
      });  

      $('img', lights).each(function(i, el){
        if (i !== 0){
          $(el).css('display', 'none');
        }
      });

      $('#falunArea').append(lights);

      var ripples = $('.ripples');

        var rippleLinks = ["../../img/ripple/outwards/0.gif",
                          "../../img/ripple/outwards/1.gif",
                          "../../img/ripple/outwards/2.gif",
                          "../../img/ripple/outwards/3.gif",
                          "../../img/ripple/outwards/4.gif",
                          "../../img/ripple/outwards/5.gif",
                          "../../img/ripple/outwards/6.gif",
                          "../../img/ripple/outwards/7.gif",
                          "../../img/ripple/outwards/8.gif",
                          "../../img/ripple/outwards/9.gif",
                          "../../img/ripple/outwards/10.gif",
                          "../../img/ripple/outwards/11.gif",
                          "../../img/ripple/outwards/12.gif",
                          "../../img/ripple/outwards/13.gif",
                          "../../img/ripple/outwards/14.gif",
                          "../../img/ripple/outwards/15.gif",
                          "../../img/ripple/outwards/16.gif",
                          "../../img/ripple/outwards/17.gif",
                          "../../img/ripple/outwards/18.gif",
                          "../../img/ripple/outwards/19.gif",
                          "../../img/ripple/outwards/20.gif",
                          "../../img/ripple/outwards/21.gif",
                          "../../img/ripple/outwards/22.gif",
                          "../../img/ripple/outwards/23.gif"
        ];

        $.each(rippleLinks, function(i, el){
          $('<img class="rippleImg">').attr('src', el).appendTo(ripples);
        });  

        $('img', ripples).each(function(i, el){
          if (i !== 0){
            $(el).css('display', 'none');
          }
        });

        $('#intro').append(ripples);

      var rippleLoops = 0;
      var rippleCurrent = 0;
      var rippleImages = $('.rippleImg');

      var loops = 0;
      var lightCurrent = 0;
      var images = $('.lightImg');

      $('.light').removeClass('hidden');

      var rotate = function(direction){
        setTimeout(function(){
          if(direction === 'backward') {
            if(lightCurrent < images.length - 1){  
              $(images[lightCurrent]).hide();
              $(images[lightCurrent + 1]).show();
              lightCurrent++;
            } else {
              $(images[lightCurrent]).hide();
              $(images[0]).show();
              lightCurrent = 0;
              loops++;
            }
            if(rippleCurrent < rippleImages.length - 1){
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleCurrent + 1]).show();
              rippleCurrent++;
            } else {
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[0]).show();
              rippleCurrent = 0;
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
              loops++;
            }
            if(rippleCurrent != 0){
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleCurrent - 1]).show();
              rippleCurrent--;
            } else {
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleImages.length - 1]).show();
              rippleCurrent = rippleImages.length - 1;
            }
          }



          if(loops === 18){
            loops = -1;
            if(direction === 'backward'){
              $('.light').removeClass('enter');
              switcheroo = false;
              rotate('forward');
              //$('#ripples').hide();
              //$('#ripplesReverse').show();
              return 1;
            } else { // if forward
              rotate('backward');
              switcheroo = true;
              //$('#ripples').show();
              //$('#ripplesReverse').hide();
              return 1;
            }
          }
          setTimeout(arguments.callee, 100);
        }, 100);
      };
      rotate('backward');
    };
      var rippler = function(){
        

      var rotateRipples = function(direction){
        setTimeout(function(){
          



          setTimeout(arguments.callee, 100);
        }, 100);



        /* 
        setTimeout(function(){
          if(direction === 'forward') {
            if(rippleCurrent < rippleImages.length - 1){  
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleCurrent + 1]).show();
              rippleCurrent++;
            } else {
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[0]).show();
              rippleCurrent = 0;
            }
          } else { // if backward
            if(rippleCurrent !== 0){
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleCurrent - 1]).show();
              rippleCurrent--;
            } else {
              $(rippleImages[rippleCurrent]).hide();
              $(rippleImages[rippleImages.length - 1]).show();
              rippleCurrent = rippleImages.length - 1;
              rippleLoops++;
            }
          }

          
            
            if(switcheroo === true){
              rippleLoops = -1;
              rotateRipples('forward');
              //$('#ripples').hide();
              //$('#ripplesReverse').show();
              return 1;
            } else { // if forward
              rippleLoops = -1;
              rotateRipples('backward');
              //$('#ripples').show();
              //$('#ripplesReverse').hide();
              return 1;
            }
          
          setTimeout(arguments.callee, 93.9);
        }, 93.9);
      };
      rotateRipples('forward');
      */
    };
    
  };
});
}]);