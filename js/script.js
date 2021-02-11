// const intem = document.querySelectorAll(".language__item");
// for (let index = 0; index < intem.length; index++) {
//     const inte = intem[index];
//     inte.addEventListener("click", function(){
//       inte.classList.remove('active');
//       inte.classList.toggle('active');
        
        
//     });
    
// }
//scrollTop

const offset = 500;
const scrollUp = document.querySelector('.scroll-top ');


const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {};

// onscroll
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
]
  
});

const headeBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__nav');
const headerList = document.querySelector('.header__list');
const body = document.body;

function disableScroll () {
  body.classList.add('disble-scroll');
}
function enableScroll () {
  body.classList.remove('disble-scroll');
}
    
      headeBurger.addEventListener("click", function (e) {
      
      
        headeBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        disableScroll ()

});
headerList.addEventListener("click", function (e) {
      
      
  headeBurger.classList.remove('active');
  headerMenu.classList.remove('active');
  enableScroll ()

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

  
 
  
  
  const btns= document.querySelectorAll('.baner__link');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');
  
  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let path = e.currentTarget.getAttribute('data-path');
  
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
  
      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
    });
  });
  
  modalOverlay.addEventListener('click', (e) => {
    
  
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });
    }
  });
