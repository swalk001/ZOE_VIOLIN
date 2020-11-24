export default {
    top: () => window.scrollTo(0, 0),
    spot: (id) => {
        setTimeout(() => {
            const el = document.getElementById(id);
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        }, 50);
    },
};
