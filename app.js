gsap.registerPlugin(ScrollTrigger);

/* timeline for bobbing airplane */
let tlPlane = gsap.timeline({
    scrollTrigger: {
        trigger: ".preload",
        start: "center center",
        end: "6000 top",
        pin: ".preload",
        scrub: 1,
        markers: true
    },
    repeat: 1
});

/* airplane bobbing animation */
tlPlane.fromTo(".plane",{
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

/*
var tlCloud = gsap.timeline({
    repeat: -1,
    defaults: {duration: 3}
});

tlCloud.to("#cloud1", {right: '125%'}, "<1")
.to("#cloud2", {right: '125%'}, "<2")
.to("#cloud3", {right: '125%'}, "<1.5"); */