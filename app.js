// reset scroll position on page reload
window.addEventListener('beforeunload', function(event) { 
    window.scrollTo(0, 0);
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

let tlMaster = gsap.timeline();

/* ----- SEQUENCING TIMELINE ----- */
tlMaster
.add(setAnimations())
.call(console.log("animations set"))
.add(introSquence())
.call(console.log("intro sequence"))
.add(scrollAnimate())
.call(console.log("scroll trigger"));

/* ------ TIMELINE ANIMATION FUNCTIONS ------ */

// timeline for setting initial animations before animating
function setAnimations() {
    var tl = gsap.timeline();
    // HIDE ALL IMAGES
    tl.set('.introIMG', {
        autoAlpha: 0
    })
    // HIDE INPUT BOX
    .set('.inputContainer',{
        autoAlpha: 0,
        y: '-=10'
    });

    return tl;
}

// timeline for automatic intro sequence
function introSquence() {

    var tl = gsap.timeline();
    // ENTER BOX
    tl.to('.typing',{
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

    // welcome to Journey
    .to('.hello', {
        duration: 5, 
        text: "welcome to Journey", 
        ease: "power4.inOut",
        repeat: 1, 
        yoyo:true, 
        repeatDelay: 1
    },">1")

    // show landingIMG with text above
    .to('.landingIMG', {
        autoAlpha: 1,
        duration: 5,
    }, '<-1')

    // unlock scrolling
    .to("html, body", {
        overflow: "visible"
    }, ">7")

    // flash "please scroll down"
    .to(".plsScroll", {
        opacity: 100,
        ease: 'power4.inOut',
        duration: 1.5,
        repeat: 5,
        yoyo: true,
        repeatDelay: 0.7
    }, ">")

}

// returns timeline for scrolltrigger animation in intro
function scrollAnimate() {

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "center center",
            end: "10000 center",
            pin: ".intro",
            scrub: 1,
            once: true,
            markers: true,
            /* 
            isActive intially true
            when scroll trigger finishes
            1. lock scroll to prevent going back up
            2. switch text box with input box
            */
            onToggle: self => {
                if (!self.isActive) {
                    // 1. lock scroll
                    tlMaster.add(lockScroll());

                    // 2. switch boxes
                    tlMaster.add(openInput());
                    
                }
            }
        }
    });
    
    // text: happy 21st birthday!
    tl.to('.hello', {
        duration: 2, 
        text: "happy 21st birthday!", 
        ease: "power4.inOut",
        repeat: 1, 
        yoyo:true, 
        repeatDelay: 1
    },">1")
    
    // input example : happy
    .to('.hello', {
        duration: 1, 
        text: "happy", 
        ease: "power4.inOut",
        repeat: 1, 
        yoyo:true, 
        repeatDelay: 1
    },">1")    
    .to('.happy', {
        duration: 3,
        autoAlpha: 1,
        repeat: 1,
        repeatDelay: 0.5,
        yoyo:true,
    }, '<')

    // input example : sad
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

    return tl;
}

function openInput() {
    var tl = gsap.timeline();
    tl.to('.typing',{
        autoAlpha: 0,
        duration: 0
    }, ">");
    tl.to('.inputContainer', {
        autoAlpha: 1,
        duration: 0
    }, ">");
    return tl;
}

function lockScroll() {
    var tl = gsap.timeline();
    tl.to('html, body', {
        overflow: 'hidden'
    });
    console.log('scroll locked');
    return tl;
}