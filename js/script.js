
$('.section-doc__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  responsive: [
    {
        breakpoint: 1047,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
   
]
  
});

const headeBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerList = document.querySelector('.header__list');  
    
      headeBurger.addEventListener("click", function (e) {
      
      
        headeBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
});
headerList.addEventListener("click", function (e) {
      
      
  headeBurger.classList.remove('active');
  headerMenu.classList.remove('active');
  

});


$(function() {
  $(".language__item").click(function() {
      $(".language__item").removeClass("active");         
      $(this).toggleClass("active");
      
  })
});




  (function() {
    
  
    'use strict';
   
    $('.input-file').each(function() {
      var $input = $(this),
          $label = $input.next('.js-labelFile'),
          labelVal = $label.html();
       
     $input.on('change', function(element) {
        var fileName = '';
        if (element.target.value) fileName = element.target.value.split('\\').pop();
        fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
     });
    });
   
  })();

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add ('active');
  } else {
    scrollUp.classList.remove ('active');
  }

});
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  });


});
 
