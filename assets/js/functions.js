$(document).ready(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('in-use');
  if ($("#home").length > 0) { $('nav a').removeClass('in-use'); }
  //BacktoTop
  $('#uparrow').click(function(){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 900);
  });
  $('.article').click(function() {
    $(this).children('.description').toggleClass('open');
  });
  //When window loads
  $(window).load(function(){
    $('.fashion-header').each(function(){
      $('.fashion-header').addClass('is-showing');
    });
    $('.title').each(function(){
      $('.title').addClass('is-showing');
    });

    //Fashion pics animation
    $('.fashion-pics figure').each(function(i){
      setTimeout(function(){
        $('.fashion-pics figure').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.15))) - 700);
    });
  });
  //Newsletter Form
  $('.newsletter .input-group input').focusout(function(){
    var text_val = $(this).val();
    if(text_val === "") {
      $(this).removeClass('has-value');
    } else {
      $(this).addClass('has-value');
    }
  });
  function init_map(){var myOptions = {zoom:10,center:new google.maps.LatLng(49.2827291,-123.12073750000002),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(49.2827291,-123.12073750000002)});infowindow = new google.maps.InfoWindow({content:'<strong>BClassy Inc.</strong><br>vancouver, bc<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
});

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  if(wScroll > $('.new-collection').offset().top - ($(window).height() / 1.9)) {
    $('.new-collection').each(function(){
        $('.new-collection').addClass('is-showing');
    });
  }
  if(wScroll > $('.about-us').offset().top - ($(window).height() / 1.7)) {
    $('.about-us').each(function(){
      $('.about-us').addClass('is-showing');
    });
  }
});
