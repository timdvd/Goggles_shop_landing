let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    },600);
});

let btnTop = $('.btn-top');
$(window).on('scroll', function(){
    if ($(window).scrollTop() >= 80){
        btnTop.fadeIn();
    }else{
        btnTop.fadeOut();
    }
});

btnTop.on('click', function(){
   $('html,body').animate({scrollTop:0},900); 
});

$(document).ready(function(){
    $('.sidebarBtn').click(function(){
      $('.sidebar').toggleClass('active');
      $('.sidebarBtn').toggleClass('toggle');
    });
  });
  
  $('.pretty').click(function(){
    $(this).toggleClass('pretty-active');
});

$(document).ready(function(){
  $('.close').click(function(){
    $('.sidebar').removeClass('active');
    $('.sidebarBtn').removeClass('toggle');
  });
});

$('.shots-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  $('.new-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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

  $('.sale-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  });