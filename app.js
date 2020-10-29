gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// add this as something that plays if you don't type anything for a while..
const hellos = ["no matter where you go", "no matter how you feel", "i'm here for you", "i love you"]

let tlMaster = gsap.timeline();

// ENTER BOX
tlMaster.to('.typing',{
    border: "10px solid white",
    y: '-=10',
    ease: 'power1.out',
    delay: 1.5,
    duration: 1.5
})

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
let tl = gsap.timeline();
tl.to('.hello', {
    duration: 2, 
    text: "hi, rika", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
}, "<1")

.to('.hello', {
    duration: 5, 
    text: "welcome to Journey", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
},">1")

.to('.landingIMG', {
    opacity: '50%',
    duration: 5,
    repeat: 1,
    yoyo:true,
}, '<-1')

.to('.hello', {
    duration: 2, 
    text: "i listen to your emotions", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
},">1");

tlMaster.add(tl)

.to("html, body", {
    overflow: "visible"
}, ">")

// Add scroll trigger after "i love you" - fade screen and show please scroll

// PLS SCROLL FLASH
.to(".plsScroll", {
    opacity: 100,
    ease: 'power4.inOut',
    duration: 1.5,
    repeat: 5,
    yoyo: true,
    repeatDelay: 0.7
}, ">");

// BEGIN SCROLLING

let tlIntroAnimate = gsap.timeline({
    scrollTrigger: {
        trigger: ".intro",
        start: "center center",
        end: "10000 top",
        pin: ".intro",
        scrub: 1,
        markers: true,
    }
},">1");

// reveal cat images with happy text
typeWord("happy");
revealIMG('.happy');

// reveal ___ images with sad text
typeWord("sad");
revealIMG('.sad');

tlMaster.add(tlIntroAnimate, ">");


function typeWord(word) {
let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
    tl.to('.hello', {
        duration: 1, 
        text: word, 
        ease: "power4.inOut"
    },">1");
    tlIntroAnimate.add(tl);
}

function revealIMG(img) {
    tlIntroAnimate.to(img, {
        duration: 3,
        opacity: '50%',
        repeat: 1,
        repeatDelay: 0.5,
        yoyo:true,
    }, '<1');
}