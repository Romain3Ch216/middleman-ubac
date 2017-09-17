$(document).ready(function() {
  if ($(window).width() > 400) {
    console.log('superieur');
    $('#smartphone').addClass('hidden');
    $('.CCM-global').removeClass('hidden');
  } else {
    $('#smartphone').removeClass('hidden');
    $('.CCM-global').addClass('hidden');
  }
  $(window).resize(function() {
    if ($(window).width() > 400) {
      $('#smartphone').addClass('hidden');
      $('.CCM-global').removeClass('hidden');
    } else {
      console.log('inferieur');
      $('#smartphone').removeClass('hidden');
      $('.CCM-global').addClass('hidden');
    };
  });
});
