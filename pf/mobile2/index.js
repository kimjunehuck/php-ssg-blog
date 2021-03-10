function MySlider__init(no) {
  var mySwiper = new Swiper('.my-slider-' + no + ' .swiper-container', {
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".my-slider-" + no + " .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        let img = "";

        if (index == 0) {
          img = '<img src="https://cdn.jsdelivr.net/gh/kimjunehuck/img-4/exam/exam2/cgvs1_8.png">';
        } else if (index == 1) {
          img = '<img src="https://cdn.jsdelivr.net/gh/kimjunehuck/img-4/exam/exam2/cgvs1_6.png">';
        } else if (index == 2) {
          img = '<img src="https://cdn.jsdelivr.net/gh/kimjunehuck/img-4/exam/exam2/cgvs1_3.png">';
        } else if (index == 3) {
          img = '<img src="https://cdn.jsdelivr.net/gh/kimjunehuck/img-4/exam/exam2/cgvs1_11.png">';
        } else if (index == 4) {
          img = '<img src="https://cdn.jsdelivr.net/gh/kimjunehuck/img-4/exam/exam2/cgvs1_9.png">';
        } else if (index == 5) {
          img = '<img src="https://picsum.photos/id/6/100/100">';
        } else if (index == 6) {
          img = '<img src="https://picsum.photos/id/7/100/100">';
        } else if (index == 7) {
          img = '<img src="https://picsum.photos/id/8/100/100">';
        }

        const bullet = '<span class="' + className + '">' + img + '</span>';

        return bullet;
      },
    },
    slidesPerView: 1,
    spaceBetween: 0,
  });
}

MySlider__init(1);

const Timeline__Section5__1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-5',
    toggleActions: "restart none none none"
  }
});

Timeline__Section5__1.from('.section-5__text', {
  opacity: 0,
  y: 200,
  duration: .3
});

Timeline__Section5__1.from('.section-5__2text', {
  opacity: 0,
  x: 200,
  duration: .3
});

Timeline__Section5__1.from('.section-5__3text', {
  opacity: 0,
  x: -200,
  duration: .3
});

Timeline__Section5__1.from('.section-5__4text', {
  opacity: 0,
  y: 200,
  duration: .3
});

Timeline__Section5__1.from('.section-5__5text', {
  opacity: 0,
  x: 200,
  duration: .3
});