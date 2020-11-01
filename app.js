// reset scroll position on page reload
window.addEventListener('beforeunload', function(event) { 
    window.scrollTo(0, 0);
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// add this as something that plays if you don't type anything for a while..
const hellos = ["no matter where you go", "no matter how you feel", "i'm here for you", "i love you"]

let tlMaster = gsap.timeline();

// HIDE ALL IMAGES
tlMaster.set('.introIMG', {
    autoAlpha: 0
})
// HIDE INPUT BOX
.set('.inputContainer',{
    autoAlpha: 0,
    y: '-=10'
})

// ENTER BOX
.to('.typing',{
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
.to('.hello', {
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
    autoAlpha: 1,
    duration: 5,
}, '<-1')

.to("html, body", {
    overflow: "visible"
}, ">7")

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
})

.to('.hello', {
    duration: 2, 
    text: "happy 21st birthday!", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
},">1")

.to('.hello', {
    duration: 1, 
    text: "happy", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
},">1");

tlIntroAnimate.to('.happy', {
    duration: 3,
    autoAlpha: 1,
    repeat: 1,
    repeatDelay: 0.5,
    yoyo:true,
}, '<')

.to('.hello', {
    duration: 1, 
    text: "sad", 
    ease: "power4.inOut",
    repeat: 1, 
    yoyo:true, 
    repeatDelay: 1
},">1")

.to('.sad', {
    duration: 3,
    autoAlpha: 1,
    repeat: 1,
    repeatDelay: 0.5,
    yoyo:true,
}, '<');
// reveal ___ images with sad text

tlMaster.add(tlIntroAnimate)

.to('.typing',{
    autoAlpha: 0
}, ">3")

.to('.inputContainer', {
    autoAlpha: 1
});
