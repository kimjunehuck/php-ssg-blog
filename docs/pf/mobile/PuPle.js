//* section-1 *//

const Timeline__Section1__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-1',
      markers:true,
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section1__1.from('.section-1__text', {
    opacity:0,
    y:-200,
    duration:1
  });
  
  Timeline__Section1__1.from('.section-1__2text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section1__1.from('.section-1__3text', {
    opacity:0,
    y:200,
    duration:1
  }, "-=0.5");
  
  //* section-2 *//
  
  const Timeline__Section2__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-2',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section2__1.from('.section-2__text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section2__1.from('.section-2__2text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section2__1.from('.section-2__3text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.5");
  
  //* section-3 *//
  
  const Timeline__Section3__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-3',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section3__1.from('.section-3__text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section3__1.from('.section-3__2text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section3__1.from('.section-3__3text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section3__1.from('.section-3__4text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.5");
  
  //* section-4 *//
  
  const Timeline__Section4__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-4',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section4__1.from('.section-4__text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__2text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__3text', {
    opacity:0,
    y:200,
    duration:1
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__4text', {
    opacity:0,
    x:200,
    duration:1.5
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__5text', {
    opacity:0,
    x:-200,
    duration:1.5
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__6text', {
    opacity:0,
    x:-200,
    duration:1.7
  }, "-=0.5");
  
  Timeline__Section4__1.from('.section-4__7text', {
    opacity:0,
    x:200,
    duration:1
  }, "-=0.2");
  
  //* section-6 *//
  
  const Timeline__Section6__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-6',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section6__1.from('.section-6__text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__2text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__3text', {
    opacity:0,
    y:-200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__4text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__5text', {
    opacity:0,
    x:-200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__6text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.5");
  
  Timeline__Section6__1.from('.section-6__7text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section6__1.from('.section-6__8text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section6__1.from('.section-6__9text', {
    opacity:0,
    y:200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section6__1.from('.section-6__10text', {
    opacity:0,
    x:-200,
    duration:1.7
  }, "-=0.2");
  
  Timeline__Section6__1.from('.section-6__11text', {
    opacity:0,
    y:-200,
    duration:1.7
  }, "-=0.2");
  
  Timeline__Section6__1.from('.section-6__12text', {
    opacity:0,
    x:200,
    duration:1.7
  }, "-=0.2");
  
  /* section7 */
  const Timeline__Section7__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-7',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section7__1.from('.section-7__text', {
    opacity:0,
    x:-200,
    duration:1.5
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__2text', {
    opacity:0,
    x:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__3text', {
    opacity:0,
    y:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__4text', {
    opacity:0,
    x:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__5text', {
    opacity:0,
    x:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__6text', {
    opacity:0,
    y:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__7text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__8text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__9text', {
    opacity:0,
    y:-200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__10text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__11text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__12text', {
    opacity:0,
    y:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__13text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  Timeline__Section7__1.from('.section-7__14text', {
    opacity:0,
    x:200,
    duration:0.8
  }, "-=0.2");
  
  /* section8 */
  const Timeline__Section8__1 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-8',
      markers:true,
      start:'top 70%',
      end:'bottom top',
      toggleActions: "restart none none none"
    }
  });
  
  Timeline__Section8__1.from('.section-8__text', {
    opacity:0,
    x:-200,
    duration:2
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__2text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__3text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__4text', {
    opacity:0,
    x:200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__5text', {
    opacity:0,
    x:200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__6text', {
    opacity:0,
    y:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__7text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__8text', {
    opacity:0,
    x:-200,
    duration:1
  }, "-=0.2");
  
  Timeline__Section8__1.from('.section-8__9text', {
    opacity:0,
    y:200,
    duration:1
  }, "-=0.2");