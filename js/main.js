// document.addEventListener("DOMContentLoaded", function(){
//   // make it as accordion for smaller screens
//   if (window.innerWidth < 992) {
//     console.log("sdosudfhuskfdjkhjhkkjkk");
//     // close all inner dropdowns when parent is closed
//     document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
//       everydropdown.addEventListener('hidden.bs.dropdown', function () {
//         // after dropdown is hidden, then find all submenus
//           this.querySelectorAll('.submenu').forEach(function(everysubmenu){
//             // hide every submenu as well
//             // everysubmenu.style.display = 'none';
//           });
//       })
//     });
  
//     document.querySelectorAll('.dropdown-menu a').forEach(function(element){
//       element.addEventListener('click', function (e) {
//           let nextEl = this.nextElementSibling;
//           if(nextEl && nextEl.classList.contains('submenu')) {	
//             // prevent opening link if link needs to open dropdown
//             e.preventDefault();
//             if(nextEl.style.display == 'block'){
//               nextEl.style.display = 'none';
//             } else {
//               nextEl.style.display = 'block';
//             }
  
//           }
//       });
//     })
//   }
//   // end if innerWidth
//   }); 


// Enable mobile-friendly behavior for submenus
document.querySelectorAll('.dropdown-menu .dropdown-submenu').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.stopPropagation();
    if (window.innerWidth <= 991) {
      this.querySelector('.dropdown-menu').classList.toggle('show');
    }
  });
});


(function ($) {
  "use strict";
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();
  new WOW().init();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });
  $('[data-toggle="counter-up"]').counterUp({ delay: 10, time: 2000 });
  $(".skill").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 45,
    dots: false,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 2 },
      576: { items: 4 },
      768: { items: 6 },
      992: { items: 8 },
    },
  });
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");
    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);
