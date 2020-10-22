gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const hellos = ["i love you!", "안녕하세요!", "selamat pagi!", "今日は!", "bonjour!", "你好!"]

let tlMaster = gsap.timeline();

// ENTER BOX
tlMaster.from('.typing', {
    //border: '10px solid white',
    border: "10px solid black",
    duration: 5,
    ease: 'power1.out'
})

// ENTER > AND _
.from('.typing', {
    opacity: 0,
    duration: 5,
    ease: 'power1.out'
})

// CURSOR
.to('.cursor1', {duration: 1, opacity: 0, ease: "power2.inOut", repeat: -1}, "<");

let tlIntroAnimate = gsap.timeline({
    repeat: -1,
})

hellos.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to('.hello', {
        duration: 2, text: word, ease: "power2.out"
    });
    tlIntroAnimate.add(tl);
});

tlMaster.add(tlIntroAnimate, "+=7");

tlMaster.from(".text2", {
    opacity: 0,
    ease: 'power2.inOut',
    duration: 3
})
.to(".text2", {
    opacity: 0,
    ease: 'power1.inOut',
    duration: 2,
    repeat: -1,
    yoyo: true
});







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