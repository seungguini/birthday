gsap.registerPlugin(ScrollTrigger);

const tlPlane = gsap.timeline
tlPlane.to(".plane", 3,
    {y: '+=30', rotation: '-=3', ease:Power1.easeInOut})


floatPlane();
