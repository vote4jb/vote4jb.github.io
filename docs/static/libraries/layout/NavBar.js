function prepareCallback() {
    // On mobile, have it start as hidden if not index.html, otherwise start as
    // expanded (hide=false)
    if (/mobile/i.test(element.tagName)) {
        if (props.selected !== "index.html" && state.hide === null) {
            state.hide = true;
        }
        if (props.selected === "index.html" && state.hide === null) {
            state.hide = false;
        }
    }
    element.removeAttribute('title'); // get rid of annoying title attr

    let transparent = false;
    /*if (props.selected === 'index.html' && state.attop) {
        transparent = true;
    }*/

    // For now, store the navigation array and generate year in JS
    return {
        currentYear: (new Date()).getFullYear(),
        navigation: props.navigation,
        s: props.selected.slice(1),
        transparent,
    };
}

// Disabling scroll listener
/*
function toggle() {
    state.hide = !state.hide;
}

const ATTOP_THRESHHOLD = 100;
function handleScroll(scrollPos) {
    // Do something with the throttled scroll position
    const { attop } = state;
    if (scrollPos > ATTOP_THRESHHOLD) {
        state.attop = false;
        if (attop) {
            element.rerender();
        }
    } else {
        state.attop = true;
        if (!attop) {
            element.rerender();
        }
    }
}

let lastKnownScrollPosition = 0;
let ticking = false;
document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});
*/


/*
// TODO: Remove everything below
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
    //return; // XXX
    image = el;
    //_getDimensions();
}


function handleScroll(scrollPos) {
    // Do something with the throttled scroll position
    if (scrollPos > THRESH) {
        image.classList.add('nav-logo--forcibly-normal');
    } else {
        image.classList.remove('nav-logo--forcibly-normal');
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
*/

/*
let inBuild = false;
const cmd = new URLSearchParams(window.location.search).get('mod-cmd');
if (cmd === 'build') {
    // Currently being built!
    inBuild = true;
}
*/
