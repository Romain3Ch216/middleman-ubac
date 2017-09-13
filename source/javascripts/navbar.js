$(document).ready(function() {
  $(window).resize(function() {
    if ($(window).width() < 900) {
      $('.navbar-links').addClass('hidden');
      $('#creatif').removeClass('hidden');
    } else {
      $('.navbar-links').removeClass('hidden');
      $('#creatif').addClass('hidden');
    };
  });
})
