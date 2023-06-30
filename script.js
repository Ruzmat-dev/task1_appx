$('.slide-one').owlCarousel({
  dots: true,
  margin: 25, 
  infinity: false,
  responsive : {
      768 : {
          margin: 15,
      },
      320 : {

          items: 1,
      }

  }
});


let $homeSlider = $(".slide-two");

$(window).resize(function() {
showHomeSlider();
});

function showHomeSlider() {
if ($homeSlider.data("owlCarousel") !== "undefined") {
  if (window.matchMedia("(max-width: 767px)").matches) {
    initialHomeSlider();
  } else {
    destroyHomeSlider();
  }
}
}
showHomeSlider();

function initialHomeSlider() {
$homeSlider.addClass("owl-carousel").owlCarousel({
  items: 1,
  loop: true,
});
}

function destroyHomeSlider() {
$homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}



