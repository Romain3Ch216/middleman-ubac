$(document).ready(function() {
  if ($(window).width() > 400) {
    $('#smartphone').addClass('hidden');
    $('.CCM-global').removeClass('hidden');
  } else {
    $('#smartphone').removeClass('hidden');
    $('.CCM-global').addClass('hidden');
  }
});
