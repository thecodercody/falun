$(document).ready(function(){
 /* document.getElementById('turningFalun').addEventListener('timeupdate', function(){
    $('#turningFalunBright').currentTime = $('#turningFalun').currentTime;
    $('#turningFalunForward').currentTime = $('#turningFalun').currentTime;
  });

  var count = 1;

  var backward = function(){
    if(count < 6){   
      $('#turningFalun').currentTime = 0;
      $('#turningFalun')[0].play();
      $('#turningFalunBright').currentTime = 0;
      $('#turningFalunBright')[0].play();
      count++;
    } else {
      count = 1;
      $('#turningFalun').removeClass('nine');
      $('#turningFalun').addClass('seven');
      forward();
    }
  };

  var forward = function() {
    if(count < 6){
      $('#turningFalunForward').currentTime = 0;
      $('#turningFalunForward')[0].play();
      $('#turningFalunBrightForward').currentTime = 0;
      $('#turningFalunBrightForward')[0].play();
      count++;
    } else {
      count = 1;
      $('#turningFalunForward').removeClass('seven');
      $('#turningFalunForward').addClass('nine');
      backward();
    }
  };
  
document.getElementById('turningFalun').addEventListener('ended',backward,false);
document.getElementById('turningFalunForward').addEventListener('ended',forward,false);

*/

var darks = $('.dark'),
   lights = $('.light');

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

  var shadeClass;
  var shade = 'dark';
  var links = darkLinks;
  if(shade === 'dark'){
    shadeClass = darks;
  } else {
    shadeClass = lights;
  }

  $.each(links, function(i, el){
    $('<img class="' + shade + 'Img">').attr('src', el).appendTo(shadeClass);
  });
  
  $('img', shadeClass).each(function(i, el){
    if (i !== 0){
      $(el).css('display', 'none');
    }
  });

  $('td').append(shadeClass);

  var lightCurrent = 0;
  var darkCurrent = 0;
  var lightLoops = 0;
  var darkLoops = 0;
  var images;
  var numLoops;
 
  if(shade === 'light'){
    images = $('.lightImg');
  } else { // if dark
    images = $('.darkImg');
  }

var rotate = function(links, shade, direction) {


  setTimeout(function(){
      if(shade === 'light'){  
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
            shade = 'light';
            links = lightLinks;
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
            shade = 'light';
            links = lightLinks;
          }
        }
      } else { // if shade === dark
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
            shade = 'dark';
            links = darkLinks;
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
            shade = 'dark';
            links = darkLinks;
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
        lightLoops = 0;
        numLoops = 0;
        if(direction === 'backward'){
          $('.light').removeClass('enterGlow pulseOutGlow').addClass('pulseInGlow');
          rotate(lightLinks, 'light', 'forward');
          return 1;
        } else { // if forward
          $('.light').removeClass('pulseInGlow').addClass('pulseOutGlow');
          rotate(lightLinks, 'light', 'backward');
          return 1;
        }
      } else { // if dark
        darkLoops = 0;
        numLoops = 0;
        if(direction === 'forward'){
          $('.dark').removeClass('pulseIn').addClass('pulseOut');
          $('#colors').removeClass('pulseInColor').addClass('pulseOutColor');
          $('#dark').removeClass('enter pulseIn').addClass('pulseOut');
          rotate(darkLinks, 'dark', 'backward');
          return 1;
        } else { // if backward
          $('.dark').removeClass('enter pulseOut').addClass('pulseIn');
          $('#colors').removeClass('enterColors pulseOutColor').addClass('pulseInColor');
          $('#dark').removeClass('enter pulseOut').addClass('pulseIn');
          rotate(darkLinks, 'dark', 'forward');
          return 1;
        }
      }
    }
    setTimeout(arguments.callee, 100);
  }, 100);
};

rotate(darkLinks, 'dark', 'backward');
rotate(lightLinks, 'light','backward');

$('.dark').on('click', function(){
  $('.dark').addClass('hidden');
  $('.light').removeClass('hidden');
  $('#dark').addClass('hidden');
});

$('.light').on('click', function(){
  $('.light').addClass('hidden');
  $('.dark').removeClass('hidden');
  $('#dark').addClass('hidden');
});

