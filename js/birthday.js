const bday = document.querySelectorAll('#happybday path');

for(let i = 0; i<bday.length; i++) {
    console.log(`Letter ${i} is ${bday[i].getTotalLength()}`);
}
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    
    let parallaxTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section",
            start: "center center",
            end: "1000 center",
            scrub: 1,
            markers: true
        }    
    })

    /* ANIMATION SEQUENCE */
    parallaxTl
    .to('#third', 6, {
        y: -300
    }, '-=6')
    .to('#second', 6, {
        y: -200
    }, '-=6')
    .to('#first', 6, {
        y: -100
    }, '-=6')
    .to('.content, .blur', 6, {
        top: '0%'
    }, '-=6')
    .to('.title', 6, {
        y: -600,
    }, '-=6')
    .from('.one', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=4')
    .from('.two', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.three', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.four', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.text', 3, {
        y: 60,
        autoAlpha: 0
    }, '-=4');
});