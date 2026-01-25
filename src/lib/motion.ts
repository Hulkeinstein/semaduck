export const FADE_IN = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
};

export const STAGGER_CONTAINER = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
        }
    }
};

export const ZOOM_HOVER = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.4, ease: "easeOut" }
};
