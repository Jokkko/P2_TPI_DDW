document.addEventListener("DOMContentLoaded", function () {
  if (
    typeof jQuery !== "undefined" &&
    typeof jQuery.fn.owlCarousel !== "undefined"
  ) {
    $(".gallery__carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: [
        '<span aria-label="Anterior">&#x2190;</span>',
        '<span aria-label="Siguiente">&#x2192;</span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
      onInitialized: function () {
        $(".owl-nav button").attr("aria-label", "Navegación del carrusel");
        $(".owl-dot").attr("aria-label", "Punto de navegación");
      },
    });
  } else {
    console.error("jQuery o Owl Carousel no están cargados correctamente");
  }
});
