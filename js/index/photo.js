function slider(){
  var current = $('.item.current'),
      next = current.is(':last-child') ? $('.item').first() : current.next();
  next.addClass('current');
  current.removeClass('current');
}
var setSlider = setInterval( slider, 4000);