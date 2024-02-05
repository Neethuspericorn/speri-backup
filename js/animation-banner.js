const animation2 = lottie.loadAnimation({
  container: document.getElementById('animate'),
  renderer: 'svg',
  autoplay: false,
  path: 'js/animation.json', // add the lottie path for 2nd animation
});
animation2.setSpeed(0.3);

var lottieAnim = anime({
  targets: '.lottie-animate',
  scale : [0,1] ,
  rotate : 150,
  easing: 'easeOutQuint',
  //easing: 'easeOutCubic',
  //easing: 'easeInOutSine',
  duration:5000,
  delay :6000,
});
var handAnimOne = anime({
    targets: '.hand-1 img',
    translateY: [0, 100],
    translateX: [0, 100],
    loop: false,
    opacity: [0, 1],
    duration:5000,
    delay:100,
    easing: 'cubicBezier(.5, -0.2, .1, .3)',
  });
var handAnimtwo = anime({
    targets: '.hand-2 img',
    translateY: [100, 0],
    translateX: [100, 0],
    opacity: [0, 1],
    duration:5000,
   delay:100,
    easing: 'cubicBezier(.5, -0.9, .1, .3)',
    complete: function(anim) {
       animation2.play(); // call the 2nd lottie animation
        
    }
  });