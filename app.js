gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let tlIntro = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "5000 center",
        markers: true,
        pin: true,
        scrub: 3
    }
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