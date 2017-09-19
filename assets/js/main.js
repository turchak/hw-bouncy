// function initMap
//-----start--------------------------------------------------------------------
function initMap() {
  let kiev = {
    lat: 50.401699,
    lng: 30.252512
  };
  let image = 'https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m2.png'
  // init map
  let map = new google.maps.Map(document.querySelector('.contacts__map'), {
    zoom: 14,
    center: kiev,
    disableDefaultUI: true
  });
  // init marker
  let marker = new google.maps.Marker({
    position: kiev,
    map: map,
    icon: image,
  });

  let infowindow = new google.maps.InfoWindow({
    content: 'Beetroot Academy',
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    let uluru = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(kiev);
  })
};
//-----end----------------------------------------------------------------------


// function anonimus for sliders
//-----start--------------------------------------------------------------------
$(function() {
  $('.team__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 100,
    cssEase: 'linear',
    autoplay: true,
    adaptiveHeight: true
  });
});
$(function() {
  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    adaptiveHeight: true
  });
});
//-----end----------------------------------------------------------------------



//function startIsotope
//-----start--------------------------------------------------------------------
function startIsotope() {


  let $grid = $('.portfolio__list').isotope({
    itemSelector: '.portfolio__item',
    percentPosition: true,

    masonry: {
      columnWidth: '.portfolio__item',
      horizontalOrder: true,
    }
  });

  $('.portfolio__menu').on('click', 'a', function(event) {
    event.preventDefault();
    var filterValue = $(this).attr('data-filter');
    console.log(filterValue);
    // use filter function if value matches
    filterValue = filterValue;
    $('.portfolio__list').isotope({
      filter: filterValue,
      masonry: {
        columnWidth: '.portfolio__item',
        horizontalOrder: true,
      }
    });
  });


  // change is-checked class on buttons
  $('.portfolio__menu').each(function(i, portfolioMenu) {
    var $portfolioMenu = $(portfolioMenu);
    $portfolioMenu.on('click', 'a', function(event) {
      event.preventDefault();
      $portfolioMenu.find('.portfolio__menu-item-link--active').removeClass('portfolio__menu-item-link--active');
      $(this).addClass('portfolio__menu-item-link--active');
    });
  });
}
startIsotope();
//-----end----------------------------------------------------------------------



//function smooth scroll to anchor
//-----start--------------------------------------------------------------------
function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  }
smoothScroll();
//-----end----------------------------------------------------------------------
