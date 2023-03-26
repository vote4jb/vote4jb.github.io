function prepareCallback() {
    element.removeAttribute('title'); // get rid of annoying title attr
    // For now, store the navigation array and generate year in JS
    return {
        currentYear: (new Date()).getFullYear(),
        navigation: [
            {
                title: "Leadership",
                file: "index.html",
            },
            {
                title: "Endorsements",
                file: "endorsements/",
            },
            {
                title: "About",
                file: "about/",
            },
            /*
            {
                title: "News",
                file: "news/",
            },
            {
                title: "Contact",
                file: "contact/",
            },
            */
        ],
    };
}

let image = null;
let originalWidth = null;
let originalParentWidth = null;
const THRESH = 100; // should make proportional to screen height
const logoSize = 5;
const logoMax = '45vw';
script.exports.logoSize = logoSize;
script.exports.logoMax = logoMax;

function _getDimensions() {
    originalWidth = image.offsetWidth;
    originalParentWidth = image.offsetWidth / logoSize;
}

function imageMount({ el }) {
    image = el;
    _getDimensions();
}

function handleScroll(scrollPos) {
    // Do something with the throttled scroll position
    if (scrollPos > THRESH) {
        image.setAttribute('style', `width: ${ originalParentWidth }; max-width: 100%;  transition: 0.3s !important`);
        /*image.setAttribute('style', '');*/
    } else {
        const diff = originalWidth - originalParentWidth;
        image.setAttribute('style', `width: ${ originalWidth }px; max-width: ${ logoMax }; margin-right: -${diff}px;   transition: 0.3s !important`);
    }
}

let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (image) {
                handleScroll(lastKnownScrollPosition);
            }
            ticking = false;
        });
        ticking = true;
    }
});
let timeout;
window.onresize = function() { // redo dimensions when resize
    clearTimeout(timeout);
    timeout = setTimeout(_getDimensions, 100);
};
