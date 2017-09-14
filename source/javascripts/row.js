$(document).ready(function() {
  if ($(window).width() < 770) {
    var offset1 = $('.jumbotron').first().offset().top;
    var height1 = $('#jumbotron-1 .card-text').height() + $('#jumbotron-1 .card-img').height();
    $('#jumbotron-2').offset({top: offset1 + height1 + 50});
    var offset2 = $('#jumbotron-2').offset().top;
    var height2 = $('#jumbotron-2 .card-text').height() + $('#jumbotron-2 .img-container').height() + 150;
    $('#jumbotron-2').css('height', height2);
    $('.jumbotron').last().offset({top: offset2 + height2});
    $('#second .btn').addClass('hidden');
  }
  $(window).resize(function() {
    if ($(window).width() < 770) {
      var offset1 = $('.jumbotron').first().offset().top;
      var height1 = $('#jumbotron-1 .card-text').height() + $('#jumbotron-1 .card-img').height();
      $('#jumbotron-2').offset({top: offset1 + height1 + 50});
      var offset2 = $('#jumbotron-2').offset().top;
      var height2 = $('#jumbotron-2 .card-text').height() + $('#jumbotron-2 .img-container').height() + 150;
      $('#jumbotron-2').css('height', height2);
      $('.jumbotron').last().offset({top: offset2 + height2});
      $('#second .btn').addClass('hidden');
    } else {
      $('#second .btn').removeClass('hidden');
    };
  });
});
