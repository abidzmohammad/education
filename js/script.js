$(document).ready(function(){
   $('.counter').counterUp({
      delay: 5,
  });
});
$(document).ready(function(){
   $(".course-active").owlCarousel({
      loop: true,
      nav: true,
      dots:false,
      margin: 20,
      navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
          0: {
              items: 1,
          },
          500: {
              items: 2,
          },
          700: {
              items: 2,
          },
          1000: {
              items: 4,
          },
      },
  });
});

$(document).ready(function(){
   $(".blog-active").owlCarousel({
      loop: true,
      dots:false,
      nav: true,
      margin: 30,
      navText: [
          '<i class="bi bi-chevron-left"></i>',
          '<i class="bi bi-chevron-right"></i>',
      ],
      responsive: {
          0: {
              items: 1,
          },
          500: {
              items: 2,
          },
          700: {
              items: 2,
          },
          1000: {
              items: 3,
          },
      },
  });
});

$(document).ready(function(){
    $(".testimonial-active").owlCarousel({
       loop: true,
       dots:false,
       center: true,
       nav: true,
       margin: 30,
       navText: [
           '<i class="bi bi-chevron-left"></i>',
           '<i class="bi bi-chevron-right"></i>',
       ],
       responsive: {
           0: {
               items: 1,
           },
           500: {
               items: 1,
           },
           760: {
               items: 1,
           },
           800: {
               items: 2,
           },
           1000: {
               items: 2,
           },
       },
   });
 });