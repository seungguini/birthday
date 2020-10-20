gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const hellos = ["hello there!", "안녕하세요!", "selamat pagi!", "今日は!", "bonjour!", "你好!"]

let cursor = gsap.to('.cursor1', {duration: 1, opacity: 0, ease: "power2.inOut", repeat: -1});

let masterTl = gsap.timeline();

let tlIntroAnimate = gsap.timeline({
    repeat: -1
}).delay(3);

hellos.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 0});
    tl.to('.hello', {
        duration: 3, text: word, ease: "power4.out"
    });
    tlIntroAnimate.add(tl);
});

let tlPlease = gsap.timeline();
tlPlease.from(".text2", {
    opacity: '0%',
    ease: 'power2.in',
    duration: 3
}).delay(30);








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