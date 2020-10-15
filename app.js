gsap.registerPlugin(ScrollTrigger);

/* timeline for bobbing airplane */
var tlPlane = gsap.timeline({
    defaults: {duration: 3, ease: "sine.inOut"},
    repeat: -1
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

gsap.to(".cloudf", 5 ,{
    right: '125%',
    stagger: {
        each: 2,
        repeat: -1
    }
});

gsap.to(".cloudb", 10 ,{
    right: '125%',
    stagger: {
        each: 2,
        repeat: -1
    }
});

/*
var tlCloud = gsap.timeline({
    repeat: -1,
    defaults: {duration: 3}
});

tlCloud.to("#cloud1", {right: '125%'}, "<1")
.to("#cloud2", {right: '125%'}, "<2")
.to("#cloud3", {right: '125%'}, "<1.5"); */