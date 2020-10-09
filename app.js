new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    // fires when user leaves 'origin' section to a 'direction'
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const title = section.querySelector('h1')
        const t1 = new TimelineMax();
        t1.fromTo(title, 0.5, {y: '50', opacity: 0}, {y:.0, opacity: 1});
    }
})