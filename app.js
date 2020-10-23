gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const hellos = ["i love you!", "안녕하세요!", "selamat pagi!", "今日は!", "bonjour!", "你好!"]

let tlMaster = gsap.timeline();

// ENTER BOX
tlMaster.to('.typing',{
    border: "10px solid white",
    ease: 'power1.out',
    delay: 1.5
})

// ENTER > AND _
.to('.arrow', {
    opacity: 100,
    duration: 5,
    ease: 'power1.out',
},">3")

// CURSOR
.to('.cursor1', {duration: 1, opacity: 100, ease: "power2.inOut", repeat: -1, yoyo:true}, "<3");

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

tlMaster
.to(".plsScroll", {
    opacity: 100,
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