/*
$(function() {
  //links to images/frames
var imagesLinks = ["img/bclearsmall/tmp-0.gif",
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

//create div that will hold the images
var images = jQuery("<div></div>").attr("class", "images seven bigEntranceNoColor").css('height', '303px').css('width', '300');

//preload images and append them to the div
jQuery.each(imagesLinks, function(i,el){
    $('<img class="anime" style="z-index: 8;  border-radius: 100%"/>').attr('src', el).appendTo(images); 
});

//make all images exculding the first invisible (using dispaly:none)
jQuery("img",images).each(function(i,el){
    if(i!=0){
        jQuery(el).css("display","none");
    }
});
//append the div with images to the body of the page
jQuery("td").append(images);

//get all images
var anime = jQuery(".anime");

//current visible image
var current = 0; 
//current loop 
var howManyLoops = 0;
//callback function
var back = true;
function callback(){
    if(back){
      //loops the images
      setTimeout(function(){
        if(current == 0){
            jQuery(anime[current]).hide();
            current = anime.length;
            jQuery(anime[current-1]).show();        
        }else{
            jQuery(anime[current]).hide();
            jQuery(anime[current - 1]).show();
            current -= 1;
        }
        
        howManyLoops +=1;
        if(howManyLoops == (anime.length)*18){
            howManyLoops = 0;
            $('.images').removeClass('pulseIn');
            $('.images').addClass('pulseIn');
            
            
            back = false;
            callback();
            return 1;
        }
        
        setTimeout(arguments.callee,100);
      },100);
   } else {
      setTimeout(function(){
        if(current == (anime.length -1)){
            jQuery(anime[anime.length -1]).hide();
            jQuery(anime[0]).show();
            current = 0;
        }else{
            jQuery(anime[current]).hide();
            jQuery(anime[current+1]).show();        
            current +=1;
        }
        
        howManyLoops +=1;
        if(howManyLoops == (anime.length)*18){
            howManyLoops = 0;
            back = true;
            $('.images').removeClass('pulseIn');
            $('.images').addClass('pulseIn');
            
            
            callback();
            return 1;
        }
        
        setTimeout(arguments.callee,100);
      },100);
      back = true;
    }
}

//loops the images
setTimeout(function(){
    if(current == (anime.length -1)){
        jQuery(anime[anime.length -1]).hide();
        jQuery(anime[0]).show();
        current = 0;
    }else{
        jQuery(anime[current]).hide();
        jQuery(anime[current+1]).show();        
        current +=1;
    }
    
    howManyLoops +=1;
    if(howManyLoops == (anime.length)*18){
        howManyLoops = 0;
        $('.images').addClass('pulseInDark');
        $('.images').removeClass('bigEntrance');
        callback();
        return 1;
    }
    
    setTimeout(arguments.callee,100);
},100);
  

  //links to images/frames
var imagesLinks2 = ["img/dark/resized/b1.png",
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

//create div that will hold the images
var images2 = jQuery("<div></div>").attr("class", "images2 nine bigEntranceNoColor").css('height', '303px').css('width', '300');

//preload images and append them to the div
jQuery.each(imagesLinks2, function(i,el){
    $('<img class="anime2 ten" style="border-radius: 100%"/>').attr('src', el).appendTo(images2); 
});

//make all images exculding the first invisible (using dispaly:none)
jQuery("img",images2).each(function(i,el){
    if(i!=0){
        jQuery(el).css("display","none");
    }
});
//append the div with images to the body of the page
jQuery("td").append(images2);

//get all images
var anime2 = jQuery(".anime2");

//current visible image
var current2 = 0; 
//current loop 
var howManyLoops2 = 0;
//callback function
var back2 = true;
function callback(){
    if(back2){
      //loops the images
      setTimeout(function(){
        if(current == 0){
            jQuery(anime2[current]).hide();
            current2 = anime2.length;
            jQuery(anime2[current-1]).show();        
        }else{
            jQuery(anime2[current]).hide();
            jQuery(anime2[current - 1]).show();
            current2 -= 1;
        }
        
        howManyLoops2 +=1;
        if(howManyLoops2 == (anime2.length)*18){
            howManyLoops2 = 0;
            $('.images2').removeClass('pulseIn');
            $('.images2').addClass('pulseIn');
            
            
            back2 = false;
            callback();
            return 1;
        }
        
        setTimeout(arguments.callee,100);
      },100);
   } else {
      setTimeout(function(){
        if(current2 == (anime2.length -1)){
            jQuery(anime2[anime2.length -1]).hide();
            jQuery(anime2[0]).show();
            current2 = 0;
        }else{
            jQuery(anime2[current]).hide();
            jQuery(anime2[current+1]).show();        
            current2 +=1;
        }
        
        howManyLoops2 +=1;
        if(howManyLoops2 == (anime2.length)*18){
            howManyLoops2 = 0;
            back2 = true;
            $('.images2').removeClass('pulseIn');
            $('.images2').addClass('pulseIn');
            
            
            callback();
            return 1;
        }
        
        setTimeout(arguments.callee,100);
      },100);
      back2 = true;
    }
}

//loops the images
setTimeout(function(){
    if(current == (anime2.length -1)){
        jQuery(anime2[anime2.length -1]).hide();
        jQuery(anime2[0]).show();
        current2 = 0;
    }else{
        jQuery(anime2[current]).hide();
        jQuery(anime2[current+1]).show();        
        current2 +=1;
    }
    
    howManyLoops2 +=1;
    if(howManyLoops2 == (anime2.length)*18){
        howManyLoops2 = 0;
        $('.images2').addClass('pulseInDark');
        $('.images2').removeClass('bigEntranceNoColor');
        callback();
        return 1;
    }
    
    setTimeout(arguments.callee,100);
},89);

});



  var transparent = false;
  $('.images').on('click', function(){
    $('.images').removeClass('nine').addClass('seven');
    $('.anime2').removeClass('ten').addClass('eight');
    if(!transparent){
      $('#dark').addClass('six');
      transparent = true;
    } else {
      $('#dark').remove
      transparent = false;
    }
  });

  $('.anime2').on('click', function(){
    if(!transparent){
      $('#dark').removeClass('eight').addClass('six');
      transparent = true;
      $('.images').removeClass('five').addClass('nine');
      $('.images2').removeClass('nine');
      $('.images2').addClass('seven');
    } else {
      $('#dark').css('background-color', 'rgba(0, 0, 0, 0.5)');
      transparent = false;
    }
  });

*/
  $('#turningFalun').on('click', function(){
      $('#turningFalunBright').addClass('visible');
      $('#turningFalun').removeClass('visible');
      $('#turningFalun').addClass('hiding');
      $('#turningFalunBright').removeClass('hiding');
    });
    


  $('#turningFalunBright').on('click', function() {
      $('#turningFalunBright').removeClass('visible');
      $('#turningFalunBright').addClass('hiding');
      $('#turningFalun').removeClass('hiding');
      $('#turningFalun').addClass('visible');
  });

});
