$(document).ready(function() {
    $(".title").lettering();
  });
  
  $(document).ready(function() {
    animation();
  }, 1000);
  
  function animation() {
    var title1 = new TimelineMax();
    title1.staggerFromTo(".title span", 0.5, 
    {ease: Back.easeOut.config(1.7), opacity: 0, top: -80},
    {ease: Back.easeOut.config(1.7), opacity: 1, top: 0}, 0.05);
  }