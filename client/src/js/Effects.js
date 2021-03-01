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

const parallaxHorizontalLeft = () => {
    window.addEventListener('scroll', (e) => {
        const targets = document.querySelectorAll('.scroll-horizontal-left');
        targets.forEach((target) => {
            target.style.transform = `translate3d(${
                -(target.getBoundingClientRect().top - 150) / 8
            }px, 0px, 0px)`;
            // target.style.opacity = `${
            //     0.35 + target.getBoundingClientRect().top / 300
            // }`;
        });
    });
};

const parallaxHorizontalRight = () => {
    window.addEventListener('scroll', (e) => {
        const targets = document.querySelectorAll('.scroll-horizontal-right');
        targets.forEach((target) => {
            target.style.transform = `translate3d(${
                (target.getBoundingClientRect().top - 150) / 8
            }px, 0px, 0px)`;
            // target.style.opacity = `${
            //     0.35 + target.getBoundingClientRect().top / 300
            // }`;
        });
    });
};

const isScrolledIntoViewFromTop = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    // Only completely visible elements return true:
    let isVisible = elemTop <= window.innerHeight - 50;
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
};

const isScrolledIntoView = (el) => {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;
    // Only completely visible elements return true:
    let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
};

module.exports = {
    parallax,
    parallaxHorizontalLeft,
    parallaxHorizontalRight,
    isScrolledIntoViewFromTop,
    isScrolledIntoView,
};
