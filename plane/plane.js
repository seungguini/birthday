gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const words = ["Welcome Aboard", "to a new", "Adventure"];
const ids= ["cursor1", "cursor2", "cursor3"]

let cursor = gsap.to(".cursor", {
    opacity: 0, ease: "power2.inOut", repeat:-1
});

let masterTextTl = gsap.timeline()

words.forEach(word => {
    // 1. typewrite line of text 2. pause for a second before 'entering' (cursor animation)
    let tl = gsap.timeline()
    tl.to('.text', {
        duration: 1,
        value: word
    })

    masterTextTl.add(tl);
});
    

/* IMMA NEST THIS SHIT */

/* airplane bobbing animation (no control)*/


/* timeline for bobbing airplane, with lagged scrubbing control*/
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

/* airplane bobbing animation */
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

/*
var tlCloud = gsap.timeline({
    repeat: -1,
    defaults: {duration: 3}
});

tlCloud.to("#cloud1", {right: '125%'}, "<1")
.to("#cloud2", {right: '125%'}, "<2")
.to("#cloud3", {right: '125%'}, "<1.5"); */