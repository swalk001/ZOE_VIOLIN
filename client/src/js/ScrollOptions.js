export default {
    top: () => window.scrollTo(0, 0),
    spot: (id) => {
        const el = document.getElementById(id);
        const pos = el.getBoundingClientRect();
        const scroll = window.pageYOffset + pos.top;
        window.scrollTo(0, scroll - 110);
    },
};
