gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const hellos = ["i love you!", "사랑해!", "saya sayang kamu!", "今日は!", "Je t'aime!", "你好!"]

let tlMaster = gsap.timeline();

// ENTER BOX
tlMaster.to('.typing',{
    border: "10px solid white",
    ease: 'power1.out',
    delay: 1.5
})

.to('.typing',{
    borderRadius: "20",
    ease: 'elastic',
    duration: 3
})

// ENTER > AND _
.to('.arrow', {
    opacity: 100,
    duration: 5,
    ease: 'power1.out',
},"<2")

// CURSOR
.to('.cursor1', {opacity: 100, ease: "power4.inOut", repeat: -1, yoyo:true, repeatDelay: 0.5}, "<2");

let tlIntroAnimate = gsap.timeline({
    repeat: -1,
})

hellos.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to('.hello', {
        duration: 2, text: word, ease: "power4.inOut"
    }, ">0.5");
    tlIntroAnimate.add(tl);
});

tlMaster.add(tlIntroAnimate, ">2")

// PLS SCROLL FLASH
.to(".plsScroll", {
    opacity: 100,
    ease: 'power1.inOut',
    duration: 2,
    repeat: -1,
    yoyo: true
}, ">10");

// pause animation upon scroll





/* timeline for bobbing airplane, with lagged scrubbing control
let tlPlaneControl = gsap.timeline({
    scrollTrigger: {
        trigger: ".preload",
        start: "center center",
        end: "5000 top",
        pin: ".preload",
        scrub: 1,
        markers: true
    },
    repeat: 1
});

/* airplane bobbing animation
tlPlaneControl.fromTo(".plane",{
    y: '+=30',
    rotation: '-=1'
}, {

    y: '-=30',
    rotation: '+=1',
})
.to(".plane", {
    y: '+=30',
    rotation: '-=1',
});

*/