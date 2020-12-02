const parallax = () => {
    window.addEventListener('scroll', (e) => {
        const target = document.querySelectorAll('.scroll');
        let length = target.length;

        for (let index = 0; index < length; index++) {
            let pos = window.pageYOffset * target[index].dataset.rate;

            if (target[index].dataset.direction === 'vertical') {
                target[
                    index
                ].style.transform = `translate3d(0px, ${pos}px, 0px)`;
            } else {
                let posX = window.pageYOffset * target[index].dataset.ratex;
                let posY = window.pageYOffset * target[index].dataset.ratey;
                target[
                    index
                ].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
            }
        }
    });
};

const parallaxHeading = () => {
    window.addEventListener('scroll', (e) => {
        const target = document.querySelector('.scroll-heading');

        let pos = (window.pageYOffset - 4000) * target.dataset.rate;

        target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
    });
};

const parallaxImage = () => {
    window.addEventListener('scroll', (e) => {
        const target = document.querySelector('.scroll-img');

        // if (target.getBoundingClientRect().top > window.pageYOffset - 2000) {
        // let length = target.length;
        let pos = (window.pageYOffset - 5000) * target.dataset.rate;
        target.style.transform = `translate3d(0px, ${pos}px, 0px)`;
        // }
    });
};

module.exports.parallax = parallax;
module.exports.parallaxImage = parallaxImage;
module.exports.parallaxHeading = parallaxHeading;
