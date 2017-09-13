$(document).ready(function() {
  var max = Math.max($('#step-1').height(),$('#step-2').height(),$('#step-3').height(),$('#step-4').height());
  $('#step-1').css('height', max);
  $('#step-2').css('height', max);
  $('#step-3').css('height', max);
  $('#step-4').css('height', max);
  var diff = $('#step-4').offset().top + max - $('.CCM-global').offset().top;
  $('.CCM-global').css('height', diff + 50);
  $(window).resize(function() {
    var max = Math.max($('#step-1').height(),$('#step-2').height(),$('#step-3').height(),$('#step-4').height());
    $('#step-1').css('height', max);
    $('#step-2').css('height', max);
    $('#step-3').css('height', max);
    $('#step-4').css('height', max);
    var diff = $('#step-4').offset().top + max - $('.CCM-global').offset().top;
    $('.CCM-global').css('height', diff + 50);
  }
})
