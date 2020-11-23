export default {
    top: () => window.scrollTo(0, 0),
    spot: (id) => {
        setTimeout(() => {
            let el = document.getElementById(id);
            el.scrollIntoView();
        }, 50);
    },
};
