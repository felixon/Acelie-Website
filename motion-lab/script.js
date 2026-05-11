// Cursor Follower
const cursor = document.querySelector('#cursor');
window.addEventListener('mousemove', (e) => {
    anime({
        targets: cursor,
        left: e.clientX - 10,
        top: e.clientY - 10,
        duration: 300,
        easing: 'easeOutExpo'
    });
});

// Intro Timeline
const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1200
});

tl.add({
    targets: '.reveal',
    height: '1.2em',
    delay: anime.stagger(150),
    opacity: [0, 1]
})
.add({
    targets: '#morph-path',
    d: [
        { value: 'M40,-62.1C52.2,-54.5,62.5,-43.9,68.9,-31.4C75.4,-18.9,78,-4.5,74.9,8.5C71.8,21.5,63.1,33.1,52.3,42.5C41.5,51.9,28.6,59.1,14.6,62.8C0.5,66.5,-14.7,66.7,-28.9,62.2C-43.1,57.7,-56.3,48.5,-64.1,35.9C-71.9,23.3,-74.3,7.3,-71.4,-7.6C-68.5,-22.5,-60.3,-36.3,-49.2,-44.3C-38.1,-52.3,-24,-54.5,-11.1,-59.1C1.8,-63.7,14.7,-70.7,28,-69.6C41.3,-68.5,55,-59.3,40,-62.1Z' },
        { value: 'M44.1,-63.1C55.6,-57.4,62.7,-43,67.6,-28.8C72.5,-14.5,75.1,-0.3,72.4,12.7C69.7,25.8,61.7,37.6,51.3,46.9C40.8,56.2,27.8,63,14.1,65.2C0.4,67.5,-14,65.2,-27.6,60.2C-41.2,55.1,-54,47.4,-61.8,36.2C-69.6,24.9,-72.5,10.2,-71.2,-4.2C-69.8,-18.6,-64.2,-32.7,-54.5,-41.8C-44.8,-50.9,-30.9,-55,-17.8,-60.5C-4.7,-65.9,7.6,-72.8,21.5,-73.4C35.4,-74,51.1,-68.4,44.1,-63.1Z' }
    ],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
}, '-=1000');

// Grid Item Hover
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        anime({
            targets: item,
            scale: 1.1,
            backgroundColor: '#c9952a',
            color: '#0a0a0a',
            duration: 400,
            easing: 'easeOutElastic(1, .6)'
        });
    });
    item.addEventListener('mouseleave', () => {
        anime({
            targets: item,
            scale: 1,
            backgroundColor: 'transparent',
            color: '#c9952a',
            duration: 400,
            easing: 'easeOutExpo'
        });
    });
});

// Scroll Interaction (Parallax)
window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset;
    anime({
        targets: '.hero',
        translateY: scrollPos * 0.5,
        opacity: 1 - (scrollPos / 500),
        duration: 0
    });
});
