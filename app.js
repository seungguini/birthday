gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// add this as something that plays if you don't type anything for a while..
const hellos = ["i love you!", "사랑해!", "saya sayang kamu!", , "我爱你!", "Je t'aime!", "愛してる!"]

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
}, "<0.2")

// ENTER > AND _
.to('.arrow', {
    opacity: 100,
    duration: 5,
    ease: 'power1.out',
},"<2")

// CURSOR
.to('.cursor1', 0.5, {
    opacity: 100, 
    ease: "power4.in", 
    repeat: -1, 
    yoyo:true, 
    repeatDelay: 0.5}, "<1")

// hello rika!
let tl = gsap.timeline({repeat: 1, yoyo:true, repeatDelay: 1});
tl.to('.hello', {
    duration: 2, 
    text: "hello rika <3", 
    ease: "power4.inOut"
},"<1");

tlMaster.add(tl)

.to("html, body", {
    overflow: "visible"
})

// Add scroll trigger after "i love you" - fade screen and show please scroll

// PLS SCROLL FLASH
.to(".plsScroll", {
    opacity: 100,
    ease: 'power4.inOut',
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.7
}, ">");

let tlIntroAnimate = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "5000 top",
        pin: ".intro",
        scrub: 1,
        markers: true
    }
});

hellos.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to('.hello', {
        duration: 2, 
        text: word, 
        ease: "power4.inOut"
    });
    tlIntroAnimate.add(tl);
});

tlMaster.add(tlIntroAnimate, ">2")



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