$(document).ready(function() {
  if ($(window).width() < 1000) {
    $('#smartphone').removeClass('hidden');
    $('.CCM-global').addClass('hidden');
  } else {
    $('#smartphone').addClass('hidden');
    $('.CCM-global').removeClass('hidden');
  }
});
