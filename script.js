function getOffsetTop( elem )
{
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetTop ) )
      {
          offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );
    return offsetTop;
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var hashOffset = getOffsetTop(document.querySelector(hash));
 
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('.container, .content').animate({
        scrollTop: hashOffset
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

      });
    } // End if
  });
});

var nav = document.querySelector('nav');
var navicon = document.querySelector(".ion-navicon");

navicon.addEventListener('click', function(){
  if (nav.style.display === 'block'){
    nav.style.display = 'none';
  } else {
    nav.style.display = 'block';
  }
});

var impLink = 'img/pixel.jpg?ord=[timestamp]';
var applyImpTracker = function() {
  var linkWithNowTime = impLink.replace('timestamp', Date.now());
  var img = new Image();
  img.src = linkWithNowTime;            
};

// function animate(el, ms) {
//   var elem = document.querySelector(el); 
//   var op = 0;
//   setTimeout(function(){
//     var id = setInterval(frame, 10);
//     function frame() {
//        if (op.toFixed(2) == 1) {
//             clearInterval(id);
//         } else {
//            op += 0.01; 
//            elem.style.opacity = op; 
//        }
//     }
//   }, ms);
// }

// function animate2(el){
//   document.querySelector(el).className += ' animated';
// }




function animate3(el, delay){  
  var start = null;
  var element = document.querySelector(el);
  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;  
    if (progress > delay){
      element.style.opacity = (progress - delay)/1000;
    }  
    if (progress < 1000 + delay) {
     window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

function ecoStart(){
  applyImpTracker();
  // animate("nav", 1000);
  // animate(".ion-navicon", 1000);
  // animate("h1", 2000);
  // animate("h2", 3000);
  // animate2("nav");
  // animate2(".ion-navicon");
  // animate2("h1");
  // animate2("h2");
  animate3('nav', 1000);
  animate3(".ion-navicon", 1000);
  animate3("h1", 2000);
  animate3("h2", 3000);
}
