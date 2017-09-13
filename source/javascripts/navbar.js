$(document).ready(function() {
  $(".dropdown-toggle").dropdown();
  if ($(window).width() < 900) {
      $('.navbar-link').addClass('hidden');
      $('#menu').removeClass('hidden');
    } else {
      $('.navbar-link').removeClass('hidden');
      $('#menu').addClass('hidden');
    };
  $(window).resize(function() {
    if ($(window).width() < 900) {
      $('.navbar-link').addClass('hidden');
      $('#menu').removeClass('hidden');
    } else {
      $('.navbar-link').removeClass('hidden');
      $('#menu').addClass('hidden');
    };
  });
})
