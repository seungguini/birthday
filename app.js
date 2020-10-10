new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // fires when user leaves 'origin' section to a 'direction'
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1')
        const t1 = new TimelineMax({delay: 0.5});
        t1.fromTo(title, 0.5, {y: '50', opacity: 0}, {y:.0, opacity: 1, onUpdate: function() {
            console.log(title.opacity);
        }});

        /* if i want an animation on page 1 (second pagee)*/
        if(destination.index === 1) {
            const chairs = document.querySelectorAll('.chair');
            const description = document.querySelector('.description');

            t1.fromTo(chairs, 0.7, {x: "100%", x: "-10%"});
        }
    }
})