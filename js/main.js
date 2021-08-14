
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
      
    // },
  });

  let scroll = new SmoothScroll('a[href*="#"]',{
    header: '[data-scroll-header]',
    offset: 0,
    speed: 200,
    easing: 'linear'
  });
