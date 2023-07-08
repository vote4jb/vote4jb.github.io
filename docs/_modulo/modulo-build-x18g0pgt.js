window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };

window.moduloBuild.modules["x1ra22d3"] = function configuration (modulo) {

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    // Check common things we skip
    if (window.location.host.startsWith('localhost')) {
        return;
    }
    if (window.location.host.includes('.local')) {
        return;
    }
    if (window.location.host.startsWith('127')) {
        return;
    }
    if (window.location.host.startsWith('192')) {
        return;
    }
    if (window.location.host.startsWith('dev--')) {
        return;
    }

    gtag('js', new Date());
    gtag('config', 'G-6ZT8F1MF6V'); // TODO: Swap with correct
    const scriptId = 'gascript';
    const scriptSrc = "https://www.googletagmanager.com/gtag/js?id=G-6ZT8F1MF6V"; // TODO: Swap with correct
    setTimeout(() => {
        if(!document.getElementById(scriptId)) {
            var script = document.createElement('script');
            script.id = scriptId;
            script.src = scriptSrc;
            document.head.appendChild(script);
        }
    }, 10);

};
window.moduloBuild.nameToHash.configuration = "x1ra22d3";

window.moduloBuild.modules["x1833ghl"] = function library_Page (modulo) {

        const def = modulo.definitions['library_Page'];
        class x_Page extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Page);
        window.customElements.define(def.TagName, x_Page);
        return x_Page;
    
};
window.moduloBuild.nameToHash.library_Page = "x1833ghl";

window.moduloBuild.modules["x12svjee"] = function library_NavBar (modulo) {

        const def = modulo.definitions['library_NavBar'];
        class x_NavBar extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_NavBar);
        window.customElements.define(def.TagName, x_NavBar);
        return x_NavBar;
    
};
window.moduloBuild.nameToHash.library_NavBar = "x12svjee";

window.moduloBuild.modules["x1m45dof"] = function library_EndorsementsGallery (modulo) {

        const def = modulo.definitions['library_EndorsementsGallery'];
        class x_EndorsementsGallery extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_EndorsementsGallery);
        window.customElements.define(def.TagName, x_EndorsementsGallery);
        return x_EndorsementsGallery;
    
};
window.moduloBuild.nameToHash.library_EndorsementsGallery = "x1m45dof";

window.moduloBuild.modules["x1gb9ukk"] = function library_MobileNavBar (modulo) {

        const def = modulo.definitions['library_MobileNavBar'];
        class x_MobileNavBar extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_MobileNavBar);
        window.customElements.define(def.TagName, x_MobileNavBar);
        return x_MobileNavBar;
    
};
window.moduloBuild.nameToHash.library_MobileNavBar = "x1gb9ukk";

window.moduloBuild.modules["xx5bl57u"] = function library_Banner (modulo) {

        const def = modulo.definitions['library_Banner'];
        class x_Banner extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Banner);
        window.customElements.define(def.TagName, x_Banner);
        return x_Banner;
    
};
window.moduloBuild.nameToHash.library_Banner = "xx5bl57u";

window.moduloBuild.modules["xx8mqn9a"] = function library_Gallery (modulo) {

        const def = modulo.definitions['library_Gallery'];
        class x_Gallery extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_Gallery);
        window.customElements.define(def.TagName, x_Gallery);
        return x_Gallery;
    
};
window.moduloBuild.nameToHash.library_Gallery = "xx8mqn9a";

window.moduloBuild.modules["x1t80rap"] = function library_HeroInset (modulo) {

        const def = modulo.definitions['library_HeroInset'];
        class x_HeroInset extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_HeroInset);
        window.customElements.define(def.TagName, x_HeroInset);
        return x_HeroInset;
    
};
window.moduloBuild.nameToHash.library_HeroInset = "x1t80rap";

window.moduloBuild.modules["x14goo7g"] = function library_AllBanners (modulo) {

        const def = modulo.definitions['library_AllBanners'];
        class x_AllBanners extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_AllBanners);
        window.customElements.define(def.TagName, x_AllBanners);
        return x_AllBanners;
    
};
window.moduloBuild.nameToHash.library_AllBanners = "x14goo7g";

window.moduloBuild.modules["x116emse"] = function library_EventCard (modulo) {

        const def = modulo.definitions['library_EventCard'];
        class x_EventCard extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_EventCard);
        window.customElements.define(def.TagName, x_EventCard);
        return x_EventCard;
    
};
window.moduloBuild.nameToHash.library_EventCard = "x116emse";

window.moduloBuild.modules["xxu1n46q"] = function library_Page_script (modulo) {
var script = { exports: {} }; var props, staticdata, element;

        function prepareCallback() {
            element.removeAttribute('title'); // get rid of annoying title attr
            // For now, store the navigation array and generate year in JS
            let markdown = null;
            let hideJoin = false;
            if (props.markdown) {
                console.log("error: no markdown support");
                markdown = modulo.registry.utils.doMarkdown(element.originalHTML);
            }
            if (props.navselected.includes('contact')) {
                hideJoin = true;
            }
            return {
                currentYear: (new Date()).getFullYear(),
                navigation: staticdata.navigation,
                smallNav: staticdata.smallNav,
                markdown,
                hideJoin,
            };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props; staticdata=o.staticdata; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Page_script = "xxu1n46q";

window.moduloBuild.modules["xxlibo0e"] = function library_NavBar_script (modulo) {
var script = { exports: {} }; var props, state, script, element;
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

function toggle() {
    state.hide = !state.hide;
}


// Disabling scroll listener
/*
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

return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "toggle": typeof toggle !== "undefined" ? toggle : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, "_getDimensions": typeof _getDimensions !== "undefined" ? _getDimensions : undefined, "imageMount": typeof imageMount !== "undefined" ? imageMount : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; script=o.script; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_NavBar_script = "xxlibo0e";

window.moduloBuild.modules["xxlibo0e"] = function library_MobileNavBar_script (modulo) {
var script = { exports: {} }; var props, state, script, element;
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

function toggle() {
    state.hide = !state.hide;
}


// Disabling scroll listener
/*
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

return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "toggle": typeof toggle !== "undefined" ? toggle : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, "_getDimensions": typeof _getDimensions !== "undefined" ? _getDimensions : undefined, "imageMount": typeof imageMount !== "undefined" ? imageMount : undefined, "handleScroll": typeof handleScroll !== "undefined" ? handleScroll : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; script=o.script; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_MobileNavBar_script = "xxlibo0e";

window.moduloBuild.modules["x1bavvfc"] = function library_Banner_script (modulo) {
var script = { exports: {} }; var props, ebState;

        function prepareCallback() {
            let expired = false;
            if (props.expiry) {
                const [ year, month, day] = props.expiry.split('-');
                const expiry = new Date(Number(year), Number(month) - 1, Number(day));
                expired = expiry < new Date(); // in the past!
                if (expired === false) {
                    if (!ebState.shown) { // not one shown
                        ebState.shown = props.url; // ensure only 1 gets showed
                    }
                    if (ebState.shown !== props.url) { // already one shown
                        expired = true;
                    }
                }
            }
            return { expired };
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, setLocalVariables: function(o) {props=o.props; ebState=o.ebState}, exports: script.exports }

};
window.moduloBuild.nameToHash.library_Banner_script = "x1bavvfc";

window.moduloBuild.modules["x11jc8t5"] = function library1_ContactForm (modulo) {

        const def = modulo.definitions['library1_ContactForm'];
        class x_ContactForm extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_ContactForm);
        window.customElements.define(def.TagName, x_ContactForm);
        return x_ContactForm;
    
};
window.moduloBuild.nameToHash.library1_ContactForm = "x11jc8t5";

window.moduloBuild.modules["xxx4ld6j"] = function library1_ActionNetworkForm (modulo) {

        const def = modulo.definitions['library1_ActionNetworkForm'];
        class x_ActionNetworkForm extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_ActionNetworkForm);
        window.customElements.define(def.TagName, x_ActionNetworkForm);
        return x_ActionNetworkForm;
    
};
window.moduloBuild.nameToHash.library1_ActionNetworkForm = "xxx4ld6j";

window.moduloBuild.modules["xxoqqbin"] = function library1_DonateButtons (modulo) {

        const def = modulo.definitions['library1_DonateButtons'];
        class x_DonateButtons extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_DonateButtons);
        window.customElements.define(def.TagName, x_DonateButtons);
        return x_DonateButtons;
    
};
window.moduloBuild.nameToHash.library1_DonateButtons = "xxoqqbin";

window.moduloBuild.modules["xx8f934i"] = function library1_ContactForm_script (modulo) {
var script = { exports: {} }; var props, state, style, component, element;
const ACT_BLUE = 'jovankaforcastatesenate';

const fields = [
    {
      label: 'First Name',
      name: 'firstname',
    },
    {
      label: 'Last Name',
      name: 'lastname',
    },
    {
      label: 'Email',
      name: 'email',
    },
    {
      label: 'Zip Code',
      name: 'zip',
      style: 'half',
    },
    {
      label: 'Phone',
      name: 'phone',
      style: 'half',
    },
    {
      label: 'Yes, I want to volunteer',
      name: 'volunteer',
      style: 'check',
    },
    {
      label: 'Include message',
      name: 'has_message',
      style: 'check',
    },
    {
      label: 'Yes, I want to donate',
      name: 'donate',
      style: 'check',
    },
];

const increments = [ 2, 9, 27, 50, 200, 1000 ];

let hasRun = false;
function prepareCallback() {
    if (!hasRun) {
        hasRun = true;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('volunteer')) { // TODO rm this, urlParams are dead code
            state.volunteer = true;
            state.title = 'Volunteer';
        } else if (urlParams.get('donate')) {
            state.donate = true;
            state.title = 'Donate';
        } else {
            if (props.volunteerform) {
                state.volunteer = true;
                state.title = 'Volunteer';
            } else if (props.donateform) {
                state.donate = true;
                state.title = 'Donate';
            } else if (props.endorseform) {
                state.title = 'Endorse Jovanka';
            }
        }

        const form = element.parentNode;
        if (form.tagName !== 'FORM') {
            console.error('could not find form, misusing component!', form);
        } else {
            form.addEventListener('submit', handleSubmit);
        }

    }

    // ///////////////////////////////////////
    // Hacky bug fixes -v
    if (state.donate === 'on') {
        state.donate = !!document.querySelector('[name=donate]').checked;
    }
    if (state.volunteer === 'on') {
        state.volunteer = !!document.querySelector('[name=volunteer]').checked;
    }
    if (state.has_message === 'on') {
        state.has_message = !!document.querySelector('[name=has_message]').checked;
    }
    // ///////////////////////////////////////

    return {
        form_name: 'contact',
        fields,
        increments,
    }
}

function redirectToActBlue(formData) {
    if (!state.donate) {
        state.show_final_donation_modal = true;
        return; // nothing to do, but
    }
    state.is_redirecting_to_actblue = true;
    let amount = formData.get('donate_value') || '';
    if (amount === 'other' || (amount === '0' && formData.get('donate_other_value'))) {
        const otherVal = String(formData.get('donate_other_value') || '');
        amount = otherVal.replace(/\D+/g, '');
    }
    if (amount === '0') {
        amount = '';
    }
    if (amount) {
        amount = '&amount=' + amount;
    }

    /// create ref and url
    const ref = state.title ? ('x' + state.title.toLowerCase()) : '';
    const url = `https://secure.actblue.com/donate/${ACT_BLUE}?refcode=f1` +
                ref + amount;
    // Set 2 second delay to 1 second fade out
    window.document.body.style.opacity = "1.0";
    window.document.body.style.transition = "opacity 1s";
    setTimeout(() => {
        window.document.body.style.opacity = "0.0";
        setTimeout(() => {
            setTimeout(() => {
                window.document.body.style.opacity = "0.9";
            }, 0);
            window.location.href = url;
        }, 1000);
    }, 2000);
}

function setDonation (payload) {
    // hack, force copy back to get this working right
    const split = payload.split('_');
    const newValue = split.length === 3 ? split[2] : '';
    state.donate_value = newValue || 'undefined';
    const elem = element.querySelector(payload);
    if (elem) {
        elem.checked = true; // since we hijack the event
    }
}

function mergeFormData(ev, data) {
    const myForm = ev.target;
    const formData = new FormData(myForm);
    for (const [ key, value ] of  Object.entries(data)) {
        formData.set(key, value);
    }
    return formData;
}

function handleSubmit(ev) {
    // TODO: This is working now, just need to clean up data so the form submission is better.
    ev.preventDefault();
    const formData = mergeFormData(ev, state, {
        FORM_USED: ev.target.getAttribute('name'),
    });
    state.submitted = true;
    handleGSheetsSubmit(formData);
    handleNetlifySubmit(formData);
}

function handleGSheetsSubmit(formData) {
}

function handleNetlifySubmit(formData) {
    fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
      })
      .then(response => {
          if (!response.ok) {
              state.success = false;
              state.error = '' + response;
              window.response = response;
              response.text().then(text => {
                  // Using div to "clean" the tags away
                  const div = document.createElement('div');
                  div.innerHTML = text;
                  const cleanText = div.textContent;
                  state.error = cleanText;
                  redirectToActBlue(formData);
                  element.rerender();
              });
          } else {
              state.success = true;
              redirectToActBlue(formData);
              element.rerender();
          }
      })
      .catch((error) => {
          console.error(error);
          state.error = '' + error;
          state.success = false;
      });
}


return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "redirectToActBlue": typeof redirectToActBlue !== "undefined" ? redirectToActBlue : undefined, "setDonation": typeof setDonation !== "undefined" ? setDonation : undefined, "mergeFormData": typeof mergeFormData !== "undefined" ? mergeFormData : undefined, "handleSubmit": typeof handleSubmit !== "undefined" ? handleSubmit : undefined, "handleGSheetsSubmit": typeof handleGSheetsSubmit !== "undefined" ? handleGSheetsSubmit : undefined, "handleNetlifySubmit": typeof handleNetlifySubmit !== "undefined" ? handleNetlifySubmit : undefined, setLocalVariables: function(o) {props=o.props; state=o.state; style=o.style; component=o.component; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library1_ContactForm_script = "xx8f934i";

window.moduloBuild.modules["xxio81du"] = function library1_ActionNetworkForm_script (modulo) {
var script = { exports: {} }; var script, style;

        const scriptId = 'anv5embedscript';
        const linkId = 'anv5embedlink';
        function updateCallback() {
            // XXX FRAGILE way to skip during automated build
            const host = String(location.host);
            if (host === '127.0.0.1:6627') { // skip during build
                return;
            }
            if(!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = 'https://actionnetwork.org/widgets/v5/form/jovanka-beckles-for-state-senate?format=js&source=widget';
                document.head.appendChild(script);
            }
            if(!document.getElementById(linkId)) {
                const link = document.createElement('link');
                link.id = linkId;
                link.rel = 'stylesheet';
                link.href = 'https://actionnetwork.org/css/style-embed-v3.css';
                document.head.appendChild(link);
            }
        }
    
return {"updateCallback": typeof updateCallback !== "undefined" ? updateCallback : undefined, setLocalVariables: function(o) {script=o.script; style=o.style}, exports: script.exports }

};
window.moduloBuild.nameToHash.library1_ActionNetworkForm_script = "xxio81du";

window.moduloBuild.modules["xxxo8kc1"] = function library2_MobilizeAPI (modulo) {

        const def = modulo.definitions['library2_MobilizeAPI'];
        class x_MobilizeAPI extends window.HTMLElement {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, x_MobilizeAPI);
        window.customElements.define(def.TagName, x_MobilizeAPI);
        return x_MobilizeAPI;
    
};
window.moduloBuild.nameToHash.library2_MobilizeAPI = "xxxo8kc1";

window.moduloBuild.modules["xx5mcakl"] = function library2_MobilizeAPI_script (modulo) {
var script = { exports: {} }; var staticdata, element;

        let refreshedEvents = null;
        let hasAttemptedRefresh = false;
        function prepareCallback() {
            let events = staticdata.data;
            if (refreshedEvents) { // refreshedEvents has come back, use instead
                events = refreshedEvents;
            }
            events = Array.from(events).reverse();
            return { events };
        }

        function updateCallback() {
            if (!hasAttemptedRefresh) { // Freshen up data
                hasAttemptedRefresh = true;
                fetch("https://api.mobilize.us/v1/organizations/35735/events?per_page=500")
                    .then(response => response.json())
                    .then(results => {
                        refreshedEvents = results.data; // quick hack, store in a global var
                        if (JSON.stringify(refreshedEvents) !== JSON.stringify(staticdata.data)) {
                            element.rerender(); // Not the same as bundled, updated since building last, refresh
                        } else {
                            console.log('(refreshedEvents is same as cached)', refreshedEvents);
                        }
                    });

            }
        }
    
return {"prepareCallback": typeof prepareCallback !== "undefined" ? prepareCallback : undefined, "updateCallback": typeof updateCallback !== "undefined" ? updateCallback : undefined, setLocalVariables: function(o) {staticdata=o.staticdata; element=o.element}, exports: script.exports }

};
window.moduloBuild.nameToHash.library2_MobilizeAPI_script = "xx5mcakl";

window.moduloBuild.modules["xx9q80jq"] = function library_Page_template_footer (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<div class=\"u--layout\">\n\n    <ul>\n        <h3>Contact</h3>\n        <li><a href=\"mailto:info@jovanka4casenate.com\">info@jovanka4casenate.com</a></li>\n        <div style=\"font-size: 12px; padding-top: 10px\">\n            Paid for by:<br />\n            <tt>Jovanka Beckles For State Senate 2024<br />\n            FPPC 1459429</tt><br />\n            <tt>12929 San Pablo Ave<br />Richmond, CA 94805</tt><br />\n            &copy; "); // "<div class=\"u--layout\"><ul><h3>Contact</h3><li><a href=\"mailto:info@jovanka4casenate.com\">info@jovanka4casenate.com</a></li><div style=\"font-size: 12px; padding-top: 10px\"> Paid for by:<br /><tt>Jovanka Beckles For State Senate 2024<br /> FPPC 1459429</tt><br /><tt>12929 San Pablo Ave<br />Richmond, CA 94805</tt><br /> &copy;"
  OUT.push(G.escapeText(CTX.script.currentYear)); // "script.currentYear"
  OUT.push(" Jovanka Beckles For State Senate 2024<br />\n        </div>\n    </ul>\n    <ul>\n        <h3>Links</h3>\n        <li> <a href=\"/\">Home</a> </li>\n        "); // "Jovanka Beckles For State Senate 2024<br /></div></ul><ul><h3>Links</h3><li><a href=\"/\">Home</a></li>"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"> "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul>\n        <h3>&nbsp;</h3>\n        "); // "</ul><ul><h3>&nbsp;</h3>"
  var ARR0=CTX.staticdata.linkNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.linkNav"
  OUT.push("\n            <li> <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a> </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n\n        "); // ""
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <li> <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a> </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n    <!--\n    <ul>\n        <h3>Social Media</h3>\n        <li class=\"inline-links\">\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-instagram fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-meetup fa-2x\"></i></a>\n        </li>\n        <li class=\"inline-links\">\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-linkedin fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-twitter-square fa-2x\"></i></a>\n            &nbsp;\n            <a target=\"_blank\" href=\"#\"><i class=\"fab fa-github fa-2x\"></i></a>\n        </li>\n    </ul>\n    -->\n\n\n        <div style=\"font-size: 0.6rem;  padding: 10px; padding-top: 100px; max-width: 200px\">\n            <strong><a href=\"/find-my-district/\">State Senate District 7 info &#8640;</a></strong>\n            <br /> Oakland, Berkeley, Richmond, Alameda, San Pablo,\n            Hercules, El Cerrito, Albany, Pinole, Emeryville, Piedmont, El\n            Sobrante, Rodeo, North Richmond, East Richmond Heights, Kensington, and\n            parts of San Leandro.\n        </div>\n\n</div>\n\n"); // "</ul><!-- <ul><h3>Social Media</h3><li class=\"inline-links\"><a target=\"_blank\" href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-instagram fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-meetup fa-2x\"></i></a></li><li class=\"inline-links\"><a target=\"_blank\" href=\"#\"><i class=\"fab fa-linkedin fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-twitter-square fa-2x\"></i></a> &nbsp; <a target=\"_blank\" href=\"#\"><i class=\"fab fa-github fa-2x\"></i></a></li></ul> --><div style=\"font-size: 0.6rem; padding: 10px; padding-top: 100px; max-width: 200px\"><strong><a href=\"/find-my-district/\">State Senate District 7 info &#8640;</a></strong><br /> Oakland, Berkeley, Richmond, Alameda, San Pablo, Hercules, El Cerrito, Albany, Pinole, Emeryville, Piedmont, El Sobrante, Rodeo, North Richmond, East Richmond Heights, Kensington, and parts of San Leandro. </div></div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template_footer = "xx9q80jq";

window.moduloBuild.modules["xxeagkjg"] = function library_Page_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<head>\n    <title>"); // "<head><title>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.title,""))); // "props.title|default:''"
  if (CTX.props.title) { // "if props.title"
  OUT.push(" - "); // "-"
  } // "endif"
  OUT.push("Jovanka for California State Senate</title>\n\n    <meta name=\"title\" content=\""); // "Jovanka for California State Senate</title><meta name=\"title\" content=\""
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push(" | Jovanka for California State Senate\">\n    <meta name=\"description\" content=\"Jovanka is running for District 7, which covers Oakland, Berkeley, Richmond, and more. She fights for healthcare, good jobs, and progressive values for the East Bay. Learn more and join an event!\">\n    <meta name=\"keywords\" content=\"Jovanka,Beckles,Oakland, Berkeley, Richmond, Alameda, San Pablo,Hercules,El Cerrito,Albany,Pinole,Emeryville,Piedmont,El Sobrante,Rodeo,North Richmond,East Richmond Heights,Kensington,San Leandro,california,senate,vote,2024,State Senate District 7 info \">\n    <meta name=\"robots\" content=\"index, follow\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"language\" content=\"English\">\n    <meta name=\"revisit-after\" content=\"30 days\">\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\" rel=\"stylesheet\">\n\n    <!-- Action network\n    <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' />\n    <script src='https://actionnetwork.org/widgets/v5/form/jovanka-beckles-for-state-senate?format=js&source=widget'></script>\n    -->\n\n    <link rel=\"stylesheet\" href=\"/static/css/site.css\" />\n    <link rel=\"stylesheet\" href=\"/static/css/site-mobile.css\" />\n\n\n\n</head>\n<body>\n\n<x-NavBar\n    class=\"u--desktop\"\n    selected=\""); // "| Jovanka for California State Senate\"><meta name=\"description\" content=\"Jovanka is running for District 7, which covers Oakland, Berkeley, Richmond, and more. She fights for healthcare, good jobs, and progressive values for the East Bay. Learn more and join an event!\"><meta name=\"keywords\" content=\"Jovanka,Beckles,Oakland, Berkeley, Richmond, Alameda, San Pablo,Hercules,El Cerrito,Albany,Pinole,Emeryville,Piedmont,El Sobrante,Rodeo,North Richmond,East Richmond Heights,Kensington,San Leandro,california,senate,vote,2024,State Senate District 7 info \"><meta name=\"robots\" content=\"index, follow\"><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><meta name=\"language\" content=\"English\"><meta name=\"revisit-after\" content=\"30 days\"><link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"><link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin><link href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap\" rel=\"stylesheet\"><!-- Action network <link href='https://actionnetwork.org/css/style-embed-v3.css' rel='stylesheet' type='text/css' /><script src='https://actionnetwork.org/widgets/v5/form/jovanka-beckles-for-state-senate?format=js&source=widget'></script> --><link rel=\"stylesheet\" href=\"/static/css/site.css\" /><link rel=\"stylesheet\" href=\"/static/css/site-mobile.css\" /></head><body><x-NavBar class=\"u--desktop\" selected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\"\n></x-NavBar>\n\n<x-MobileNavBar\n    class=\"u--mobile\"\n    selected=\""); // "\" ></x-NavBar><x-MobileNavBar class=\"u--mobile\" selected=\""
  OUT.push(G.escapeText(CTX.props.navselected)); // "props.navselected"
  OUT.push("\"\n></x-MobileNavBar>\n\n"); // "\" ></x-MobileNavBar>"
  if (CTX.props.toptitle) { // "if props.toptitle"
  OUT.push("\n    <div class=\"Page-container layout-container page-top\">\n        <h1 class=\"hero-text-top layout-container\">\n            <div>"); // "<div class=\"Page-container layout-container page-top\"><h1 class=\"hero-text-top layout-container\"><div>"
  OUT.push(G.escapeText(CTX.props.toptitle)); // "props.toptitle"
  OUT.push("</div>\n        </h1>\n        "); // "</div></h1>"
  if (CTX.props.bottomtitle) { // "if props.bottomtitle"
  OUT.push("\n            <h1 class=\"hero-text-bottom layout-container\">\n                <div>"); // "<h1 class=\"hero-text-bottom layout-container\"><div>"
  OUT.push(G.escapeText(G.filters["safe"](CTX.props.bottomtitle))); // "props.bottomtitle|safe"
  OUT.push("</div>\n            </h1>\n        "); // "</div></h1>"
  } // "endif"
  OUT.push("\n    </div>\n"); // "</div>"
  } // "endif"
  OUT.push("\n\n"); // ""
  if (CTX.script.markdown) { // "if script.markdown"
  OUT.push("\n    <div class=\"Page-container layout-container Page-markdown\">\n        "); // "<div class=\"Page-container layout-container Page-markdown\">"
  OUT.push(G.escapeText(G.filters["safe"](CTX.script.markdown))); // "script.markdown|safe"
  OUT.push("\n    </div>\n"); // "</div>"
  } else { // "else"
  OUT.push("\n    <slot class=\"Page-container layout-container\" style=\""); // "<slot class=\"Page-container layout-container\" style=\""
  if (CTX.props.navselected === "index.html") { // "if props.navselected == \"index.html\""
  OUT.push("padding-top:0"); // "padding-top:0"
  } // "endif"
  OUT.push("\">\n    </slot>\n"); // "\"></slot>"
  } // "endif"
  OUT.push("\n\n<x-AllBanners></x-AllBanners>\n\n"); // "<x-AllBanners></x-AllBanners>"
  if (!(CTX.script.hideJoin)) { // "if not script.hideJoin"
  OUT.push("\n    <div class=\"hero-inset layout-container hero-inset--alt\"\n        style=\" background: linear-gradient(to top, #ffffff55, #ffffff99),\n                            url('/static/images/images-landing/atu_photo.JPG') 0 -100px;\n        height: 400px;\">\n        <div class=\"j4s-BtnBox\" style=\"height: 200px; margin-top: 120px;\">\n            <h3><span style=\"background: white; line-height: 1.4\">\n            JOIN THE CAMPAIGN<br />Become a volunteer, <br />or make a donation!\n            </span></h3>\n            <a class=\"j4s-Btn\" href=\"/contact/volunteer.html\">Volunteer<br />&#8640;</a>\n            <a class=\"j4s-Btn\" href=\"/contact/donate.html\">Donate<br />&#8640;</a>\n        </div>\n    </div>\n"); // "<div class=\"hero-inset layout-container hero-inset--alt\" style=\" background: linear-gradient(to top, #ffffff55, #ffffff99), url('/static/images/images-landing/atu_photo.JPG') 0 -100px; height: 400px;\"><div class=\"j4s-BtnBox\" style=\"height: 200px; margin-top: 120px;\"><h3><span style=\"background: white; line-height: 1.4\"> JOIN THE CAMPAIGN<br />Become a volunteer, <br />or make a donation! </span></h3><a class=\"j4s-Btn\" href=\"/contact/volunteer.html\">Volunteer<br />&#8640;</a><a class=\"j4s-Btn\" href=\"/contact/donate.html\">Donate<br />&#8640;</a></div></div>"
  } // "endif"
  OUT.push("\n\n<footer class=\"Page-footer layout-container\">\n    "); // "<footer class=\"Page-footer layout-container\">"
  OUT.push(CTX.template_footer.render(CTX)); // "include template_footer"
  OUT.push("\n</footer>\n</body>\n"); // "</footer></body>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Page_template = "xxeagkjg";

window.moduloBuild.modules["xxb2mijg"] = function library_Page_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_Page_staticdata = "xxb2mijg";

window.moduloBuild.modules["xxbd9csb"] = function library_NavBar_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<x-AllBanners></x-AllBanners>\n\n<nav class=\"Page-nav layout-container\" style=\""); // "<x-AllBanners></x-AllBanners><nav class=\"Page-nav layout-container\" style=\""
  if (CTX.script.transparent) { // "if script.transparent"
  OUT.push("background: #ffffff33;"); // "background: #ffffff33;"
  } // "endif"
  OUT.push("\">\n    <div style=\"grid-column: 1;\" class=\"logo-wrapper\">\n        <a href=\"/\" style=\"border: none\">\n            <img\n                class=\"nav-logo\"\n                src=\"/static/images/logos/logo.png\"\n                alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\"\n            />\n        </a>\n    </div>\n\n    <ul>\n        "); // "\"><div style=\"grid-column: 1;\" class=\"logo-wrapper\"><a href=\"/\" style=\"border: none\"><img class=\"nav-logo\" src=\"/static/images/logos/logo.png\" alt=\"Delivering Results! Together. Jovanka Beckles for State Senate\" /></a></div><ul>"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a href=\"/"); // "<li><a href=\"/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  OUT.push("\"\n                    title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                    class=\"\n                        Page-navLink\n                        "); // "\" class=\" Page-navLink"
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("Page-navLink--selected"); // "Page-navLink--selected"
  } // "endif"
  OUT.push("\n                    \">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                </a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n        "); // ""
  var ARR0=CTX.staticdata.linkNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.linkNav"
  OUT.push("\n          "); // ""
  if (!(CTX.page.skipNav)) { // "if not page.skipNav"
  OUT.push("\n            <li>\n                "); // "<li>"
  if (CTX.page.emoji) { // "if page.emoji"
  OUT.push("<span class=\"emoji\">"); // "<span class=\"emoji\">"
  OUT.push(G.escapeText(CTX.page.emoji)); // "page.emoji"
  OUT.push("</span>"); // "</span>"
  } // "endif"
  OUT.push("\n                <a href=\""); // "<a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\" class=\"right-link-nav-cta\n                        "); // "\" class=\"right-link-nav-cta"
  if (CTX.page.href === CTX.script.s) { // "if page.href == script.s"
  OUT.push("nav--selected"); // "nav--selected"
  } // "endif"
  OUT.push("\n                \">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n          "); // "</a></li>"
  } // "endif"
  OUT.push("\n        "); // ""
  } // "endfor"
  OUT.push("\n        "); // ""
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <li>\n                <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\" class=\"right-cta\n                        "); // "\" class=\"right-cta"
  if (CTX.page.href === CTX.script.s) { // "if page.href == script.s"
  OUT.push("nav--selected"); // "nav--selected"
  } // "endif"
  OUT.push("\n                \">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n\n    </ul>\n\n    <!--\n    <div style=\"grid-column: 3; width: 300px\">\n    </div>\n    -->\n</nav>\n\n\n"); // "</ul><!-- <div style=\"grid-column: 3; width: 300px\"></div> --></nav>"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n    <div \n        class=\"hero-composite-splash\"\n        role=\"img\"\n        aria-label=\"Splash image with Delivering Results Together! Jovanka Beckles for State Senate logo, and photo of Jovanka at a picket line\"\n    ></div>\n    <div class=\"hero-splash-video-holder\">\n        <iframe width=\"560\" height=\"315\"\n            src=\"https://www.youtube.com/embed/dqQ8jJDBhj8\"\n            title=\"YouTube video player\"\n            frameborder=\"0\"\n            allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\"\n            allowfullscreen></iframe>\n    </div>\n"); // "<div class=\"hero-composite-splash\" role=\"img\" aria-label=\"Splash image with Delivering Results Together! Jovanka Beckles for State Senate logo, and photo of Jovanka at a picket line\" ></div><div class=\"hero-splash-video-holder\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dqQ8jJDBhj8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\" allowfullscreen></iframe></div>"
  } // "endif"
  OUT.push("\n\n\n\n"); // ""
  /* // "comment"
  OUT.push("\n"); // ""
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n<div style=\"position: absolute; right: 20px; top: 350px; z-index: 10; height: 100%; max-height: 100%\">\n    <div style=\"position: sticky; top: 2px\">\n        <a class=\"hero-cta\" href=\"/contact/\">\n            Volunteer\n            <!--<span style=\"font-weight: 200\" alt=\"Right arrow\">&#x29d0;</span>-->\n            <span style=\"font-weight: 200\" alt=\"Right arrow\">&#x25B9;</span>\n        </a>\n        <a href=\"/contact/?volunteer=y\" class=\"join-the-cause-nav-button\">Volunteer</a>\n        <a href=\"/contact/?donate=y\" class=\"join-the-cause-nav-button\">Donate</a>\n    </div>\n</div>\n"); // "<div style=\"position: absolute; right: 20px; top: 350px; z-index: 10; height: 100%; max-height: 100%\"><div style=\"position: sticky; top: 2px\"><a class=\"hero-cta\" href=\"/contact/\"> Volunteer <!--<span style=\"font-weight: 200\" alt=\"Right arrow\">&#x29d0;</span>--><span style=\"font-weight: 200\" alt=\"Right arrow\">&#x25B9;</span></a><a href=\"/contact/?volunteer=y\" class=\"join-the-cause-nav-button\">Volunteer</a><a href=\"/contact/?donate=y\" class=\"join-the-cause-nav-button\">Donate</a></div></div>"
  } // "endif"
  OUT.push("\n"); // ""
  */ // "endcomment"
  OUT.push("\n\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_NavBar_template = "xxbd9csb";

window.moduloBuild.modules["xxb2mijg"] = function library_NavBar_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_NavBar_staticdata = "xxb2mijg";

window.moduloBuild.modules["xxq922tb"] = function library_EndorsementsGallery_template (modulo) {
return function (CTX, G) { var OUT=[];
  if (CTX.props.button) { // "if props.button"
  OUT.push("\n\n    <h2 style=\"margin: 3vw 0 0 3vw\">\n        Endorsed by elected officials, trusted community leaders,\n        and rank &amp; file union members and grassroots organizations:\n    </h2>\n    <br style=\"clear: both\" />\n"); // "<h2 style=\"margin: 3vw 0 0 3vw\"> Endorsed by elected officials, trusted community leaders, and rank &amp; file union members and grassroots organizations: </h2><br style=\"clear: both\" />"
  } // "endif"
  OUT.push("\n\n"); // ""
  if (CTX.props.button) { // "if props.button"
  OUT.push("\n    <a class=\"j4s-Btn u--desktop\" href=\"/endorsements/\">Endorsements <br />&#8640;</a>\n"); // "<a class=\"j4s-Btn u--desktop\" href=\"/endorsements/\">Endorsements <br />&#8640;</a>"
  } // "endif"
  OUT.push("\n\n<div class=\"endorsements-gallery\">\n    <a style=\"text-decoration: none\" href=\"/endorsements/\">\n        "); // "<div class=\"endorsements-gallery\"><a style=\"text-decoration: none\" href=\"/endorsements/\">"
  var ARR0=CTX.staticdata.gallery;for (var KEY in ARR0) {CTX. image=ARR0[KEY]; // "for image in staticdata.gallery"
  OUT.push("\n            "); // ""
  if (!(CTX.image.skip)) { // "if not image.skip"
  OUT.push("\n                <img\n                    class=\"photo\"\n                    src=\"/static/images/endorsements/"); // "<img class=\"photo\" src=\"/static/images/endorsements/"
  OUT.push(G.escapeText(CTX.image.src)); // "image.src"
  OUT.push("\"\n                />\n            "); // "\" />"
  } // "endif"
  OUT.push("\n        "); // ""
  } // "endfor"
  OUT.push("\n    </a>\n</div>\n\n"); // "</a></div>"
  OUT.push("\n"); // ""
  OUT.push("\n\n"); // ""
  if (CTX.props.button) { // "if props.button"
  OUT.push("\n    <a class=\"j4s-Btn u--mobile\" href=\"/endorsements/\">Endorsements <br />&#8640;</a>\n"); // "<a class=\"j4s-Btn u--mobile\" href=\"/endorsements/\">Endorsements <br />&#8640;</a>"
  } // "endif"
  OUT.push("\n\n\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_EndorsementsGallery_template = "xxq922tb";

window.moduloBuild.modules["x17mkc9f"] = function library_EndorsementsGallery_staticdata (modulo) {
return {"gallery":[{"src":"2306/eduardomartinez.jpg"},{"src":"230523/GusNewport4_Square_Endorse.jpg"},{"src":"230523/DevinMurphy_Facebook_MadeIntoSquare_512px_2.jpg"},{"src":"230523/Paola_Laverde_Square_512px.jpg"},{"src":"2307/Teamsters_Square_Endorsement.jpg"},{"src":"2307/Teamsters_Local856_Square_Endorsement.jpg"},{"src":"2306/GenovevaCalloway_Endorse__Square.jpg"},{"src":"2306/CAMERON_SASAI_Square_ENDORSES.jpg"},{"skip":true,"src":"2306/our_revolution_east_bay.jpg"},{"skip":true,"src":"230523/WiP_Square_Endorse_512px.jpg"}]};
};
window.moduloBuild.nameToHash.library_EndorsementsGallery_staticdata = "x17mkc9f";

window.moduloBuild.modules["x18qlp5c"] = function library_MobileNavBar_template (modulo) {
return function (CTX, G) { var OUT=[];
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n    "); // ""
  /* // "comment"
  OUT.push("\n    <div class=\"top-splash\">\n        <a href=\"#\">\n            <img class=\"background-splash\" src=\"/static/images/seiu_jovanka_1.jpg\">\n\n            <img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\">\n\n            <img\n                class=\"left-logo\"\n                src=\"/static/images/logos/logo.png\"\n                alt=\"Delivering Results Together! Jovanka Beckles for State Senate\"\n            />\n        </a>\n    </div>\n    "); // "<div class=\"top-splash\"><a href=\"#\"><img class=\"background-splash\" src=\"/static/images/seiu_jovanka_1.jpg\"><img class=\"right-cutout\" src=\"/static/images/hero/portrait_cut_out_cropped_2.png\"><img class=\"left-logo\" src=\"/static/images/logos/logo.png\" alt=\"Delivering Results Together! Jovanka Beckles for State Senate\" /></a></div>"
  */ // "endcomment"
  OUT.push("\n    <div \n        class=\"hero-composite-splash\"\n        role=\"img\"\n        aria-label=\"Jovanka speaking at a rally\"\n    ></div>\n"); // "<div class=\"hero-composite-splash\" role=\"img\" aria-label=\"Jovanka speaking at a rally\" ></div>"
  } else { // "else"
  OUT.push("\n    <div class=\"menu-holder\"  @click:=script.toggle>\n        <a>☰</a>\n    </div>\n\n    <nav class=\"right-logo-holder\">\n        <a href=\"/\">\n            <img\n                src=\"/static/images/logos/logo.png\"\n                class=\"right-logo\"\n                alt=\"Delivering Results Together! Jovanka Beckles for State Senate\"\n            />\n        </a>\n    </nav>\n"); // "<div class=\"menu-holder\" @click:=script.toggle><a>☰</a></div><nav class=\"right-logo-holder\"><a href=\"/\"><img src=\"/static/images/logos/logo.png\" class=\"right-logo\" alt=\"Delivering Results Together! Jovanka Beckles for State Senate\" /></a></nav>"
  } // "endif"
  OUT.push("\n\n<nav class=\"sliding-nav "); // "<nav class=\"sliding-nav"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("sliding-nav--index"); // "sliding-nav--index"
  } // "endif"
  OUT.push(" "); // ""
  if (CTX.state.hide) { // "if state.hide"
  OUT.push("sliding-nav--hide"); // "sliding-nav--hide"
  } // "endif"
  OUT.push(" \">\n    <ul class=\"main\">\n        "); // "\"><ul class=\"main\">"
  var ARR0=CTX.staticdata.navigation;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.navigation"
  OUT.push("\n            <li>\n                <a\n                    href=\""); // "<li><a href=\""
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("#c"); // "#c"
  } else { // "else"
  OUT.push("/"); // "/"
  OUT.push(G.escapeText(CTX.page.file)); // "page.file"
  } // "endif"
  OUT.push("\"\n                    title=\""); // "\" title=\""
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\"\n                    class=\"mnav "); // "\" class=\"mnav"
  if (CTX.page.file === CTX.props.selected) { // "if page.file == props.selected"
  OUT.push("mnav--selected"); // "mnav--selected"
  } // "endif"
  OUT.push("\">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("\n                </a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul class=\"small-links\" style=\"grid-template-columns: repeat("); // "</ul><ul class=\"small-links\" style=\"grid-template-columns: repeat("
  OUT.push(G.escapeText(G.filters["length"](CTX.staticdata.linkNav))); // "staticdata.linkNav|length"
  OUT.push(", 1fr)\">\n        "); // ", 1fr)\">"
  var ARR0=CTX.staticdata.linkNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.linkNav"
  OUT.push("\n            <li>\n                <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n\n    <ul class=\"volunteer\" style=\"grid-template-columns: repeat("); // "</ul><ul class=\"volunteer\" style=\"grid-template-columns: repeat("
  OUT.push(G.escapeText(G.filters["length"](CTX.staticdata.smallNav))); // "staticdata.smallNav|length"
  OUT.push(", 1fr)\">\n        "); // ", 1fr)\">"
  var ARR0=CTX.staticdata.smallNav;for (var KEY in ARR0) {CTX. page=ARR0[KEY]; // "for page in staticdata.smallNav"
  OUT.push("\n            <li>\n                <a href=\""); // "<li><a href=\""
  OUT.push(G.escapeText(CTX.page.href)); // "page.href"
  OUT.push("\">"); // "\">"
  OUT.push(G.escapeText(CTX.page.title)); // "page.title"
  OUT.push("</a>\n            </li>\n        "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    </ul>\n</nav>\n<x-AllBanners></x-AllBanners>\n\n"); // "</ul></nav><x-AllBanners></x-AllBanners>"
  if (CTX.props.selected === "index.html") { // "if props.selected == \"index.html\""
  OUT.push("\n    <iframe\n        width=\"560\"\n        height=\"315\" \n        style=\"width: 100%\"\n        src=\"https://www.youtube-nocookie.com/embed/dqQ8jJDBhj8\"\n        title=\"YouTube video player\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\"\n        allowfullscreen></iframe>\n"); // "<iframe width=\"560\" height=\"315\" style=\"width: 100%\" src=\"https://www.youtube-nocookie.com/embed/dqQ8jJDBhj8\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;\" allowfullscreen></iframe>"
  } // "endif"
  OUT.push("\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_MobileNavBar_template = "x18qlp5c";

window.moduloBuild.modules["xxb2mijg"] = function library_MobileNavBar_staticdata (modulo) {
return {"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]};
};
window.moduloBuild.nameToHash.library_MobileNavBar_staticdata = "xxb2mijg";

window.moduloBuild.modules["x1uhts7l"] = function library_Banner_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n"); // ""
  if (!(CTX.script.expired)) { // "if not script.expired"
  OUT.push("\n    <a href=\""); // "<a href=\""
  OUT.push(G.escapeText(CTX.props.url)); // "props.url"
  OUT.push("\">\n        🗓️\n        <strong>"); // "\"> 🗓️ <strong>"
  OUT.push(G.escapeText(CTX.props.title)); // "props.title"
  OUT.push("</strong>\n        "); // "</strong>"
  OUT.push(G.escapeText(CTX.props.text)); // "props.text"
  OUT.push("\n        <strong>"); // "<strong>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.date,""))); // "props.date|default:\"\""
  OUT.push("</strong>\n        <span>"); // "</strong><span>"
  OUT.push(G.escapeText(G.filters["default"](CTX.props.cta,"RSVP"))); // "props.cta|default:\"RSVP\""
  OUT.push(" &#8640;</span>\n    </a>\n"); // "&#8640;</span></a>"
  } // "endif"
  OUT.push("\n\n"); // ""

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Banner_template = "x1uhts7l";

window.moduloBuild.modules["xxs1f8sl"] = function library_Gallery_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n<slot class=\"column-gallery\">\n</slot>\n\n"); // "<slot class=\"column-gallery\"></slot>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_Gallery_template = "xxs1f8sl";

window.moduloBuild.modules["x19toonk"] = function library_HeroInset_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<h1>\n    Fighting Corporate Greed,<br />\n    <span style=\"font-weight: 500; font-style: italic\">Getting Results</span>\n</h1>\n\n<h2>Together, we demand a California that works for:</h2>\n\n<div class=\"platform\">\n    <div class=\"platform-photo-wrapper\">\n        <div \n            class=\"platform-photo\"\n            role=\"img\"\n            aria-label=\"Photo of Jovanka being handed a flower by a child\"\n        ></div>\n    </div>\n\n    <div>\n        <a class=\"platform-plank\">\n            <h3>Working people, not just the greedy few</h3>\n            <p>Fair wages, power in our workplaces, and taxes on the\n            rich</p>\n        </a>\n\n        <a class=\"platform-plank\">\n            <h3>Women, families, and children</h3>\n            <p>Paid time off, free early childcare, and women's\n            reproductive rights</p>\n        </a>\n\n        <a class=\"platform-plank\">\n            <h3>Our whole physical and mental health</h3>\n            <p>Quality healthcare and education are human rights and should be free to all</p>\n        </a>\n\n        <a class=\"platform-plank\">\n            <h3>Our climate</h3>\n            <p>A green New Deal for the East Bay starts with seamless\n            public transit</p>\n        </a>\n\n        <a class=\"platform-plank\">\n            <h3>Working homeowners and tenants</h3>\n            <p>Win housing that works for us, not the big landlords and\n            developers</p>\n        </a>\n    </div>\n\n\n    "); // "<h1> Fighting Corporate Greed,<br /><span style=\"font-weight: 500; font-style: italic\">Getting Results</span></h1><h2>Together, we demand a California that works for:</h2><div class=\"platform\"><div class=\"platform-photo-wrapper\"><div class=\"platform-photo\" role=\"img\" aria-label=\"Photo of Jovanka being handed a flower by a child\" ></div></div><div><a class=\"platform-plank\"><h3>Working people, not just the greedy few</h3><p>Fair wages, power in our workplaces, and taxes on the rich</p></a><a class=\"platform-plank\"><h3>Women, families, and children</h3><p>Paid time off, free early childcare, and women's reproductive rights</p></a><a class=\"platform-plank\"><h3>Our whole physical and mental health</h3><p>Quality healthcare and education are human rights and should be free to all</p></a><a class=\"platform-plank\"><h3>Our climate</h3><p>A green New Deal for the East Bay starts with seamless public transit</p></a><a class=\"platform-plank\"><h3>Working homeowners and tenants</h3><p>Win housing that works for us, not the big landlords and developers</p></a></div>"
  /* // "comment"
  OUT.push("\n    <div>\n        <a class=\"platform-plank\" href=\"/issues/#workersrights\">\n            <h3>Working people, not just the greedy few</h3>\n            <p>Fair wages, power in our workplaces, and taxes on the\n            rich</p>\n        </a>\n\n        <a class=\"platform-plank\" href=\"/issues/#womensrights\">\n            <h3>Women, families, and children</h3>\n            <p>Paid time off, free early childcare, and women's\n            reproductive rights</p>\n        </a>\n\n        <a class=\"platform-plank\" href=\"/issues/#healthcare\">\n            <h3>Our whole physical and mental health</h3>\n            <p>Quality healthcare and education are human rights and should be free to all</p>\n        </a>\n\n        <a class=\"platform-plank\" href=\"/issues/#climate\">\n            <h3>Our climate</h3>\n            <p>A green New Deal for the East Bay starts with seamless\n            public transit</p>\n        </a>\n\n        <a class=\"platform-plank\" href=\"/issues/#housing\">\n            <h3>Working homeowners and tenants</h3>\n            <p>Win housing that works for us, not the big landlords and\n            developers</p>\n        </a>\n    </div>\n    "); // "<div><a class=\"platform-plank\" href=\"/issues/#workersrights\"><h3>Working people, not just the greedy few</h3><p>Fair wages, power in our workplaces, and taxes on the rich</p></a><a class=\"platform-plank\" href=\"/issues/#womensrights\"><h3>Women, families, and children</h3><p>Paid time off, free early childcare, and women's reproductive rights</p></a><a class=\"platform-plank\" href=\"/issues/#healthcare\"><h3>Our whole physical and mental health</h3><p>Quality healthcare and education are human rights and should be free to all</p></a><a class=\"platform-plank\" href=\"/issues/#climate\"><h3>Our climate</h3><p>A green New Deal for the East Bay starts with seamless public transit</p></a><a class=\"platform-plank\" href=\"/issues/#housing\"><h3>Working homeowners and tenants</h3><p>Win housing that works for us, not the big landlords and developers</p></a></div>"
  */ // "endcomment"
  OUT.push("\n\n</div>\n\n\n<x-EndorsementsGallery button=true  style=\"grid-column: 1 / span 3\"></x-EndorsementsGallery>\n\n\n"); // "</div><x-EndorsementsGallery button=true style=\"grid-column: 1 / span 3\"></x-EndorsementsGallery>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_HeroInset_template = "x19toonk";

window.moduloBuild.modules["x1v9ebiv"] = function library_AllBanners_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<!-- Note: Only one will be shown: The first non-expired one -->\n\n<!--\n<x-Banner\n    style=\"grid-column: 1 / span 3\"\n    title=\"Join us at the park!\"\n    text=\"Jovanka for State Senate Lit Drop\"\n    date=\"Sun May 28th at Martin Luther King Jr. Park in Berkeley\"\n    url=\"https://www.mobilize.us/jovanka4casenate/event/564948/\"\n    cta=\"Get details & RSVP\"\n    expiry=\"2023-05-29\"\n></x-Banner>\n-->\n\n<x-Banner\n    style=\"grid-column: 1 / span 3\"\n    title=\"JOIN OUR HOUSE PARTY!\"\n    text=\"House Party for Jovanka for State Senate\"\n    date=\"June 10th near Downtown Berkeley, CA\"\n    url=\"https://www.mobilize.us/jovanka4casenate/event/564951/\"\n    cta=\"Get details & RSVP\"\n    expiry=\"2023-06-11\"\n></x-Banner>\n\n\n"); // "<!-- Note: Only one will be shown: The first non-expired one --><!-- <x-Banner style=\"grid-column: 1 / span 3\" title=\"Join us at the park!\" text=\"Jovanka for State Senate Lit Drop\" date=\"Sun May 28th at Martin Luther King Jr. Park in Berkeley\" url=\"https://www.mobilize.us/jovanka4casenate/event/564948/\" cta=\"Get details & RSVP\" expiry=\"2023-05-29\" ></x-Banner> --><x-Banner style=\"grid-column: 1 / span 3\" title=\"JOIN OUR HOUSE PARTY!\" text=\"House Party for Jovanka for State Senate\" date=\"June 10th near Downtown Berkeley, CA\" url=\"https://www.mobilize.us/jovanka4casenate/event/564951/\" cta=\"Get details & RSVP\" expiry=\"2023-06-11\" ></x-Banner>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_AllBanners_template = "x1v9ebiv";

window.moduloBuild.modules["x1819qvg"] = function library_EventCard_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<figure class=\"ecard\">\n    <img src=\""); // "<figure class=\"ecard\"><img src=\""
  OUT.push(G.escapeText(CTX.props.image)); // "props.image"
  OUT.push("\" />\n    <caption>\n        <h2>"); // "\" /><caption><h2>"
  OUT.push(G.escapeText(CTX.props.caption)); // "props.caption"
  OUT.push("</h2>\n        <p><strong>"); // "</h2><p><strong>"
  OUT.push(G.escapeText(CTX.props.locality)); // "props.locality"
  OUT.push("</strong></p>\n        <p>"); // "</strong></p><p>"
  OUT.push(G.escapeText(CTX.props.venue)); // "props.venue"
  OUT.push("</p>\n        "); // "</p>"
  if (CTX.props.href) { // "if props.href"
  OUT.push("\n            <a href=\""); // "<a href=\""
  OUT.push(G.escapeText(CTX.props.href)); // "props.href"
  OUT.push("\">RSVP Now</a>\n        "); // "\">RSVP Now</a>"
  } // "endif"
  OUT.push("\n    </caption>\n</figure>\n\n\n"); // "</caption></figure>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library_EventCard_template = "x1819qvg";

window.moduloBuild.modules["xx2a5ave"] = function library1_ContactForm_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n<div class=\"form-container\">\n    <h2>"); // "<div class=\"form-container\"><h2>"
  OUT.push(G.escapeText(CTX.state.title)); // "state.title"
  OUT.push("</h2>\n    "); // "</h2>"
  var ARR0=CTX.script.fields;for (var KEY in ARR0) {CTX. field=ARR0[KEY]; // "for field in script.fields"
  OUT.push("\n        "); // ""
  if (("volunteer,donate,has_message").includes ? ("volunteer,donate,has_message").includes(CTX.field.name) : (CTX.field.name in "volunteer,donate,has_message")) { // "if field.name in \"volunteer,donate,has_message\""
  OUT.push("\n            <div class=\"field-pair  "); // "<div class=\"field-pair"
  if (CTX.field.style) { // "if field.style"
  OUT.push("field-pair--"); // "field-pair--"
  OUT.push(G.escapeText(CTX.field.style)); // "field.style"
  } // "endif"
  OUT.push("\">\n                "); // "\">"
  if (CTX.field.name === G.filters["lower"](CTX.state.title)) { // "if field.name == state.title|lower"
  OUT.push("\n                    <div>\n                        <input\n                            type=\"hidden\"\n                            name=\""); // "<div><input type=\"hidden\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                            value=\"yes_form\"\n                            id=\""); // "\" value=\"yes_form\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                        />\n                    </div>\n                "); // "\" /></div>"
  } else { // "else"
  OUT.push("\n                    <input\n                        [state.bind]\n                        type=\"checkbox\"\n                        name=\""); // "<input [state.bind] type=\"checkbox\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                        id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                    />\n                "); // "\" />"
  } // "endif"
  OUT.push("\n                <div style=\"width: 100%\">\n                    <label for=\""); // "<div style=\"width: 100%\"><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\">\n                        "); // "\">"
  if (CTX.field.name === G.filters["lower"](CTX.state.title)) { // "if field.name == state.title|lower"
  OUT.push("\n                        "); // ""
  } else { // "else"
  OUT.push("\n                            "); // ""
  OUT.push(G.escapeText(CTX.field.label)); // "field.label"
  OUT.push("\n                        "); // ""
  } // "endif"
  OUT.push("\n                    </label>\n                    "); // "</label>"
  if (CTX.field.name === "donate") { // "if field.name == \"donate\""
  OUT.push("\n                        <ul class=\"submenu "); // "<ul class=\"submenu"
  if (CTX.state.donate) { // "if state.donate"
  OUT.push("submenu--visible"); // "submenu--visible"
  } // "endif"
  OUT.push("\">\n                            <li style=\"display:none\"> <!-- Hack to add a label to email / CSV -->\n                                <label>\n                                    Donation Value Entered (If Any):\n                                    <input type=\"checkbox\" name=\""); // "\"><li style=\"display:none\"><!-- Hack to add a label to email / CSV --><label> Donation Value Entered (If Any): <input type=\"checkbox\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\" value=\"\" />\n                                </label>\n                            </li>\n                            "); // "_value\" value=\"\" /></label></li>"
  var ARR3=CTX.script.increments;for (var KEY in ARR3) {CTX. num=ARR3[KEY]; // "for num in script.increments"
  OUT.push("\n                                <li>\n                                    <input\n                                        [state.bind]\n                                        type=\"radio\"\n                                        name=\""); // "<li><input [state.bind] type=\"radio\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\"\n                                        value=\""); // "_value\" value=\""
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                        id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                    />\n                                    <label for=\""); // "\" /><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\"\n                                        @click:=script.setDonation payload=\"#"); // "\" @click:=script.setDonation payload=\"#"
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\">\n                                        DONATE $"); // "\"> DONATE $"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\n                                    </label>\n                                </li>\n                            "); // "</label></li>"
  } // "endfor"
  OUT.push("\n                            <li>\n                                <input\n                                    [state.bind]\n                                    type=\"radio\"\n                                    name=\""); // "<li><input [state.bind] type=\"radio\" name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_value\"\n                                    value=\"other\"\n                                    id=\""); // "_value\" value=\"other\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other\"\n                                />\n                                <label for=\""); // "_other\" /><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other\">\n                                    DONATE $_\n                                    <input\n                                        [state.bind]\n                                        name=\""); // "_other\"> DONATE $_ <input [state.bind] name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_other_value\"\n                                        class=\"other-amount\"\n                                        type=\"text\"\n                                        placeholder=\"Enter amount...\"\n                                        id=\""); // "_other_value\" class=\"other-amount\" type=\"text\" placeholder=\"Enter amount...\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("_other_value\"\n                                    />\n                                </label>\n                            </li>\n                        </ul>\n                    "); // "_other_value\" /></label></li></ul>"
  } // "endif"
  OUT.push("\n                    "); // ""
  if (CTX.field.name === "has_message") { // "if field.name == \"has_message\""
  OUT.push("\n                        <ul class=\"submenu submenu--simple "); // "<ul class=\"submenu submenu--simple"
  if (CTX.state.has_message) { // "if state.has_message"
  OUT.push("submenu--visible"); // "submenu--visible"
  } // "endif"
  OUT.push("\">\n                            <li>\n                                <textarea\n                                    [state.bind]\n                                    name=\"has_message_value\"\n                                    class=\"message-value-text\"\n                                ></textarea>\n                            </li>\n                        </ul>\n                    "); // "\"><li><textarea [state.bind] name=\"has_message_value\" class=\"message-value-text\" ></textarea></li></ul>"
  } // "endif"
  OUT.push("\n                </div>\n            </div>\n        "); // "</div></div>"
  } else { // "else"
  OUT.push("\n            <div class=\"field-pair "); // "<div class=\"field-pair"
  if (CTX.field.style) { // "if field.style"
  OUT.push("field-pair--"); // "field-pair--"
  OUT.push(G.escapeText(CTX.field.style)); // "field.style"
  } // "endif"
  OUT.push("\">\n                <label for=\""); // "\"><label for=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\">\n                    "); // "\">"
  OUT.push(G.escapeText(CTX.field.label)); // "field.label"
  OUT.push("\n                </label>\n                <input\n                    [state.bind]\n                    name=\""); // "</label><input [state.bind] name=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("\"\n                    type=\""); // "\" type=\""
  if (G.filters["type"](G.filters["get"](CTX.state,CTX.field.name)) === "string") { // "if state|get:field.name|type == 'string'"
  OUT.push("text"); // "text"
  } else { // "else"
  OUT.push("checkbox"); // "checkbox"
  } // "endif"
  OUT.push("\"\n                    id=\""); // "\" id=\""
  OUT.push(G.escapeText(CTX.field.name)); // "field.name"
  OUT.push("_"); // "_"
  OUT.push(G.escapeText(CTX.component.id)); // "component.id"
  OUT.push("\"\n                />\n            </div>\n        "); // "\" /></div>"
  } // "endif"
  OUT.push("\n    "); // ""
  } // "endfor"
  OUT.push("\n\n    <div style=\"text-align: center\">\n        <button>"); // "<div style=\"text-align: center\"><button>"
  OUT.push(G.escapeText(G.filters["default"](CTX.state.title,"Submit"))); // "state.title|default:\"Submit\""
  OUT.push("</button>\n    </div>\n</div>\n\n<div class=\"form-modal-wrapper\">\n    "); // "</button></div></div><div class=\"form-modal-wrapper\">"
  if (CTX.state.error) { // "if state.error"
  OUT.push("\n        <div class=\"form-modal-backdrop\"></div>\n        <div class=\"form-modal\">\n            "); // "<div class=\"form-modal-backdrop\"></div><div class=\"form-modal\">"
  if (CTX.state.is_redirecting_to_actblue) { // "if state.is_redirecting_to_actblue"
  OUT.push("\n                <h2>Redirecting to Act Blue</h2>\n                <p>Please re-enter details on our secure Act Blue donation page!<p>\n            "); // "<h2>Redirecting to Act Blue</h2><p>Please re-enter details on our secure Act Blue donation page!<p>"
  } else { // "else"
  OUT.push("\n                <h2>Error</h2>\n                <p>There was an error when submitting your form. If the problem\n                persists, please reach out to our email to get in touch:<br />\n                <strong>jovankaforsenate@gmail.com</strong>\n                </p>\n            "); // "<h2>Error</h2><p>There was an error when submitting your form. If the problem persists, please reach out to our email to get in touch:<br /><strong>jovankaforsenate@gmail.com</strong></p>"
  } // "endif"
  OUT.push("\n            <a class=\"form-modal-button\" href=\"?try-again=true\">Try again</a>\n            <a href=\"/\">Back to home</a>\n        </div>\n    "); // "<a class=\"form-modal-button\" href=\"?try-again=true\">Try again</a><a href=\"/\">Back to home</a></div>"
  } // "endif"
  OUT.push("\n    "); // ""
  if (CTX.state.success) { // "if state.success"
  OUT.push("\n        <div class=\"form-modal-backdrop\"></div>\n        <div class=\"form-modal\">\n            <h2>\n                "); // "<div class=\"form-modal-backdrop\"></div><div class=\"form-modal\"><h2>"
  if (CTX.state.is_redirecting_to_actblue) { // "if state.is_redirecting_to_actblue"
  OUT.push("\n                Redirecting to Act Blue\n                "); // "Redirecting to Act Blue"
  } else { // "else"
  OUT.push("\n                Form Submitted\n                "); // "Form Submitted"
  } // "endif"
  OUT.push("\n            </h2>\n            <h3>Thank you!</h3>\n            <a class=\"form-modal-button\" href=\"/\">Back to home</a>\n        </div>\n    "); // "</h2><h3>Thank you!</h3><a class=\"form-modal-button\" href=\"/\">Back to home</a></div>"
  } // "endif"
  OUT.push("\n<div>\n\n\n"); // "<div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_ContactForm_template = "xx2a5ave";

window.moduloBuild.modules["x1ghaci1"] = function library1_ActionNetworkForm_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n        <div class=\"form-container\">\n            <h2>Volunteer</h2>\n            <div id=\"can-form-area-jovanka-beckles-for-state-senate\" style=\"width: 100%\">\n                <!-- this div is the target for our HTML insertion -->\n            </div>\n        </div>\n    "); // "<div class=\"form-container\"><h2>Volunteer</h2><div id=\"can-form-area-jovanka-beckles-for-state-senate\" style=\"width: 100%\"><!-- this div is the target for our HTML insertion --></div></div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_ActionNetworkForm_template = "x1ghaci1";

window.moduloBuild.modules["x10hqn0q"] = function library1_DonateButtons_staticdata (modulo) {
return [22,50,100,250,500,2500,5500];
};
window.moduloBuild.nameToHash.library1_DonateButtons_staticdata = "x10hqn0q";

window.moduloBuild.modules["xxhn56ob"] = function library1_DonateButtons_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("<ul class=\"submenu\">\n    "); // "<ul class=\"submenu\">"
  var ARR0=CTX.staticdata;for (var KEY in ARR0) {CTX. num=ARR0[KEY]; // "for num in staticdata"
  OUT.push("\n        <li>\n            <a href=\"https://secure.actblue.com/donate/jovankaforcastatesenate?refcode=donate&amount="); // "<li><a href=\"https://secure.actblue.com/donate/jovankaforcastatesenate?refcode=donate&amount="
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\">\n                DONATE $"); // "\"> DONATE $"
  OUT.push(G.escapeText(CTX.num)); // "num"
  OUT.push("\n            </a>\n        </li>\n    "); // "</a></li>"
  } // "endfor"
  OUT.push("\n    <li>\n        <a href=\"https://secure.actblue.com/donate/jovankaforcastatesenate?refcode=donate\">\n            OTHER AMOUNT...\n        </a>\n    </li>\n</ul>\n\n\n<p>\n  Secured by\n  <img \n  alt=\"ActBlue\"\n  height=\"20px\"\n  src=\"https://secure.actblue.com/assets/layout/actblue-511088c1dd12a3bab3ea3a86a243f41939d1ab0bca208367a9635ee494ddd7eb.png\">\n</p>\n"); // "<li><a href=\"https://secure.actblue.com/donate/jovankaforcastatesenate?refcode=donate\"> OTHER AMOUNT... </a></li></ul><p> Secured by <img alt=\"ActBlue\" height=\"20px\" src=\"https://secure.actblue.com/assets/layout/actblue-511088c1dd12a3bab3ea3a86a243f41939d1ab0bca208367a9635ee494ddd7eb.png\"></p>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library1_DonateButtons_template = "xxhn56ob";

window.moduloBuild.modules["x1d8rgvc"] = function library2_MobilizeAPI_template (modulo) {
return function (CTX, G) { var OUT=[];
  OUT.push("\n        <div style=\"display: flex; width: 100vw; flex-wrap: wrap\">\n            "); // "<div style=\"display: flex; width: 100vw; flex-wrap: wrap\">"
  var ARR0=CTX.script.events;for (var KEY in ARR0) {CTX. event=ARR0[KEY]; // "for event in script.events"
  OUT.push("\n                <x-eventcard image=\""); // "<x-eventcard image=\""
  OUT.push(G.escapeText(CTX.event.featured_image_url)); // "event.featured_image_url"
  OUT.push("\" caption=\""); // "\" caption=\""
  OUT.push(G.escapeText(CTX.event.title)); // "event.title"
  OUT.push("\" venue=\""); // "\" venue=\""
  OUT.push(G.escapeText(CTX.event.location.venue)); // "event.location.venue"
  OUT.push("\" locality=\""); // "\" locality=\""
  OUT.push(G.escapeText(CTX.event.location.locality)); // "event.location.locality"
  OUT.push("\"></x-eventcard>\n            "); // "\"></x-eventcard>"
  } // "endfor"
  OUT.push("\n            <!--href=\""); // "<!--href=\""
  OUT.push(G.escapeText(CTX.event.browser_url)); // "event.browser_url"
  OUT.push("\"-->\n        </div>\n    "); // "\"--></div>"

return OUT.join(""); };
};
window.moduloBuild.nameToHash.library2_MobilizeAPI_template = "x1d8rgvc";

window.moduloBuild.modules["xx9s558f"] = function library2_MobilizeAPI_staticdata (modulo) {
return {"count":13,"next":null,"previous":null,"data":[{"tags":[],"created_date":1683331220,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3917330,"start_date":1684000800,"is_full":false,"end_date":1684005300,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/562724/","address_visibility":"PUBLIC","id":562724,"location":{"venue":"John F Kennedy Park","address_lines":["3911 Cutting Blvd",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9258362,"longitude":-122.3316494},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Supporters, Allies, Activists, and Friends!\n\nWe are beyond thrilled to announce that Jovanka Beckles, AC Transit Board Director and two-time Richmond City Council Member is kicking off her campaign for State Senate in California's District 7, covering Richmond, Berkeley, Oakland and more.\n\nWe'll be continuing her mission for fair wages, worker power, taxes on the rich, reproductive rights, free early childcare, free healthcare, a Green New Deal, and housing for us, not big landlords!\n\nFor a people led campaign like ours, we need to start early, start strong, and show the strength and size of the movement she's built over a career of courageous stances!\n\nThat's why we're meeting at 11AM at JFK Park in Richmond to hear from Jovanka and some amazing speakers, and let everyone know how they can be a part of bringing change to this district, and California at large. Come enjoy some food and drinks with us, then stick around after the speakers and join us for our first volunteer opportunity!\n\nMeet us at John F. Kennedy Park, Richmond; park in the lot at the intersection of Cutting Blvd. and S. 39th St., and we'll be right next to it in the grass, and then at noon, stick around and join us in leafleting the surrounding neighborhood! \n\nWe'll hear from: Pamela Price, Alameda County District Attorney; Eduardo Martinez, Richmond Mayor; BK Williams of Richmond Progressive Alliance; Nathaniel Arnold of ATU 192; and Saundra Simon, Mental Health Community Support Worker, Contra Costa County.\n\nReach out to Co-Campaign Manager Otto Pippenger at 415 971-9559 by call or text anytime with any questions or if you have any diet or transportation needs.","accessibility_notes":"It's in a park, with both bathrooms and parking nearby, wheelchair accessible other than some slight rolling ground, contact staff with any accomodation questions or requests","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Campaign%20Kickoff3%20%281200%20%C3%97%20630%20px%29_20230509045425734251.jpg","modified_date":1684094440,"accessibility_status":"NOT_SURE","event_type":"RALLY","virtual_action_url":null,"title":"Jovanka Beckles for State Senate Kick-Off; Sat May 13th at JFK Park"},{"tags":[],"created_date":1684460418,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3925448,"start_date":1684692000,"is_full":false,"end_date":1684702800,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564444/","address_visibility":"PUBLIC","id":564444,"location":{"venue":"Washington Park","address_lines":["740 Central Ave","Northeast area of Park"],"locality":"Alameda","region":"CA","country":"US","postal_code":"94501","location":{"latitude":37.7708806,"longitude":-122.2736102},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"After an amazing kickoff, we need to keep the momentum going; so we'll be meeting Sunday May 21st at 11AM in Alameda's Washington Park at 740 Central Ave, on Central and 8th Street for a literature drop!\nIf you haven't been to one of these before, we'll hear from Jovanka, have some coffee and pastries, then head out to leaflet information to nearby voters' doors!\nThe event will run until about two, with transportation help available upon request!\nThe sooner we can get the word out about Jovanka's historical State Senate race in  every city in our district, the better- so please join us in spreading the word!\nCan we count on you to join us?","accessibility_notes":"It's a large, mostly flat public park. Restrooms may or may not be open.","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/May%2021%20Lit%20DropB_20230519014000977051.png","modified_date":1684789284,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Alameda with Jovanka Beckles, Washington Park at 11, Sunday May 21st!"},{"tags":[],"created_date":1684899064,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3927635,"start_date":1685296800,"is_full":false,"end_date":1685307600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564948/","address_visibility":"PUBLIC","id":564948,"location":{"venue":"","address_lines":["2151 Martin Luther King Jr Way",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94704","location":{"latitude":37.8692945,"longitude":-122.2718176},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello all!\nAfter a great kickoff, and a week of continuing endorsements from great groups like Our Revolution East Bay, we are proud to be continuing as the only campaign in this race with on the ground voter outreach!\nWhile Jovanka is in LA to fight for progressive causes like Medicare for All, a Green New Deal, Free Public Transit, and more at the state democratic convention, we're going to keep the fight going, and spread the word in Berkeley!\nJoin us for coffee, company, and a little leafletting Sunday May 28th at Berkeley's Martin Luther King Jr. Park, at 2151 Martin Luther King Jr. Way at 11AM!\nNo experience needed, all training and materials provided! Contact us for any help with transportation, dietary restrictions, or other questions!\nSee you soon!","accessibility_notes":"It's a park- volunteering will mean walking/some stairs, but feel free to come just to the rally, have some coffee, and say hi even if unable to volunteer with us!","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/May%2028%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230524033046732863.png","modified_date":1685394026,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Berkeley for Jovanka, Sunday May 28th, MLK Jr. Park at 11AM!"},{"tags":[],"created_date":1684901314,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3927641,"start_date":1686438000,"is_full":false,"end_date":1686448800,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564951/","address_visibility":"PUBLIC","id":564951,"location":{"venue":"","address_lines":["1834 University Ave",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94703","location":{"latitude":37.8712708,"longitude":-122.2736954},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, Supporters, and Allies!\n\nAs Jovanka Beckles' campaign for State Senate in California's D7 begins in earnest, we're thrilled to announce that our first house party to meet the candidate, hear from her, and learn about how to help is being held in Berkeley Saturday June 10th!\nPaola Laverde, former Chair of the Berkeley Rent Board, and Negeene Mosaed, clinic owner and healthcare provider will be hosting Jovanka and guests for an evening of conversation, drinks, and food at 1834 University Ave, in Berkeley, from 4-7PM!\nWhether you're a longtime supporter eager to hear about this race, someone with ties to a particular issue or community who wants to hear from the candidate directly, or a new supporter- or even undecided voter- please join us for wine, chocolate, and snacks while you speak with, and hear from the woman herself!\nFeel free to reach out in advance with any questions, or requests in advance- we're excited to see you!\nYou can find out more, and reach out to us herehttps://jovanka4casenate.com/\nOr, if you can't make it, please consider giving directly here: https://secure.actblue.com/donate/jovankaforcastatesenate\nso we can raise funds for our junior staff, materials, and other expenses as a corporate-free, all grassroots effort!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/House%20Party1_20230524040808624741.png","modified_date":1686535540,"accessibility_status":"NOT_SURE","event_type":"HOUSE_PARTY","virtual_action_url":null,"title":"House Party for Jovanka Beckles Saturday June 10th in Berkeley!"},{"tags":[],"created_date":1685591504,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3933159,"start_date":1685901600,"is_full":false,"end_date":1685912400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/565970/","address_visibility":"PUBLIC","id":565970,"location":{"venue":"Athol Plaza","address_lines":["1750 Lakeshore Ave",""],"locality":"Oakland","region":"CA","country":"US","postal_code":"94606","location":{"latitude":37.8000275,"longitude":-122.2543797},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters!\nJovanka is back from the California Democratic Convention, and we're continuing our momentum as the only campaign in this race out reaching voters with a literature drop in Oakland, Sunday June 4th at 11AM!\nCome hear from Jovanka, take a picture with us, have some coffee or pastries, then join us as we spread the word!\nNo experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials!\nWe'll be meeting at Athol Plaza, at 1750 Lakeshore Ave, across the street from Lake Merritt, and right next to both parking and Lake Merritt Bart!\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs!\nThanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/June%204%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230601035129051600.png","modified_date":1685999101,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop for Jovanka in Oakland- 11AM at Athol Plaza!"},{"tags":[{"id":87,"name":"LGBTQ+"}],"created_date":1685594147,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3933163,"start_date":1685912400,"is_full":false,"end_date":1685919600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/565974/","address_visibility":"PUBLIC","id":565974,"location":{"venue":"","address_lines":["Civic Center Plaza & Macdonald Avenue",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9351986,"longitude":-122.3437528},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters!\nJovanka will be appearing at Richmond Rainbow Pride, as the only gay, black woman running for California State Senate, District 7!\nJoin us to talk with voters, sign people up, pass out information, and create visibility for our grassroots campaign to bring to change to D7 and California at large!\nWe'll be at Richmond Rainbow Pride https://www.richmondrainbowpride.org/ with Jovanka from 2-4PM Sunday June 4th, at the corners of Civic Center Plaza and Macdonald Ave in Richmond!\nNo training needed, sign up below or reach out to Nelsy Batista atcompassionate510@gmail.com with any questions or transportation needs, sign up for contact phone number.\nSee you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Rainbow2_20230603013725745629.jpg","modified_date":1686006340,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka at Richmond Rainbow Pride Sunday June 4th 2-4"},{"tags":[],"created_date":1686251346,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3939908,"start_date":1686506400,"is_full":false,"end_date":1686517200,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/567154/","address_visibility":"PUBLIC","id":567154,"location":{"venue":"Unity Park","address_lines":["1605 Ohio Ave",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.931138,"longitude":-122.354169},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters! As the only campaign in this race with a volunteer and voter contact presence going, it's key that we show voters, endorsers, and organizations that our grassroots effort is out there to win it!\n\nSo, join us this Sunday 6/11/23 at 11 AM at Richmond's Unity Park on 1605 Ohio Avenue to hear from Jovanka, meet the other volunteers, take a picture with us, have some coffee or pastries, then join us as we spread the word! No experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials! We'll be meeting at Unity Park, on 1605 Ohio Ave!\n\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs! Thanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!","accessibility_notes":"It's an open park, but volunteering will entail stairs most likely or hills, but please do feel free to join us just for the rally portion! Lots of parking and restrooms nearby the park.","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/June%2011%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230608190709714893.png","modified_date":1686603705,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Richmond With Jovanka, Sunday June 11th!"},{"tags":[],"created_date":1686852407,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3943597,"start_date":1687019400,"is_full":false,"end_date":1687028400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/568182/","address_visibility":"PUBLIC","id":568182,"location":{"venue":"","address_lines":["960 S 47th St",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9184776,"longitude":-122.3267835},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello, to all Supporters, Activists and Allies, happy Juneteenth!\nJovanka will be appearing at Richmond Pride's Juneteenth parade this Saturday June 17th as AC Transit Director!\nWhile it is important to keep her role as candidate separate from this position, she needs supporters to join her in the parade, and to have a presence outside of it to distribute literature for State Senate to Richmond voters.\nSo, whether you are able to join her in the parade, or help reach voters alongside it, if you'd like to attend Richmond's Juneteenth parade and festivities for a few hours, and help support Jovanka and spend some time with the candidate in an small group, we'd love to  have you join us!\nMeet Jovanka at 9:45AM at Booker T. Anderson Rec Center at 960 South 47th Street- Jovanka will be provided with attendee's phone numbers if you have any trouble locating her!\nThe event will run until noon, and we will need a driver for the parade minibus, two volunteers to hold her AC Transit banner, and at least two volunteers to separately pass out in formation, signs, and take sign ups, the more the merrier though!\n Feel free to contact Otto with questions at 415 971-9559, but if you'd like to celebrate Pride while accompanying Jovanka, and help make a difference, please sign up now!\nSee you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Juneteenth_20230615182010296583.png","modified_date":1687114871,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka at Richmond Juneteenth, Saturday June 17th!"},{"tags":[{"id":90,"name":"Black community"}],"created_date":1686853894,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3943609,"start_date":1687114800,"is_full":false,"end_date":1687125600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/568191/","address_visibility":"PUBLIC","id":568191,"location":{"venue":"Outside Berkeley Juneteenth","address_lines":["3271 Adeline St",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94703","location":{"latitude":37.8491085,"longitude":-122.2706614},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Everyone and Happy Juneteenth!\nIn addition to the Richmond Parade the day before, Jovanka will also be appearing at Berkeley's Juneteenth festivities, Sunday June 18th!\nJovanka and a few volunteers will be visiting, enjoying the event, and meeting voters and local groups, and we'd love to have you join us!\nCompared to our lit drop events, this will be a more casual and intimate experience, meeting people with Jovanka and providing visibility!\nHowever, we do need some of our super volunteers to accompany her, to pass out literature and signs, and to help get anyone interested in learning more, helping out, or donating to sign up!\nSo if you'd like to attend Berkeley's celebration while helping Jovanka spread her message of justice, equity, reparations, and more, please join us!\nWe'll be meeting at noon just outside the grounds of festival's stretch of blocks, at 3271 Adeline Street!\nContact Otto with any questions at otto.pippenger@gmail.com, or 415 971-9559 anytime! If you want to attend in Oakland, Otto will be at Lake Merritt the day before (Saturday the 17th) at Lake Merritt starting at noon as well, contact directly if so!\nThanks, and see you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Berkeley%20JuneteenthA_20230615182956484355.png","modified_date":1687212026,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka for Berkeley Juneteenth, Sunday June 18th !"},{"tags":[{"id":87,"name":"LGBTQ+"}],"created_date":1687647637,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3951964,"start_date":1687708800,"is_full":false,"end_date":1687723200,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/569311/","address_visibility":"PUBLIC","id":569311,"location":{"venue":"Embarcadero Bart","address_lines":["298 Market St",""],"locality":"San Francisco","region":"CA","country":"US","postal_code":"94105","location":{"latitude":37.7929192,"longitude":-122.3968612},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Supporters, and Activists!\nHappy Pride Month! While this is a time of joy and celebration, we're also living through a time of legislative and media attack LGBTQ community, especially against our black, brown, and trans members.\nIt's all the more important than ever to show up in both joy and in power, which is why Jovanka will be marching in SF Pride, the city of Harvey Milk and so much of our shared history!\nAs a longtime youth counselor and Queer, Black activists, we will be marching in support of trans lives, and for justice for Banko Brown with the Youth Women's Freedom Center's parade contingent!\nJoin us at 9AM tomorrow, Sunday the 25th outside SF's Embarcadero Bart Station. If you want to make your own sign supporting justice for Banko Brown or in support of queer and trans black and brown lives, please do so, or we can provide one!\nContact Otto with with any questions or trouble locating us at 415 971-9559. \nWe will meet at 9AM outside the station, join our group at 10, then march from 10:30-12:30 down to SF's City Hall, finishing by 1pm.\nThank you for everything, Happy Pride, and see you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20SF%20Pride_20230624230025446438.png","modified_date":1687809665,"accessibility_status":"NOT_SURE","event_type":"SOLIDARITY_EVENT","virtual_action_url":null,"title":"Join Jovanka for SF Pride Parade Sunday June 25th!"},{"tags":[],"created_date":1688433025,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3956684,"start_date":1688493600,"is_full":false,"end_date":1688502600,"instructions":null},{"id":3956685,"start_date":1688504400,"is_full":false,"end_date":1688513400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570249/","address_visibility":"PUBLIC","id":570249,"location":{"venue":"","address_lines":["Moeser Lane & Richmond Street",""],"locality":"El Cerrito","region":"CA","country":"US","postal_code":"94530","location":{"latitude":37.9131996,"longitude":-122.3043046},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello all!\nTomorrow, Tuesday the 4th of July, Jovanka and team will be coming to the City of El Cerrito 4th of July Festival, to walk in the parade and speak with voters at the festival afterwards about her corporate-free campaign for equity, reform, and justice!\nThe parade begins at 10am, after which and concurrently, we'll be out leafleting, speaking to voters, and of course enjoying the festival!\nMeet us at 11Am at the corners of Moeser Lane and Richmond Street in El Cerrito, or for the the second half, 2-4:30 PM at the same corner!\nWe'll be there from around 10-5pm, but feel free to join us for as little or as much as you can spare!\nContact Otto with any questions or help finding us directly at 415 971-9559!\nThanks, see you soon- and have a great 4th of July!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%204th%20El%20Cerito_20230704024028553910.jpg","modified_date":1688601904,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"El Cerrito 4th of July Parade with Jovanka! 7/3/23"},{"tags":[],"created_date":1688435602,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3956688,"start_date":1688839200,"is_full":false,"end_date":1688850000,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570252/","address_visibility":"PUBLIC","id":570252,"location":{"venue":"Cedar Rose Park","address_lines":["1300 Rose St",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94702","location":{"latitude":37.8766229,"longitude":-122.2887371},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Activists, Friends, and Supporters!\nWe're back to lit dropping after taking the last two weekends off for Pride, and the 4th of July runup!\nIn that time, we've racked up some amazing new endorsers, including Dean Preston and Teamsters Joint Council 7, and raised more than 20k in June!\nNow, it's time for us to hit the ground running, and greet the summer with full force to reach voters at their doors!\nThat's why the incredible progressive activists and organizers of Our Revolution East Bay https://www.ourrevolutioneastbay.org/ will be joining us in our first lit drop of July, Saturday July 8th, from Cedar Rose Park in Berkeley at 11AM!\nWe'll be meeting at 1300 Rose St in Berkeley- very close to North Berkeley bart- at 11AM, in the picnic area near the playground!\nWe'll hear from Jovanka, have some coffee and pastries, take a group photo, then go out to leaflet voter's doors until 2PM!\nBerkeley is showing more early engagement with this race than any other city, so we'll be reaching progressive voters in a walkable, high turnout area!\nNo experience needed, and let us know if you need any help with transportation, mobility considerations, or dietary requests! Sign up here, or call/text Otto anytime at 415 971-9559 with questions or to RSVP!\nThanks for everything, and see you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/July%208%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230704015115915189.png","modified_date":1688742552,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Berkeley with Jovanka & OREB Sat 7/8/23!"},{"tags":[],"created_date":1688689900,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3959008,"start_date":1691544600,"is_full":false,"end_date":1691550000,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570568/","address_visibility":"PUBLIC","id":570568,"location":{"venue":"","address_lines":["1636 Bonita Ave",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94709","location":{"latitude":37.8765505,"longitude":-122.2726123},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends and Supporters!\nAs Jovanka's State Senate race heads into the heart of summer, we'll be gathering in Berkeley on the evening of Tuesday August 8th to meet and hear from Jovanka about the race, and her corporate-free platform, while answering questions, and enjoying nibbles, deserts, and drinks a plenty!\nJoin our friend and host, Elana Auerbach in her garden, and meet Jovanka Beckles https://jovanka4casenate.com/ in person if you haven't already!\nWe'll be in the garden of 1636 Bonita Avenue in Berkeley from 6:30-8:00 Tuesday August 8th!\nRSVP below, or feel free to reach out to Otto at 415 971-9559 to RSVP or with questions, if you have any dietary or accessibility needs, just let us know!\nThanks again and see you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Elena%20Party2_20230707010222635368.png","modified_date":1688691791,"accessibility_status":"NOT_SURE","event_type":"HOUSE_PARTY","virtual_action_url":null,"title":"House Party for Jovanka with Elana Auerbach in Berkeley 8/8/23"}],"metadata":{"url_name":"public_organization_events","build_commit":"543e310335de4bdde21f67ca8738f611c6a70aca","page_title":null}};
};
window.moduloBuild.nameToHash.library2_MobilizeAPI_staticdata = "xx9s558f";

window.moduloBuild.definitions = { 
modulo: {"Parent":null,"DefName":null,"Type":"Modulo","ChildPrefix":"","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"defaultDef":{"DefTarget":null,"DefinedAs":null,"DefName":null},"src":"/static/js/Modulo.js","Name":"modulo","DefinitionName":"modulo","Source":"http://127.0.0.1:6627/static/libraries/","ChildrenNames":["configuration","library","library1","library2"]}, 

 

 

 

 

 

 

 

configuration: {"Parent":"modulo","DefName":null,"Type":"Configuration","DefBuilders":["Content|Code","DefinitionName|MainRequire"],"Name":"configuration"}, 

library: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library","DefinitionName":"library","Source":"http://127.0.0.1:6627/static/libraries/layout.html","ChildrenNames":["library_Page","library_NavBar","library_EndorsementsGallery","library_MobileNavBar","library_Banner","library_Gallery","library_HeroInset","library_AllBanners","library_EventCard"]}, 

library1: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library1","DefinitionName":"library1","Source":"http://127.0.0.1:6627/static/libraries/forms.html","ChildrenNames":["library1_ContactForm","library1_ActionNetworkForm","library1_DonateButtons"]}, 

library2: {"Parent":"modulo","DefName":null,"Type":"Library","Contains":"coreDefs","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"namespace":"x","Name":"library2","DefinitionName":"library2","Source":"http://127.0.0.1:6627/static/libraries/api.html","ChildrenNames":["library2_MobilizeAPI"]}, 

library_Page: {"Parent":"library","DefName":null,"mode":"vanish-into-document","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Page","Name":"Page","DefinitionName":"library_Page","ChildrenNames":["library_Page_props","library_Page_template_footer","library_Page_template","library_Page_staticdata","library_Page_script"],"namespace":"x","TagName":"x-page"}, 

library_NavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"NavBar","Name":"NavBar","DefinitionName":"library_NavBar","ChildrenNames":["library_NavBar_props","library_NavBar_template","library_NavBar_state","library_NavBar_staticdata","library_NavBar_script","library_NavBar_style"],"namespace":"x","TagName":"x-navbar"}, 

library_EndorsementsGallery: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"EndorsementsGallery","Name":"EndorsementsGallery","DefinitionName":"library_EndorsementsGallery","ChildrenNames":["library_EndorsementsGallery_props","library_EndorsementsGallery_template","library_EndorsementsGallery_staticdata","library_EndorsementsGallery_style"],"namespace":"x","TagName":"x-endorsementsgallery"}, 

library_MobileNavBar: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"MobileNavBar","Name":"MobileNavBar","DefinitionName":"library_MobileNavBar","ChildrenNames":["library_MobileNavBar_props","library_MobileNavBar_template","library_MobileNavBar_state","library_MobileNavBar_staticdata","library_MobileNavBar_script","library_MobileNavBar_style"],"namespace":"x","TagName":"x-mobilenavbar"}, 

library_Banner: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Banner","Name":"Banner","DefinitionName":"library_Banner","ChildrenNames":["library_Banner_props","library_Banner_template","library_Banner_style","library_Banner_ebState","library_Banner_script"],"namespace":"x","TagName":"x-banner"}, 

library_Gallery: {"Parent":"library","DefName":null,"mode":"vanish","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"Gallery","Name":"Gallery","DefinitionName":"library_Gallery","ChildrenNames":["library_Gallery_template","library_Gallery_style"],"namespace":"x","TagName":"x-gallery"}, 

library_HeroInset: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"HeroInset","Name":"HeroInset","DefinitionName":"library_HeroInset","ChildrenNames":["library_HeroInset_template","library_HeroInset_style"],"namespace":"x","TagName":"x-heroinset"}, 

library_AllBanners: {"Parent":"library","DefName":null,"mode":"vanish","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"AllBanners","Name":"AllBanners","DefinitionName":"library_AllBanners","ChildrenNames":["library_AllBanners_template"],"namespace":"x","TagName":"x-allbanners"}, 

library_EventCard: {"Parent":"library","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"EventCard","Name":"EventCard","DefinitionName":"library_EventCard","ChildrenNames":["library_EventCard_props","library_EventCard_template","library_EventCard_style"],"namespace":"x","TagName":"x-eventcard"}, 

library_Page_props: {"Parent":"library_Page","DefName":null,"Content":"","Type":"Props","title":"","toptitle":"","bottomtitle":"","markdown":"","navselected":"","Name":"props","DefinitionName":"library_Page_props"}, 

library_Page_template_footer: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template_footer","DefinitionName":"library_Page_template_footer","Source":"http://127.0.0.1:6627/static/libraries/layout/Page-footer.html","Hash":"Txx9q80jq"}, 

library_Page_template: {"Parent":"library_Page","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Page_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Page.html","Hash":"Txxeagkjg"}, 

library_Page_staticdata: {"Parent":"library_Page","DefName":null,"Content":"{\n\n    navigation: [\n        /*\n        {\n            title: \"Results\",\n            file: \"results/\",\n        },\n        */\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        /*\n        {\n            title: \"Community\",\n            file: \"community/\",\n        },\n        */\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Platform\",\n            file: \"platform/\",\n        },\n        */\n    ],\n\n    linkNav: [\n        //{\n        //    title: \"Contact us...\",\n        //    href: \"/contact/\",\n        //},\n        {\n            href: '/find-my-district/',\n            title: 'Find my district...',\n        },\n        {\n            href: '/contact/endorse.html',\n            title: 'Endorse Jovanka',\n            //skipNav: true,\n        },\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_Page_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_Page_script: {"Parent":"library_Page","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_Page_script","Directives":[]}, 

library_NavBar_props: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_NavBar_props"}, 

library_NavBar_template: {"Parent":"library_NavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_NavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.html","Hash":"Txxbd9csb"}, 

library_NavBar_state: {"Parent":"library_NavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":false,"attop":true,"Name":"state","DefinitionName":"library_NavBar_state"}, 

library_NavBar_staticdata: {"Parent":"library_NavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*\n        {\n            title: \"Results\",\n            file: \"results/\",\n        },\n        */\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        /*\n        {\n            title: \"Community\",\n            file: \"community/\",\n        },\n        */\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Platform\",\n            file: \"platform/\",\n        },\n        */\n    ],\n\n    linkNav: [\n        //{\n        //    title: \"Contact us...\",\n        //    href: \"/contact/\",\n        //},\n        {\n            href: '/find-my-district/',\n            title: 'Find my district...',\n        },\n        {\n            href: '/contact/endorse.html',\n            title: 'Endorse Jovanka',\n            //skipNav: true,\n        },\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_NavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_NavBar_script: {"Parent":"library_NavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_NavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_NavBar_style: {"Parent":"library_NavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_NavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.css"}, 

library_EndorsementsGallery_props: {"Parent":"library_EndorsementsGallery","DefName":null,"Content":"","Type":"Props","button":"","Name":"props","DefinitionName":"library_EndorsementsGallery_props"}, 

library_EndorsementsGallery_template: {"Parent":"library_EndorsementsGallery","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_EndorsementsGallery_template","Source":"http://127.0.0.1:6627/static/libraries/layout/EndorsementsGallery.html","Hash":"Txxq922tb"}, 

library_EndorsementsGallery_staticdata: {"Parent":"library_EndorsementsGallery","DefName":null,"Content":"{\n    gallery: [\n        {\n            //title: \"Mayor of Richmond\",\n            //name: \"Eduardo Martínez\",\n            src: \"2306/eduardomartinez.jpg\",\n        },\n        {\n            src: \"230523/GusNewport4_Square_Endorse.jpg\",\n        },\n        {\n            src: \"230523/DevinMurphy_Facebook_MadeIntoSquare_512px_2.jpg\",\n        },\n        {\n            src: \"230523/Paola_Laverde_Square_512px.jpg\",\n        },\n        {\n            src: \"2307/Teamsters_Square_Endorsement.jpg\",\n        },\n        {\n            src: \"2307/Teamsters_Local856_Square_Endorsement.jpg\",\n        },\n        {\n            src: \"2306/GenovevaCalloway_Endorse__Square.jpg\",\n        },\n        {\n            src: \"2306/CAMERON_SASAI_Square_ENDORSES.jpg\",\n        },\n        {\n            skip: true,\n            src: \"2306/our_revolution_east_bay.jpg\",\n        },\n        {\n            skip: true,\n            src: \"230523/WiP_Square_Endorse_512px.jpg\",\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_EndorsementsGallery_staticdata","Source":"http://127.0.0.1:6627/static/js/endorsements.js","data":{"gallery":[{"src":"2306/eduardomartinez.jpg"},{"src":"230523/GusNewport4_Square_Endorse.jpg"},{"src":"230523/DevinMurphy_Facebook_MadeIntoSquare_512px_2.jpg"},{"src":"230523/Paola_Laverde_Square_512px.jpg"},{"src":"2307/Teamsters_Square_Endorsement.jpg"},{"src":"2307/Teamsters_Local856_Square_Endorsement.jpg"},{"src":"2306/GenovevaCalloway_Endorse__Square.jpg"},{"src":"2306/CAMERON_SASAI_Square_ENDORSES.jpg"},{"skip":true,"src":"2306/our_revolution_east_bay.jpg"},{"skip":true,"src":"230523/WiP_Square_Endorse_512px.jpg"}]}}, 

library_EndorsementsGallery_style: {"Parent":"library_EndorsementsGallery","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_EndorsementsGallery_style","Source":"http://127.0.0.1:6627/static/libraries/layout/EndorsementsGallery.css"}, 

library_MobileNavBar_props: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"Props","selected":"","navigation":"","Name":"props","DefinitionName":"library_MobileNavBar_props"}, 

library_MobileNavBar_template: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_MobileNavBar_template","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.html","Hash":"Tx18qlp5c"}, 

library_MobileNavBar_state: {"Parent":"library_MobileNavBar","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":null,"hide":null,"attop":false,"Name":"state","DefinitionName":"library_MobileNavBar_state"}, 

library_MobileNavBar_staticdata: {"Parent":"library_MobileNavBar","DefName":null,"Content":"{\n\n    navigation: [\n        /*\n        {\n            title: \"Results\",\n            file: \"results/\",\n        },\n        */\n        {\n            title: \"About\",\n            file: \"about/\",\n        },\n        /*\n        {\n            title: \"Community\",\n            file: \"community/\",\n        },\n        */\n        {\n            title: \"Endorsements\",\n            file: \"endorsements/\",\n        },\n        {\n            title: \"Contact\",\n            file: \"contact/\",\n        },\n        /*\n        {\n            title: \"News\",\n            file: \"news/\",\n        },\n        {\n            title: \"Platform\",\n            file: \"platform/\",\n        },\n        */\n    ],\n\n    linkNav: [\n        //{\n        //    title: \"Contact us...\",\n        //    href: \"/contact/\",\n        //},\n        {\n            href: '/find-my-district/',\n            title: 'Find my district...',\n        },\n        {\n            href: '/contact/endorse.html',\n            title: 'Endorse Jovanka',\n            //skipNav: true,\n        },\n    ],\n\n    smallNav: [\n        {\n            href: '/contact/volunteer.html',\n            title: 'Volunteer',\n        },\n        {\n            href: '/contact/donate.html',\n            title: 'Donate',\n        },\n    ],\n}\n","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library_MobileNavBar_staticdata","Source":"http://127.0.0.1:6627/static/js/navigation.js","data":{"navigation":[{"title":"About","file":"about/"},{"title":"Endorsements","file":"endorsements/"},{"title":"Contact","file":"contact/"}],"linkNav":[{"href":"/find-my-district/","title":"Find my district..."},{"href":"/contact/endorse.html","title":"Endorse Jovanka"}],"smallNav":[{"href":"/contact/volunteer.html","title":"Volunteer"},{"href":"/contact/donate.html","title":"Donate"}]}}, 

library_MobileNavBar_script: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_MobileNavBar_script","Source":"http://127.0.0.1:6627/static/libraries/layout/NavBar.js","Directives":["imageMount"]}, 

library_MobileNavBar_style: {"Parent":"library_MobileNavBar","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_MobileNavBar_style","Source":"http://127.0.0.1:6627/static/libraries/layout/MobileNavBar.css"}, 

library_Banner_props: {"Parent":"library_Banner","DefName":null,"Content":"","Type":"Props","cta":"","date":"","expiry":"","text":"","title":"","url":"","Name":"props","DefinitionName":"library_Banner_props"}, 

library_Banner_template: {"Parent":"library_Banner","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Banner_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Banner.html","Hash":"Tx1uhts7l"}, 

library_Banner_style: {"Parent":"library_Banner","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_Banner_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Banner.css"}, 

library_Banner_ebState: {"Parent":"library_Banner","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":"eventBanner","Name":"ebState","shown":false,"DefinitionName":"library_Banner_ebState"}, 

library_Banner_script: {"Parent":"library_Banner","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library_Banner_script","Directives":[]}, 

library_Gallery_template: {"Parent":"library_Gallery","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_Gallery_template","Source":"http://127.0.0.1:6627/static/libraries/layout/Gallery.html","Hash":"Txxs1f8sl"}, 

library_Gallery_style: {"Parent":"library_Gallery","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_Gallery_style","Source":"http://127.0.0.1:6627/static/libraries/layout/Gallery.css"}, 

library_HeroInset_template: {"Parent":"library_HeroInset","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_HeroInset_template","Source":"http://127.0.0.1:6627/static/libraries/layout/HeroInset.html","Hash":"Tx19toonk"}, 

library_HeroInset_style: {"Parent":"library_HeroInset","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_HeroInset_style","Source":"http://127.0.0.1:6627/static/libraries/layout/HeroInset.css"}, 

library_AllBanners_template: {"Parent":"library_AllBanners","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_AllBanners_template","Source":"http://127.0.0.1:6627/static/libraries/layout/AllBanners.html","Hash":"Tx1v9ebiv"}, 

library_EventCard_props: {"Parent":"library_EventCard","DefName":null,"Content":"","Type":"Props","image":"","caption":"","venue":"","locality":"","href":"","Name":"props","DefinitionName":"library_EventCard_props"}, 

library_EventCard_template: {"Parent":"library_EventCard","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library_EventCard_template","Source":"http://127.0.0.1:6627/static/libraries/layout/EventCard.html","Hash":"Tx1819qvg"}, 

library_EventCard_style: {"Parent":"library_EventCard","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library_EventCard_style","Source":"http://127.0.0.1:6627/static/libraries/layout/EventCard.css"}, 

library1_ContactForm: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"ContactForm","Name":"ContactForm","DefinitionName":"library1_ContactForm","ChildrenNames":["library1_ContactForm_props","library1_ContactForm_template","library1_ContactForm_state","library1_ContactForm_script","library1_ContactForm_style"],"namespace":"x","TagName":"x-contactform"}, 

library1_ActionNetworkForm: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"manual","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"ActionNetworkForm","Name":"ActionNetworkForm","DefinitionName":"library1_ActionNetworkForm","ChildrenNames":["library1_ActionNetworkForm_template","library1_ActionNetworkForm_script","library1_ActionNetworkForm_style","library1_ActionNetworkForm_style1"],"namespace":"x","TagName":"x-actionnetworkform"}, 

library1_DonateButtons: {"Parent":"library1","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"DonateButtons","Name":"DonateButtons","DefinitionName":"library1_DonateButtons","ChildrenNames":["library1_DonateButtons_staticdata","library1_DonateButtons_template","library1_DonateButtons_style"],"namespace":"x","TagName":"x-donatebuttons"}, 

library1_ContactForm_props: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"Props","volunteerform":"","donateform":"","endorseform":"","Name":"props","DefinitionName":"library1_ContactForm_props"}, 

library1_ContactForm_template: {"Parent":"library1_ContactForm","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library1_ContactForm_template","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.html","Hash":"Txx2a5ave"}, 

library1_ContactForm_state: {"Parent":"library1_ContactForm","DefName":null,"Content":"","Type":"State","Directives":["bindMount","bindUnmount"],"Store":"contact","title":"","firstname":"","lastname":"","email":"","zip":"","phone":"","has_message_value":"","donate_other_value":"","success":null,"submitted":null,"error":null,"show_final_donation_modal":false,"is_redirecting_to_actblue":false,"has_message":false,"donate":false,"donate_value":0,"volunteer":false,"Name":"state","DefinitionName":"library1_ContactForm_state"}, 

library1_ContactForm_script: {"Parent":"library1_ContactForm","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library1_ContactForm_script","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.js","Directives":[]}, 

library1_ContactForm_style: {"Parent":"library1_ContactForm","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library1_ContactForm_style","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.css"}, 

library1_ActionNetworkForm_template: {"Parent":"library1_ActionNetworkForm","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library1_ActionNetworkForm_template","Hash":"Tx1ghaci1"}, 

library1_ActionNetworkForm_script: {"Parent":"library1_ActionNetworkForm","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library1_ActionNetworkForm_script","Directives":[]}, 

library1_ActionNetworkForm_style: {"Parent":"library1_ActionNetworkForm","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library1_ActionNetworkForm_style","Source":"http://127.0.0.1:6627/static/libraries/forms/ContactForm.css"}, 

library1_ActionNetworkForm_style1: {"Parent":"library1_ActionNetworkForm","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style1","DefinitionName":"library1_ActionNetworkForm_style1"}, 

library1_DonateButtons_staticdata: {"Parent":"library1_DonateButtons","DefName":null,"Content":"\n        [ 22, 50, 100, 250, 500, 2500, 5500 ]\n    ","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library1_DonateButtons_staticdata","data":[22,50,100,250,500,2500,5500]}, 

library1_DonateButtons_template: {"Parent":"library1_DonateButtons","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library1_DonateButtons_template","Source":"http://127.0.0.1:6627/static/libraries/forms/DonateButtons.html","Hash":"Txxhn56ob"}, 

library1_DonateButtons_style: {"Parent":"library1_DonateButtons","DefName":null,"Type":"Style","DefFinalizers":["Content|PrefixCSS"],"Name":"style","DefinitionName":"library1_DonateButtons_style","Source":"http://127.0.0.1:6627/static/libraries/forms/DonateButtons.css"}, 

library2_MobilizeAPI: {"Parent":"library2","DefName":null,"mode":"regular","rerender":"event","engine":"Reconciler","Contains":"cparts","RenderObj":"component","DefLoaders":["DefTarget","DefinedAs","Src","Content"],"DefBuilders":["CustomElement","Code"],"DefFinalizers":["MainRequire"],"Directives":["slotLoad","eventMount","eventUnmount","dataPropMount","dataPropUnmount"],"Type":"Component","name":"MobilizeAPI","Name":"MobilizeAPI","DefinitionName":"library2_MobilizeAPI","ChildrenNames":["library2_MobilizeAPI_template","library2_MobilizeAPI_staticdata","library2_MobilizeAPI_script"],"namespace":"x","TagName":"x-mobilizeapi"}, 

library2_MobilizeAPI_template: {"Parent":"library2_MobilizeAPI","DefName":null,"Type":"Template","DefFinalizers":["TemplatePrebuild"],"Name":"template","DefinitionName":"library2_MobilizeAPI_template","Hash":"Tx1d8rgvc"}, 

library2_MobilizeAPI_staticdata: {"Parent":"library2_MobilizeAPI","DefName":null,"Content":"{\"count\":13,\"next\":null,\"previous\":null,\"data\":[{\"tags\":[],\"created_date\":1683331220,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3917330,\"start_date\":1684000800,\"is_full\":false,\"end_date\":1684005300,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/562724/\",\"address_visibility\":\"PUBLIC\",\"id\":562724,\"location\":{\"venue\":\"John F Kennedy Park\",\"address_lines\":[\"3911 Cutting Blvd\",\"\"],\"locality\":\"Richmond\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94804\",\"location\":{\"latitude\":37.9258362,\"longitude\":-122.3316494},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Supporters, Allies, Activists, and Friends!\\n\\nWe are beyond thrilled to announce that Jovanka Beckles, AC Transit Board Director and two-time Richmond City Council Member is kicking off her campaign for State Senate in California's District 7, covering Richmond, Berkeley, Oakland and more.\\n\\nWe'll be continuing her mission for fair wages, worker power, taxes on the rich, reproductive rights, free early childcare, free healthcare, a Green New Deal, and housing for us, not big landlords!\\n\\nFor a people led campaign like ours, we need to start early, start strong, and show the strength and size of the movement she's built over a career of courageous stances!\\n\\nThat's why we're meeting at 11AM at JFK Park in Richmond to hear from Jovanka and some amazing speakers, and let everyone know how they can be a part of bringing change to this district, and California at large. Come enjoy some food and drinks with us, then stick around after the speakers and join us for our first volunteer opportunity!\\n\\nMeet us at John F. Kennedy Park, Richmond; park in the lot at the intersection of Cutting Blvd. and S. 39th St., and we'll be right next to it in the grass, and then at noon, stick around and join us in leafleting the surrounding neighborhood! \\n\\nWe'll hear from: Pamela Price, Alameda County District Attorney; Eduardo Martinez, Richmond Mayor; BK Williams of Richmond Progressive Alliance; Nathaniel Arnold of ATU 192; and Saundra Simon, Mental Health Community Support Worker, Contra Costa County.\\n\\nReach out to Co-Campaign Manager Otto Pippenger at 415 971-9559 by call or text anytime with any questions or if you have any diet or transportation needs.\",\"accessibility_notes\":\"It's in a park, with both bathrooms and parking nearby, wheelchair accessible other than some slight rolling ground, contact staff with any accomodation questions or requests\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Campaign%20Kickoff3%20%281200%20%C3%97%20630%20px%29_20230509045425734251.jpg\",\"modified_date\":1684094440,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"RALLY\",\"virtual_action_url\":null,\"title\":\"Jovanka Beckles for State Senate Kick-Off; Sat May 13th at JFK Park\"},{\"tags\":[],\"created_date\":1684460418,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3925448,\"start_date\":1684692000,\"is_full\":false,\"end_date\":1684702800,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/564444/\",\"address_visibility\":\"PUBLIC\",\"id\":564444,\"location\":{\"venue\":\"Washington Park\",\"address_lines\":[\"740 Central Ave\",\"Northeast area of Park\"],\"locality\":\"Alameda\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94501\",\"location\":{\"latitude\":37.7708806,\"longitude\":-122.2736102},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"After an amazing kickoff, we need to keep the momentum going; so we'll be meeting Sunday May 21st at 11AM in Alameda's Washington Park at 740 Central Ave, on Central and 8th Street for a literature drop!\\nIf you haven't been to one of these before, we'll hear from Jovanka, have some coffee and pastries, then head out to leaflet information to nearby voters' doors!\\nThe event will run until about two, with transportation help available upon request!\\nThe sooner we can get the word out about Jovanka's historical State Senate race in  every city in our district, the better- so please join us in spreading the word!\\nCan we count on you to join us?\",\"accessibility_notes\":\"It's a large, mostly flat public park. Restrooms may or may not be open.\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/May%2021%20Lit%20DropB_20230519014000977051.png\",\"modified_date\":1684789284,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"LITERATURE_DROP_OFF\",\"virtual_action_url\":null,\"title\":\"Lit Drop Alameda with Jovanka Beckles, Washington Park at 11, Sunday May 21st!\"},{\"tags\":[],\"created_date\":1684899064,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3927635,\"start_date\":1685296800,\"is_full\":false,\"end_date\":1685307600,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/564948/\",\"address_visibility\":\"PUBLIC\",\"id\":564948,\"location\":{\"venue\":\"\",\"address_lines\":[\"2151 Martin Luther King Jr Way\",\"\"],\"locality\":\"Berkeley\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94704\",\"location\":{\"latitude\":37.8692945,\"longitude\":-122.2718176},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello all!\\nAfter a great kickoff, and a week of continuing endorsements from great groups like Our Revolution East Bay, we are proud to be continuing as the only campaign in this race with on the ground voter outreach!\\nWhile Jovanka is in LA to fight for progressive causes like Medicare for All, a Green New Deal, Free Public Transit, and more at the state democratic convention, we're going to keep the fight going, and spread the word in Berkeley!\\nJoin us for coffee, company, and a little leafletting Sunday May 28th at Berkeley's Martin Luther King Jr. Park, at 2151 Martin Luther King Jr. Way at 11AM!\\nNo experience needed, all training and materials provided! Contact us for any help with transportation, dietary restrictions, or other questions!\\nSee you soon!\",\"accessibility_notes\":\"It's a park- volunteering will mean walking/some stairs, but feel free to come just to the rally, have some coffee, and say hi even if unable to volunteer with us!\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/May%2028%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230524033046732863.png\",\"modified_date\":1685394026,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"LITERATURE_DROP_OFF\",\"virtual_action_url\":null,\"title\":\"Lit Drop Berkeley for Jovanka, Sunday May 28th, MLK Jr. Park at 11AM!\"},{\"tags\":[],\"created_date\":1684901314,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3927641,\"start_date\":1686438000,\"is_full\":false,\"end_date\":1686448800,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/564951/\",\"address_visibility\":\"PUBLIC\",\"id\":564951,\"location\":{\"venue\":\"\",\"address_lines\":[\"1834 University Ave\",\"\"],\"locality\":\"Berkeley\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94703\",\"location\":{\"latitude\":37.8712708,\"longitude\":-122.2736954},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends, Activists, Supporters, and Allies!\\n\\nAs Jovanka Beckles' campaign for State Senate in California's D7 begins in earnest, we're thrilled to announce that our first house party to meet the candidate, hear from her, and learn about how to help is being held in Berkeley Saturday June 10th!\\nPaola Laverde, former Chair of the Berkeley Rent Board, and Negeene Mosaed, clinic owner and healthcare provider will be hosting Jovanka and guests for an evening of conversation, drinks, and food at 1834 University Ave, in Berkeley, from 4-7PM!\\nWhether you're a longtime supporter eager to hear about this race, someone with ties to a particular issue or community who wants to hear from the candidate directly, or a new supporter- or even undecided voter- please join us for wine, chocolate, and snacks while you speak with, and hear from the woman herself!\\nFeel free to reach out in advance with any questions, or requests in advance- we're excited to see you!\\nYou can find out more, and reach out to us herehttps://jovanka4casenate.com/\\nOr, if you can't make it, please consider giving directly here: https://secure.actblue.com/donate/jovankaforcastatesenate\\nso we can raise funds for our junior staff, materials, and other expenses as a corporate-free, all grassroots effort!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/House%20Party1_20230524040808624741.png\",\"modified_date\":1686535540,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"HOUSE_PARTY\",\"virtual_action_url\":null,\"title\":\"House Party for Jovanka Beckles Saturday June 10th in Berkeley!\"},{\"tags\":[],\"created_date\":1685591504,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3933159,\"start_date\":1685901600,\"is_full\":false,\"end_date\":1685912400,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/565970/\",\"address_visibility\":\"PUBLIC\",\"id\":565970,\"location\":{\"venue\":\"Athol Plaza\",\"address_lines\":[\"1750 Lakeshore Ave\",\"\"],\"locality\":\"Oakland\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94606\",\"location\":{\"latitude\":37.8000275,\"longitude\":-122.2543797},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends, Activists, and Supporters!\\nJovanka is back from the California Democratic Convention, and we're continuing our momentum as the only campaign in this race out reaching voters with a literature drop in Oakland, Sunday June 4th at 11AM!\\nCome hear from Jovanka, take a picture with us, have some coffee or pastries, then join us as we spread the word!\\nNo experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials!\\nWe'll be meeting at Athol Plaza, at 1750 Lakeshore Ave, across the street from Lake Merritt, and right next to both parking and Lake Merritt Bart!\\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs!\\nThanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/June%204%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230601035129051600.png\",\"modified_date\":1685999101,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"LITERATURE_DROP_OFF\",\"virtual_action_url\":null,\"title\":\"Lit Drop for Jovanka in Oakland- 11AM at Athol Plaza!\"},{\"tags\":[{\"id\":87,\"name\":\"LGBTQ+\"}],\"created_date\":1685594147,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3933163,\"start_date\":1685912400,\"is_full\":false,\"end_date\":1685919600,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/565974/\",\"address_visibility\":\"PUBLIC\",\"id\":565974,\"location\":{\"venue\":\"\",\"address_lines\":[\"Civic Center Plaza & Macdonald Avenue\",\"\"],\"locality\":\"Richmond\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94804\",\"location\":{\"latitude\":37.9351986,\"longitude\":-122.3437528},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends, Activists, and Supporters!\\nJovanka will be appearing at Richmond Rainbow Pride, as the only gay, black woman running for California State Senate, District 7!\\nJoin us to talk with voters, sign people up, pass out information, and create visibility for our grassroots campaign to bring to change to D7 and California at large!\\nWe'll be at Richmond Rainbow Pride https://www.richmondrainbowpride.org/ with Jovanka from 2-4PM Sunday June 4th, at the corners of Civic Center Plaza and Macdonald Ave in Richmond!\\nNo training needed, sign up below or reach out to Nelsy Batista atcompassionate510@gmail.com with any questions or transportation needs, sign up for contact phone number.\\nSee you there!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Rainbow2_20230603013725745629.jpg\",\"modified_date\":1686006340,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"COMMUNITY\",\"virtual_action_url\":null,\"title\":\"Join Jovanka at Richmond Rainbow Pride Sunday June 4th 2-4\"},{\"tags\":[],\"created_date\":1686251346,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3939908,\"start_date\":1686506400,\"is_full\":false,\"end_date\":1686517200,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/567154/\",\"address_visibility\":\"PUBLIC\",\"id\":567154,\"location\":{\"venue\":\"Unity Park\",\"address_lines\":[\"1605 Ohio Ave\",\"\"],\"locality\":\"Richmond\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94804\",\"location\":{\"latitude\":37.931138,\"longitude\":-122.354169},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends, Activists, and Supporters! As the only campaign in this race with a volunteer and voter contact presence going, it's key that we show voters, endorsers, and organizations that our grassroots effort is out there to win it!\\n\\nSo, join us this Sunday 6/11/23 at 11 AM at Richmond's Unity Park on 1605 Ohio Avenue to hear from Jovanka, meet the other volunteers, take a picture with us, have some coffee or pastries, then join us as we spread the word! No experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials! We'll be meeting at Unity Park, on 1605 Ohio Ave!\\n\\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs! Thanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!\",\"accessibility_notes\":\"It's an open park, but volunteering will entail stairs most likely or hills, but please do feel free to join us just for the rally portion! Lots of parking and restrooms nearby the park.\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/June%2011%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230608190709714893.png\",\"modified_date\":1686603705,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"LITERATURE_DROP_OFF\",\"virtual_action_url\":null,\"title\":\"Lit Drop Richmond With Jovanka, Sunday June 11th!\"},{\"tags\":[],\"created_date\":1686852407,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3943597,\"start_date\":1687019400,\"is_full\":false,\"end_date\":1687028400,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/568182/\",\"address_visibility\":\"PUBLIC\",\"id\":568182,\"location\":{\"venue\":\"\",\"address_lines\":[\"960 S 47th St\",\"\"],\"locality\":\"Richmond\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94804\",\"location\":{\"latitude\":37.9184776,\"longitude\":-122.3267835},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello, to all Supporters, Activists and Allies, happy Juneteenth!\\nJovanka will be appearing at Richmond Pride's Juneteenth parade this Saturday June 17th as AC Transit Director!\\nWhile it is important to keep her role as candidate separate from this position, she needs supporters to join her in the parade, and to have a presence outside of it to distribute literature for State Senate to Richmond voters.\\nSo, whether you are able to join her in the parade, or help reach voters alongside it, if you'd like to attend Richmond's Juneteenth parade and festivities for a few hours, and help support Jovanka and spend some time with the candidate in an small group, we'd love to  have you join us!\\nMeet Jovanka at 9:45AM at Booker T. Anderson Rec Center at 960 South 47th Street- Jovanka will be provided with attendee's phone numbers if you have any trouble locating her!\\nThe event will run until noon, and we will need a driver for the parade minibus, two volunteers to hold her AC Transit banner, and at least two volunteers to separately pass out in formation, signs, and take sign ups, the more the merrier though!\\n Feel free to contact Otto with questions at 415 971-9559, but if you'd like to celebrate Pride while accompanying Jovanka, and help make a difference, please sign up now!\\nSee you soon!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Juneteenth_20230615182010296583.png\",\"modified_date\":1687114871,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"COMMUNITY\",\"virtual_action_url\":null,\"title\":\"Join Jovanka at Richmond Juneteenth, Saturday June 17th!\"},{\"tags\":[{\"id\":90,\"name\":\"Black community\"}],\"created_date\":1686853894,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3943609,\"start_date\":1687114800,\"is_full\":false,\"end_date\":1687125600,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/568191/\",\"address_visibility\":\"PUBLIC\",\"id\":568191,\"location\":{\"venue\":\"Outside Berkeley Juneteenth\",\"address_lines\":[\"3271 Adeline St\",\"\"],\"locality\":\"Berkeley\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94703\",\"location\":{\"latitude\":37.8491085,\"longitude\":-122.2706614},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Everyone and Happy Juneteenth!\\nIn addition to the Richmond Parade the day before, Jovanka will also be appearing at Berkeley's Juneteenth festivities, Sunday June 18th!\\nJovanka and a few volunteers will be visiting, enjoying the event, and meeting voters and local groups, and we'd love to have you join us!\\nCompared to our lit drop events, this will be a more casual and intimate experience, meeting people with Jovanka and providing visibility!\\nHowever, we do need some of our super volunteers to accompany her, to pass out literature and signs, and to help get anyone interested in learning more, helping out, or donating to sign up!\\nSo if you'd like to attend Berkeley's celebration while helping Jovanka spread her message of justice, equity, reparations, and more, please join us!\\nWe'll be meeting at noon just outside the grounds of festival's stretch of blocks, at 3271 Adeline Street!\\nContact Otto with any questions at otto.pippenger@gmail.com, or 415 971-9559 anytime! If you want to attend in Oakland, Otto will be at Lake Merritt the day before (Saturday the 17th) at Lake Merritt starting at noon as well, contact directly if so!\\nThanks, and see you there!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Berkeley%20JuneteenthA_20230615182956484355.png\",\"modified_date\":1687212026,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"COMMUNITY\",\"virtual_action_url\":null,\"title\":\"Join Jovanka for Berkeley Juneteenth, Sunday June 18th !\"},{\"tags\":[{\"id\":87,\"name\":\"LGBTQ+\"}],\"created_date\":1687647637,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3951964,\"start_date\":1687708800,\"is_full\":false,\"end_date\":1687723200,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/569311/\",\"address_visibility\":\"PUBLIC\",\"id\":569311,\"location\":{\"venue\":\"Embarcadero Bart\",\"address_lines\":[\"298 Market St\",\"\"],\"locality\":\"San Francisco\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94105\",\"location\":{\"latitude\":37.7929192,\"longitude\":-122.3968612},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends, Supporters, and Activists!\\nHappy Pride Month! While this is a time of joy and celebration, we're also living through a time of legislative and media attack LGBTQ community, especially against our black, brown, and trans members.\\nIt's all the more important than ever to show up in both joy and in power, which is why Jovanka will be marching in SF Pride, the city of Harvey Milk and so much of our shared history!\\nAs a longtime youth counselor and Queer, Black activists, we will be marching in support of trans lives, and for justice for Banko Brown with the Youth Women's Freedom Center's parade contingent!\\nJoin us at 9AM tomorrow, Sunday the 25th outside SF's Embarcadero Bart Station. If you want to make your own sign supporting justice for Banko Brown or in support of queer and trans black and brown lives, please do so, or we can provide one!\\nContact Otto with with any questions or trouble locating us at 415 971-9559. \\nWe will meet at 9AM outside the station, join our group at 10, then march from 10:30-12:30 down to SF's City Hall, finishing by 1pm.\\nThank you for everything, Happy Pride, and see you there!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20SF%20Pride_20230624230025446438.png\",\"modified_date\":1687809665,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"SOLIDARITY_EVENT\",\"virtual_action_url\":null,\"title\":\"Join Jovanka for SF Pride Parade Sunday June 25th!\"},{\"tags\":[],\"created_date\":1688433025,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3956684,\"start_date\":1688493600,\"is_full\":false,\"end_date\":1688502600,\"instructions\":null},{\"id\":3956685,\"start_date\":1688504400,\"is_full\":false,\"end_date\":1688513400,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/570249/\",\"address_visibility\":\"PUBLIC\",\"id\":570249,\"location\":{\"venue\":\"\",\"address_lines\":[\"Moeser Lane & Richmond Street\",\"\"],\"locality\":\"El Cerrito\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94530\",\"location\":{\"latitude\":37.9131996,\"longitude\":-122.3043046},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello all!\\nTomorrow, Tuesday the 4th of July, Jovanka and team will be coming to the City of El Cerrito 4th of July Festival, to walk in the parade and speak with voters at the festival afterwards about her corporate-free campaign for equity, reform, and justice!\\nThe parade begins at 10am, after which and concurrently, we'll be out leafleting, speaking to voters, and of course enjoying the festival!\\nMeet us at 11Am at the corners of Moeser Lane and Richmond Street in El Cerrito, or for the the second half, 2-4:30 PM at the same corner!\\nWe'll be there from around 10-5pm, but feel free to join us for as little or as much as you can spare!\\nContact Otto with any questions or help finding us directly at 415 971-9559!\\nThanks, see you soon- and have a great 4th of July!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%204th%20El%20Cerito_20230704024028553910.jpg\",\"modified_date\":1688601904,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"COMMUNITY\",\"virtual_action_url\":null,\"title\":\"El Cerrito 4th of July Parade with Jovanka! 7/3/23\"},{\"tags\":[],\"created_date\":1688435602,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3956688,\"start_date\":1688839200,\"is_full\":false,\"end_date\":1688850000,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/570252/\",\"address_visibility\":\"PUBLIC\",\"id\":570252,\"location\":{\"venue\":\"Cedar Rose Park\",\"address_lines\":[\"1300 Rose St\",\"\"],\"locality\":\"Berkeley\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94702\",\"location\":{\"latitude\":37.8766229,\"longitude\":-122.2887371},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Activists, Friends, and Supporters!\\nWe're back to lit dropping after taking the last two weekends off for Pride, and the 4th of July runup!\\nIn that time, we've racked up some amazing new endorsers, including Dean Preston and Teamsters Joint Council 7, and raised more than 20k in June!\\nNow, it's time for us to hit the ground running, and greet the summer with full force to reach voters at their doors!\\nThat's why the incredible progressive activists and organizers of Our Revolution East Bay https://www.ourrevolutioneastbay.org/ will be joining us in our first lit drop of July, Saturday July 8th, from Cedar Rose Park in Berkeley at 11AM!\\nWe'll be meeting at 1300 Rose St in Berkeley- very close to North Berkeley bart- at 11AM, in the picnic area near the playground!\\nWe'll hear from Jovanka, have some coffee and pastries, take a group photo, then go out to leaflet voter's doors until 2PM!\\nBerkeley is showing more early engagement with this race than any other city, so we'll be reaching progressive voters in a walkable, high turnout area!\\nNo experience needed, and let us know if you need any help with transportation, mobility considerations, or dietary requests! Sign up here, or call/text Otto anytime at 415 971-9559 with questions or to RSVP!\\nThanks for everything, and see you soon!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/July%208%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230704015115915189.png\",\"modified_date\":1688742552,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"LITERATURE_DROP_OFF\",\"virtual_action_url\":null,\"title\":\"Lit Drop Berkeley with Jovanka & OREB Sat 7/8/23!\"},{\"tags\":[],\"created_date\":1688689900,\"sponsor\":{\"created_date\":1683049020,\"candidate_name\":\"Jovanka Beckles\",\"org_type\":\"CAMPAIGN\",\"event_feed_url\":\"https://www.mobilize.us/jovanka4casenate/\",\"state\":\"CA\",\"modified_date\":1683049239,\"is_primary_campaign\":false,\"id\":35735,\"is_coordinated\":true,\"is_independent\":false,\"name\":\"Jovanka for Senate\",\"logo_url\":\"\",\"race_type\":\"STATE_SENATE\",\"slug\":\"jovanka4casenate\",\"district\":\"7\"},\"approval_status\":\"APPROVED\",\"timeslots\":[{\"id\":3959008,\"start_date\":1691544600,\"is_full\":false,\"end_date\":1691550000,\"instructions\":null}],\"high_priority\":false,\"event_campaign\":null,\"browser_url\":\"https://www.mobilize.us/jovanka4casenate/event/570568/\",\"address_visibility\":\"PUBLIC\",\"id\":570568,\"location\":{\"venue\":\"\",\"address_lines\":[\"1636 Bonita Ave\",\"\"],\"locality\":\"Berkeley\",\"region\":\"CA\",\"country\":\"US\",\"postal_code\":\"94709\",\"location\":{\"latitude\":37.8765505,\"longitude\":-122.2726123},\"congressional_district\":null,\"state_leg_district\":null,\"state_senate_district\":null},\"visibility\":\"PUBLIC\",\"contact\":null,\"summary\":\"\",\"description\":\"Hello Friends and Supporters!\\nAs Jovanka's State Senate race heads into the heart of summer, we'll be gathering in Berkeley on the evening of Tuesday August 8th to meet and hear from Jovanka about the race, and her corporate-free platform, while answering questions, and enjoying nibbles, deserts, and drinks a plenty!\\nJoin our friend and host, Elana Auerbach in her garden, and meet Jovanka Beckles https://jovanka4casenate.com/ in person if you haven't already!\\nWe'll be in the garden of 1636 Bonita Avenue in Berkeley from 6:30-8:00 Tuesday August 8th!\\nRSVP below, or feel free to reach out to Otto at 415 971-9559 to RSVP or with questions, if you have any dietary or accessibility needs, just let us know!\\nThanks again and see you soon!\",\"accessibility_notes\":\"\",\"is_virtual\":false,\"instructions\":null,\"created_by_volunteer_host\":false,\"timezone\":\"America/Los_Angeles\",\"featured_image_url\":\"https://mobilizeamerica.imgix.net/uploads/event/Elena%20Party2_20230707010222635368.png\",\"modified_date\":1688691791,\"accessibility_status\":\"NOT_SURE\",\"event_type\":\"HOUSE_PARTY\",\"virtual_action_url\":null,\"title\":\"House Party for Jovanka with Elana Auerbach in Berkeley 8/8/23\"}],\"metadata\":{\"url_name\":\"public_organization_events\",\"build_commit\":\"543e310335de4bdde21f67ca8738f611c6a70aca\",\"page_title\":null}}","Type":"StaticData","DefLoaders":["DefTarget","DefinedAs","DataType","Src"],"DefBuilders":["ContentCSV","ContentTXT","ContentJSON","ContentJS"],"DefFinalizers":["Code","RequireData"],"Name":"staticdata","DefinitionName":"library2_MobilizeAPI_staticdata","Source":"https://api.mobilize.us/v1/organizations/35735/events?per_page=500","data":{"count":13,"next":null,"previous":null,"data":[{"tags":[],"created_date":1683331220,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3917330,"start_date":1684000800,"is_full":false,"end_date":1684005300,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/562724/","address_visibility":"PUBLIC","id":562724,"location":{"venue":"John F Kennedy Park","address_lines":["3911 Cutting Blvd",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9258362,"longitude":-122.3316494},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Supporters, Allies, Activists, and Friends!\n\nWe are beyond thrilled to announce that Jovanka Beckles, AC Transit Board Director and two-time Richmond City Council Member is kicking off her campaign for State Senate in California's District 7, covering Richmond, Berkeley, Oakland and more.\n\nWe'll be continuing her mission for fair wages, worker power, taxes on the rich, reproductive rights, free early childcare, free healthcare, a Green New Deal, and housing for us, not big landlords!\n\nFor a people led campaign like ours, we need to start early, start strong, and show the strength and size of the movement she's built over a career of courageous stances!\n\nThat's why we're meeting at 11AM at JFK Park in Richmond to hear from Jovanka and some amazing speakers, and let everyone know how they can be a part of bringing change to this district, and California at large. Come enjoy some food and drinks with us, then stick around after the speakers and join us for our first volunteer opportunity!\n\nMeet us at John F. Kennedy Park, Richmond; park in the lot at the intersection of Cutting Blvd. and S. 39th St., and we'll be right next to it in the grass, and then at noon, stick around and join us in leafleting the surrounding neighborhood! \n\nWe'll hear from: Pamela Price, Alameda County District Attorney; Eduardo Martinez, Richmond Mayor; BK Williams of Richmond Progressive Alliance; Nathaniel Arnold of ATU 192; and Saundra Simon, Mental Health Community Support Worker, Contra Costa County.\n\nReach out to Co-Campaign Manager Otto Pippenger at 415 971-9559 by call or text anytime with any questions or if you have any diet or transportation needs.","accessibility_notes":"It's in a park, with both bathrooms and parking nearby, wheelchair accessible other than some slight rolling ground, contact staff with any accomodation questions or requests","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Campaign%20Kickoff3%20%281200%20%C3%97%20630%20px%29_20230509045425734251.jpg","modified_date":1684094440,"accessibility_status":"NOT_SURE","event_type":"RALLY","virtual_action_url":null,"title":"Jovanka Beckles for State Senate Kick-Off; Sat May 13th at JFK Park"},{"tags":[],"created_date":1684460418,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3925448,"start_date":1684692000,"is_full":false,"end_date":1684702800,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564444/","address_visibility":"PUBLIC","id":564444,"location":{"venue":"Washington Park","address_lines":["740 Central Ave","Northeast area of Park"],"locality":"Alameda","region":"CA","country":"US","postal_code":"94501","location":{"latitude":37.7708806,"longitude":-122.2736102},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"After an amazing kickoff, we need to keep the momentum going; so we'll be meeting Sunday May 21st at 11AM in Alameda's Washington Park at 740 Central Ave, on Central and 8th Street for a literature drop!\nIf you haven't been to one of these before, we'll hear from Jovanka, have some coffee and pastries, then head out to leaflet information to nearby voters' doors!\nThe event will run until about two, with transportation help available upon request!\nThe sooner we can get the word out about Jovanka's historical State Senate race in  every city in our district, the better- so please join us in spreading the word!\nCan we count on you to join us?","accessibility_notes":"It's a large, mostly flat public park. Restrooms may or may not be open.","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/May%2021%20Lit%20DropB_20230519014000977051.png","modified_date":1684789284,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Alameda with Jovanka Beckles, Washington Park at 11, Sunday May 21st!"},{"tags":[],"created_date":1684899064,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3927635,"start_date":1685296800,"is_full":false,"end_date":1685307600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564948/","address_visibility":"PUBLIC","id":564948,"location":{"venue":"","address_lines":["2151 Martin Luther King Jr Way",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94704","location":{"latitude":37.8692945,"longitude":-122.2718176},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello all!\nAfter a great kickoff, and a week of continuing endorsements from great groups like Our Revolution East Bay, we are proud to be continuing as the only campaign in this race with on the ground voter outreach!\nWhile Jovanka is in LA to fight for progressive causes like Medicare for All, a Green New Deal, Free Public Transit, and more at the state democratic convention, we're going to keep the fight going, and spread the word in Berkeley!\nJoin us for coffee, company, and a little leafletting Sunday May 28th at Berkeley's Martin Luther King Jr. Park, at 2151 Martin Luther King Jr. Way at 11AM!\nNo experience needed, all training and materials provided! Contact us for any help with transportation, dietary restrictions, or other questions!\nSee you soon!","accessibility_notes":"It's a park- volunteering will mean walking/some stairs, but feel free to come just to the rally, have some coffee, and say hi even if unable to volunteer with us!","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/May%2028%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230524033046732863.png","modified_date":1685394026,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Berkeley for Jovanka, Sunday May 28th, MLK Jr. Park at 11AM!"},{"tags":[],"created_date":1684901314,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3927641,"start_date":1686438000,"is_full":false,"end_date":1686448800,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/564951/","address_visibility":"PUBLIC","id":564951,"location":{"venue":"","address_lines":["1834 University Ave",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94703","location":{"latitude":37.8712708,"longitude":-122.2736954},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, Supporters, and Allies!\n\nAs Jovanka Beckles' campaign for State Senate in California's D7 begins in earnest, we're thrilled to announce that our first house party to meet the candidate, hear from her, and learn about how to help is being held in Berkeley Saturday June 10th!\nPaola Laverde, former Chair of the Berkeley Rent Board, and Negeene Mosaed, clinic owner and healthcare provider will be hosting Jovanka and guests for an evening of conversation, drinks, and food at 1834 University Ave, in Berkeley, from 4-7PM!\nWhether you're a longtime supporter eager to hear about this race, someone with ties to a particular issue or community who wants to hear from the candidate directly, or a new supporter- or even undecided voter- please join us for wine, chocolate, and snacks while you speak with, and hear from the woman herself!\nFeel free to reach out in advance with any questions, or requests in advance- we're excited to see you!\nYou can find out more, and reach out to us herehttps://jovanka4casenate.com/\nOr, if you can't make it, please consider giving directly here: https://secure.actblue.com/donate/jovankaforcastatesenate\nso we can raise funds for our junior staff, materials, and other expenses as a corporate-free, all grassroots effort!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/House%20Party1_20230524040808624741.png","modified_date":1686535540,"accessibility_status":"NOT_SURE","event_type":"HOUSE_PARTY","virtual_action_url":null,"title":"House Party for Jovanka Beckles Saturday June 10th in Berkeley!"},{"tags":[],"created_date":1685591504,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3933159,"start_date":1685901600,"is_full":false,"end_date":1685912400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/565970/","address_visibility":"PUBLIC","id":565970,"location":{"venue":"Athol Plaza","address_lines":["1750 Lakeshore Ave",""],"locality":"Oakland","region":"CA","country":"US","postal_code":"94606","location":{"latitude":37.8000275,"longitude":-122.2543797},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters!\nJovanka is back from the California Democratic Convention, and we're continuing our momentum as the only campaign in this race out reaching voters with a literature drop in Oakland, Sunday June 4th at 11AM!\nCome hear from Jovanka, take a picture with us, have some coffee or pastries, then join us as we spread the word!\nNo experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials!\nWe'll be meeting at Athol Plaza, at 1750 Lakeshore Ave, across the street from Lake Merritt, and right next to both parking and Lake Merritt Bart!\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs!\nThanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/June%204%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230601035129051600.png","modified_date":1685999101,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop for Jovanka in Oakland- 11AM at Athol Plaza!"},{"tags":[{"id":87,"name":"LGBTQ+"}],"created_date":1685594147,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3933163,"start_date":1685912400,"is_full":false,"end_date":1685919600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/565974/","address_visibility":"PUBLIC","id":565974,"location":{"venue":"","address_lines":["Civic Center Plaza & Macdonald Avenue",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9351986,"longitude":-122.3437528},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters!\nJovanka will be appearing at Richmond Rainbow Pride, as the only gay, black woman running for California State Senate, District 7!\nJoin us to talk with voters, sign people up, pass out information, and create visibility for our grassroots campaign to bring to change to D7 and California at large!\nWe'll be at Richmond Rainbow Pride https://www.richmondrainbowpride.org/ with Jovanka from 2-4PM Sunday June 4th, at the corners of Civic Center Plaza and Macdonald Ave in Richmond!\nNo training needed, sign up below or reach out to Nelsy Batista atcompassionate510@gmail.com with any questions or transportation needs, sign up for contact phone number.\nSee you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Rainbow2_20230603013725745629.jpg","modified_date":1686006340,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka at Richmond Rainbow Pride Sunday June 4th 2-4"},{"tags":[],"created_date":1686251346,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3939908,"start_date":1686506400,"is_full":false,"end_date":1686517200,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/567154/","address_visibility":"PUBLIC","id":567154,"location":{"venue":"Unity Park","address_lines":["1605 Ohio Ave",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.931138,"longitude":-122.354169},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Activists, and Supporters! As the only campaign in this race with a volunteer and voter contact presence going, it's key that we show voters, endorsers, and organizations that our grassroots effort is out there to win it!\n\nSo, join us this Sunday 6/11/23 at 11 AM at Richmond's Unity Park on 1605 Ohio Avenue to hear from Jovanka, meet the other volunteers, take a picture with us, have some coffee or pastries, then join us as we spread the word! No experience necessary, but please RSVP if you plan to come so we can bring enough territory, refreshments, and materials! We'll be meeting at Unity Park, on 1605 Ohio Ave!\n\nContact Otto at 415 971-9559 with any questions, dietary, mobility, or transportation needs! Thanks again, see you there! We start a little after 11, and go until 2pm, or when attendees need to leave!","accessibility_notes":"It's an open park, but volunteering will entail stairs most likely or hills, but please do feel free to join us just for the rally portion! Lots of parking and restrooms nearby the park.","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/June%2011%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230608190709714893.png","modified_date":1686603705,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Richmond With Jovanka, Sunday June 11th!"},{"tags":[],"created_date":1686852407,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3943597,"start_date":1687019400,"is_full":false,"end_date":1687028400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/568182/","address_visibility":"PUBLIC","id":568182,"location":{"venue":"","address_lines":["960 S 47th St",""],"locality":"Richmond","region":"CA","country":"US","postal_code":"94804","location":{"latitude":37.9184776,"longitude":-122.3267835},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello, to all Supporters, Activists and Allies, happy Juneteenth!\nJovanka will be appearing at Richmond Pride's Juneteenth parade this Saturday June 17th as AC Transit Director!\nWhile it is important to keep her role as candidate separate from this position, she needs supporters to join her in the parade, and to have a presence outside of it to distribute literature for State Senate to Richmond voters.\nSo, whether you are able to join her in the parade, or help reach voters alongside it, if you'd like to attend Richmond's Juneteenth parade and festivities for a few hours, and help support Jovanka and spend some time with the candidate in an small group, we'd love to  have you join us!\nMeet Jovanka at 9:45AM at Booker T. Anderson Rec Center at 960 South 47th Street- Jovanka will be provided with attendee's phone numbers if you have any trouble locating her!\nThe event will run until noon, and we will need a driver for the parade minibus, two volunteers to hold her AC Transit banner, and at least two volunteers to separately pass out in formation, signs, and take sign ups, the more the merrier though!\n Feel free to contact Otto with questions at 415 971-9559, but if you'd like to celebrate Pride while accompanying Jovanka, and help make a difference, please sign up now!\nSee you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Richmond%20Juneteenth_20230615182010296583.png","modified_date":1687114871,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka at Richmond Juneteenth, Saturday June 17th!"},{"tags":[{"id":90,"name":"Black community"}],"created_date":1686853894,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3943609,"start_date":1687114800,"is_full":false,"end_date":1687125600,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/568191/","address_visibility":"PUBLIC","id":568191,"location":{"venue":"Outside Berkeley Juneteenth","address_lines":["3271 Adeline St",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94703","location":{"latitude":37.8491085,"longitude":-122.2706614},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Everyone and Happy Juneteenth!\nIn addition to the Richmond Parade the day before, Jovanka will also be appearing at Berkeley's Juneteenth festivities, Sunday June 18th!\nJovanka and a few volunteers will be visiting, enjoying the event, and meeting voters and local groups, and we'd love to have you join us!\nCompared to our lit drop events, this will be a more casual and intimate experience, meeting people with Jovanka and providing visibility!\nHowever, we do need some of our super volunteers to accompany her, to pass out literature and signs, and to help get anyone interested in learning more, helping out, or donating to sign up!\nSo if you'd like to attend Berkeley's celebration while helping Jovanka spread her message of justice, equity, reparations, and more, please join us!\nWe'll be meeting at noon just outside the grounds of festival's stretch of blocks, at 3271 Adeline Street!\nContact Otto with any questions at otto.pippenger@gmail.com, or 415 971-9559 anytime! If you want to attend in Oakland, Otto will be at Lake Merritt the day before (Saturday the 17th) at Lake Merritt starting at noon as well, contact directly if so!\nThanks, and see you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20Berkeley%20JuneteenthA_20230615182956484355.png","modified_date":1687212026,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"Join Jovanka for Berkeley Juneteenth, Sunday June 18th !"},{"tags":[{"id":87,"name":"LGBTQ+"}],"created_date":1687647637,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3951964,"start_date":1687708800,"is_full":false,"end_date":1687723200,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/569311/","address_visibility":"PUBLIC","id":569311,"location":{"venue":"Embarcadero Bart","address_lines":["298 Market St",""],"locality":"San Francisco","region":"CA","country":"US","postal_code":"94105","location":{"latitude":37.7929192,"longitude":-122.3968612},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends, Supporters, and Activists!\nHappy Pride Month! While this is a time of joy and celebration, we're also living through a time of legislative and media attack LGBTQ community, especially against our black, brown, and trans members.\nIt's all the more important than ever to show up in both joy and in power, which is why Jovanka will be marching in SF Pride, the city of Harvey Milk and so much of our shared history!\nAs a longtime youth counselor and Queer, Black activists, we will be marching in support of trans lives, and for justice for Banko Brown with the Youth Women's Freedom Center's parade contingent!\nJoin us at 9AM tomorrow, Sunday the 25th outside SF's Embarcadero Bart Station. If you want to make your own sign supporting justice for Banko Brown or in support of queer and trans black and brown lives, please do so, or we can provide one!\nContact Otto with with any questions or trouble locating us at 415 971-9559. \nWe will meet at 9AM outside the station, join our group at 10, then march from 10:30-12:30 down to SF's City Hall, finishing by 1pm.\nThank you for everything, Happy Pride, and see you there!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%20SF%20Pride_20230624230025446438.png","modified_date":1687809665,"accessibility_status":"NOT_SURE","event_type":"SOLIDARITY_EVENT","virtual_action_url":null,"title":"Join Jovanka for SF Pride Parade Sunday June 25th!"},{"tags":[],"created_date":1688433025,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3956684,"start_date":1688493600,"is_full":false,"end_date":1688502600,"instructions":null},{"id":3956685,"start_date":1688504400,"is_full":false,"end_date":1688513400,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570249/","address_visibility":"PUBLIC","id":570249,"location":{"venue":"","address_lines":["Moeser Lane & Richmond Street",""],"locality":"El Cerrito","region":"CA","country":"US","postal_code":"94530","location":{"latitude":37.9131996,"longitude":-122.3043046},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello all!\nTomorrow, Tuesday the 4th of July, Jovanka and team will be coming to the City of El Cerrito 4th of July Festival, to walk in the parade and speak with voters at the festival afterwards about her corporate-free campaign for equity, reform, and justice!\nThe parade begins at 10am, after which and concurrently, we'll be out leafleting, speaking to voters, and of course enjoying the festival!\nMeet us at 11Am at the corners of Moeser Lane and Richmond Street in El Cerrito, or for the the second half, 2-4:30 PM at the same corner!\nWe'll be there from around 10-5pm, but feel free to join us for as little or as much as you can spare!\nContact Otto with any questions or help finding us directly at 415 971-9559!\nThanks, see you soon- and have a great 4th of July!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Jovanka%204th%20El%20Cerito_20230704024028553910.jpg","modified_date":1688601904,"accessibility_status":"NOT_SURE","event_type":"COMMUNITY","virtual_action_url":null,"title":"El Cerrito 4th of July Parade with Jovanka! 7/3/23"},{"tags":[],"created_date":1688435602,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3956688,"start_date":1688839200,"is_full":false,"end_date":1688850000,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570252/","address_visibility":"PUBLIC","id":570252,"location":{"venue":"Cedar Rose Park","address_lines":["1300 Rose St",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94702","location":{"latitude":37.8766229,"longitude":-122.2887371},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Activists, Friends, and Supporters!\nWe're back to lit dropping after taking the last two weekends off for Pride, and the 4th of July runup!\nIn that time, we've racked up some amazing new endorsers, including Dean Preston and Teamsters Joint Council 7, and raised more than 20k in June!\nNow, it's time for us to hit the ground running, and greet the summer with full force to reach voters at their doors!\nThat's why the incredible progressive activists and organizers of Our Revolution East Bay https://www.ourrevolutioneastbay.org/ will be joining us in our first lit drop of July, Saturday July 8th, from Cedar Rose Park in Berkeley at 11AM!\nWe'll be meeting at 1300 Rose St in Berkeley- very close to North Berkeley bart- at 11AM, in the picnic area near the playground!\nWe'll hear from Jovanka, have some coffee and pastries, take a group photo, then go out to leaflet voter's doors until 2PM!\nBerkeley is showing more early engagement with this race than any other city, so we'll be reaching progressive voters in a walkable, high turnout area!\nNo experience needed, and let us know if you need any help with transportation, mobility considerations, or dietary requests! Sign up here, or call/text Otto anytime at 415 971-9559 with questions or to RSVP!\nThanks for everything, and see you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/July%208%20Lit%20%20%281200%20%C3%97%20630%20px%29_20230704015115915189.png","modified_date":1688742552,"accessibility_status":"NOT_SURE","event_type":"LITERATURE_DROP_OFF","virtual_action_url":null,"title":"Lit Drop Berkeley with Jovanka & OREB Sat 7/8/23!"},{"tags":[],"created_date":1688689900,"sponsor":{"created_date":1683049020,"candidate_name":"Jovanka Beckles","org_type":"CAMPAIGN","event_feed_url":"https://www.mobilize.us/jovanka4casenate/","state":"CA","modified_date":1683049239,"is_primary_campaign":false,"id":35735,"is_coordinated":true,"is_independent":false,"name":"Jovanka for Senate","logo_url":"","race_type":"STATE_SENATE","slug":"jovanka4casenate","district":"7"},"approval_status":"APPROVED","timeslots":[{"id":3959008,"start_date":1691544600,"is_full":false,"end_date":1691550000,"instructions":null}],"high_priority":false,"event_campaign":null,"browser_url":"https://www.mobilize.us/jovanka4casenate/event/570568/","address_visibility":"PUBLIC","id":570568,"location":{"venue":"","address_lines":["1636 Bonita Ave",""],"locality":"Berkeley","region":"CA","country":"US","postal_code":"94709","location":{"latitude":37.8765505,"longitude":-122.2726123},"congressional_district":null,"state_leg_district":null,"state_senate_district":null},"visibility":"PUBLIC","contact":null,"summary":"","description":"Hello Friends and Supporters!\nAs Jovanka's State Senate race heads into the heart of summer, we'll be gathering in Berkeley on the evening of Tuesday August 8th to meet and hear from Jovanka about the race, and her corporate-free platform, while answering questions, and enjoying nibbles, deserts, and drinks a plenty!\nJoin our friend and host, Elana Auerbach in her garden, and meet Jovanka Beckles https://jovanka4casenate.com/ in person if you haven't already!\nWe'll be in the garden of 1636 Bonita Avenue in Berkeley from 6:30-8:00 Tuesday August 8th!\nRSVP below, or feel free to reach out to Otto at 415 971-9559 to RSVP or with questions, if you have any dietary or accessibility needs, just let us know!\nThanks again and see you soon!","accessibility_notes":"","is_virtual":false,"instructions":null,"created_by_volunteer_host":false,"timezone":"America/Los_Angeles","featured_image_url":"https://mobilizeamerica.imgix.net/uploads/event/Elena%20Party2_20230707010222635368.png","modified_date":1688691791,"accessibility_status":"NOT_SURE","event_type":"HOUSE_PARTY","virtual_action_url":null,"title":"House Party for Jovanka with Elana Auerbach in Berkeley 8/8/23"}],"metadata":{"url_name":"public_organization_events","build_commit":"543e310335de4bdde21f67ca8738f611c6a70aca","page_title":null}}}, 

library2_MobilizeAPI_script: {"Parent":"library2_MobilizeAPI","DefName":null,"Type":"Script","lifecycle":null,"DefBuilders":["Content|ScriptAutoExport","Code"],"Name":"script","DefinitionName":"library2_MobilizeAPI_script","Directives":[]}, 
 };
/* Modulo.js | (C) 2023 Michael Bethencourt | Use in compliance with LGPL 2.1 */
window.ModuloPrevious = window.Modulo;
window.moduloPrevious = window.modulo;
window.Modulo = class Modulo {
    constructor() {
        window._moduloID = (window._moduloID || 0) + 1;
        this.id = window._moduloID; // Every Modulo instance gets a unique ID.
        this._configSteps = 0; // Used to check for an infinite loop during load
        this.registry = {}; // All classes and functions get put here
        this.config = {}; // For default configurations (e.g. all Components)
        this.definitions = {}; // For specific definitions (e.g. one Component)
        this.stores = {}; // Global data store (by default, only used by State)
    }

    start(elem, callback = null) { // XXX DEAD CODE
        this.loadFromDOM(elem, null, true);
        this.preprocessAndDefine(callback);
    }

    register(type, cls, defaults = undefined) {
        type = (`${type}s` in this.registry) ? `${type}s` : type; // pluralize
        if (type in this.registry.registryCallbacks) { // TODO: Either refactor logic inot this, or rm
            this.registry.registryCallbacks[type](this,  cls, defaults);
        }
        this.assert(type in this.registry, 'Unknown registry type: ' + type);
        this.registry[type][cls.name] = cls;
        if (cls.name[0].toUpperCase() === cls.name[0]) { // is CapFirst
            // TODO: Refactor below:
            const conf = Object.assign(this.config[cls.name.toLowerCase()] || {}, { Type: cls.name }, cls.defaults, defaults);
            this.config[cls.name.toLowerCase()] = conf;

            if (type === 'core') { // Global / core class getting registered
                const lowerName = cls.name[0].toLowerCase() + cls.name.slice(1);
                this[lowerName] = new cls(this);
                this.assets = this.assetManager;
            }
        }
        if (type === 'processors') {
            this.registry.processors[cls.name.toLowerCase()] = cls;
        }
    }

    preprocessAndDefine(callback) {
        callback = callback ? callback : (() => {});
        this.fetchQueue.wait(() => {
            this.repeatProcessors(null, 'DefBuilders', [ ], () => {
                this.repeatProcessors(null, 'DefFinalizers', [ ], callback);
            });
        });
    }

    loadString(text, parentName = null) { // TODO: Refactor this method away
        return this.loadFromDOM(this.registry.utils.makeDiv(text), parentName);
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) { // TODO: Refactor this method away
        const loader = new this.registry.core.DOMLoader(this);
        return loader.loadFromDOM(elem, parentName, quietErrors);
    }

    repeatProcessors(confs, field, defaults, cb) {
        // TODO: Move defaults into global modulo config
        let changed = true; // Run at least once
        while (changed) {
            this.assert(this._configSteps++ < 90000, 'Config steps: 90000+');
            changed = false;
            for (const conf of confs || Object.values(this.definitions)) {
                const processors = conf[field] || defaults;
                //changed = changed || this.applyProcessors(conf, processors);
                const result = this.applyProcessors(conf, processors);
                if (result === 'wait') { // TODO: Test or document, or delete
                    changed = false;
                    break;
                }
                changed = changed || result;
            }
        }
        const repeat = () => this.repeatProcessors(confs, field, defaults, cb);
        if (Object.keys(this.fetchQueue ? this.fetchQueue.queue : {}).length === 0) { // TODO: Remove ?: after core object refactor
            if (cb) {
                cb(); // Synchronous path
            }
        } else {
            this.fetchQueue.enqueueAll(repeat);
        }
    }

    applyProcessors(def, processorNameArray) {
        const cls = this.registry.cparts[def.Type] || this.registry.core[def.Type]; // TODO: Fix this
        for (const name of processorNameArray) {
            const [ attrName, aliasedName ] = name.split('|');
            if (attrName in def) {
                const funcName = (aliasedName || attrName).toLowerCase();
                const func = cls && cls[funcName] ? cls[funcName] :
                    this.registry.processors[funcName];
                const value = def[attrName]; // Pluck value & remove attribute
                delete def[attrName]; // TODO: document 'wait' or rm -v
                return func(this, def, value) === true ? 'wait' : true;
            }
        }
        return false;
    }

    assert(value, ...info) {
        if (!value) {
            console.error(this.id, ...info);
            throw new Error(`Modulo Error: "${Array.from(info).join(' ')}"`);
        }
    }
}

// TODO: Move to conf
Modulo.INVALID_WORDS = new Set((`
    break case catch class const continue debugger default delete do else enum
    export extends finally for if implements import in instanceof interface new
    null package private protected public return static super switch throw try
    typeof var let void  while with await async true false
`).split(/\s+/ig));

// Create a new modulo instance to be the global default instance
window.modulo = new Modulo();
if (typeof modulo === "undefined" || modulo.id !== window.modulo.id) {
    var modulo = window.modulo; // TODO: RM when global modulo is cleaned up
}
window.modulo.registry = Object.fromEntries([
    'registryCallbacks', 'cparts', 'coreDefs', 'utils', 'core', 'engines',
    'commands', 'templateFilters', 'templateTags', 'processors', 'elements',
].map(registryType => ([ registryType, {} ])));

window.modulo.register('registryCallback', function commands(modulo, func, defaults) {
    window.m = window.m || {}; // Avoid overwriting existing truthy m
    window.m[func.name] = () => func(this); // Attach shortcut to global "m"
});

window.modulo.DEVLIB_SOURCE = (`
<Artifact name="css" bundle="link[rel=stylesheet]" exclude="[modulo-asset]">
    <Template>{% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
              {% for css in assets.cssAssetsArray %}{{ css|safe }}
              {% endfor %}</Template>
</Artifact>
<Artifact name="js" bundle="script[src]" exclude="[modulo-asset]">
    <Template macros="yesplease">window.moduloBuild = window.moduloBuild || { modules: {}, nameToHash: {} };
        {% for name, hash in assets.nameToHash %}{% if hash in assets.moduleSources %}{% if name|first is not "_" %}
            window.moduloBuild.modules["{{ hash }}"] = function {{ name }} (modulo) {
                {{ assets.moduleSources|get:hash|safe }}
            };
            window.moduloBuild.nameToHash.{{ name }} = "{{ hash }}";
        {% endif %}{% endif %}{% endfor %}
        window.moduloBuild.definitions = { {% for name, value in definitions %}
            {% if name|first is not "_" %}{{ name }}: {{ value|json|safe }},{% endif %} 
        {% endfor %} };
        {% for elem in bundle %}{{ elem.bundledContent|safe }}{% endfor %}
        modulo.assets.modules = window.moduloBuild.modules;
        modulo.assets.nameToHash = window.moduloBuild.nameToHash;
        modulo.definitions = window.moduloBuild.definitions;
        {% for name in assets.mainRequires %}
            modulo.assets.require("{{ name|escapejs }}");
        {% endfor %}
    </Template>
</Artifact>
<Artifact name="html" remove="script[src],link[href],[modulo-asset],template[modulo],script[modulo],modulo">
    <Script>
        for (const elem of window.document.querySelectorAll('*')) {
            if (elem.isModulo && elem.originalHTML !== elem.innerHTML) {
                elem.setAttribute('modulo-original-html', elem.originalHTML);
            }
        }
        script.exports.prefix = '<!DOCTYPE html><html><head>' + (window.document.head ? window.document.head.innerHTML : '');
        script.exports.interfix = '</head><body>' + (window.document.body ? window.document.body.innerHTML : '');
        script.exports.suffix = '</body></html>';
    </S` + `cript>
    <Template>{{ script.prefix|safe }}<link rel="stylesheet" href="{{ definitions._artifact_css.OutputPath }}" />
        {{ script.interfix|safe }}<script async src="{{ definitions._artifact_js.OutputPath }}"></s` + `cript>
        {{ script.suffix|safe }}</Template>
</Artifact>
`).replace(/^\s+/gm, '');


modulo.register('core', class ValueResolver {
    constructor(contextObj = null) {
        this.ctxObj = contextObj;
    }

    get(key, ctxObj = null) {
        ctxObj = ctxObj || this.ctxObj;
        if (!/^[a-z]/i.test(key) || Modulo.INVALID_WORDS.has(key)) { // XXX global ref
            return JSON.parse(key); // Not a valid identifier, try JSON
        } // Otherwise, split and return:
        return modulo.registry.utils.get(ctxObj, key);
    }

    set(obj, keyPath, val) {
        const index = keyPath.lastIndexOf('.') + 1; // Index at 1 (0 if missing)
        const key = keyPath.slice(index).replace(/:$/, ''); // Between "." & ":"
        const path = keyPath.slice(0, index - 1); // Exclude "."
        const target = index ? this.get(path, obj) : obj; // Get ctxObj or obj
        //TODO: maybe bind? target[key] = typeof val === 'function' ? val.bind(target) : val;
        target[key] = keyPath.endsWith(':') ? this.get(val) : val;
    }
});


modulo.config.domloader = {
    topLevelTags: [ 'modulo' ], // Only "Modulo" is top
    genericDefTags: { def: 1, script: 1, template: 1, style: 1 },
};
modulo.register('core', class DOMLoader {
    constructor(modulo) {
        this.modulo = modulo; // TODO: need to standardize back references to prevent mismatches
    }

    getAllowedChildTags(parentName) {
        let tagsLower = this.modulo.config.domloader.topLevelTags; // "Modulo"
        if (/^_[a-z][a-zA-Z]+$/.test(parentName)) { // _likethis, e.g. _artifact
            tagsLower = [ parentName.toLowerCase().replace('_', '') ];
        } else if (parentName) { // Normal parent, e.g. Library, Component etc
            const parentDef = this.modulo.definitions[parentName];
            const msg = `Invalid parent: ${ parentName } (${ parentDef })`;
            this.modulo.assert(parentDef && parentDef.Contains, msg);
            const names = Object.keys(this.modulo.registry[parentDef.Contains]);
            tagsLower = names.map(s => s.toLowerCase()); // Ignore case
        }
        return tagsLower;
    }

    loadFromDOM(elem, parentName = null, quietErrors = false) {
        const resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
        const { defaultDef } = this.modulo.config.modulo;
        const toCamel = s => s.replace(/-([a-z])/g, g => g[1].toUpperCase());
        const tagsLower = this.getAllowedChildTags(parentName);
        const array = [];
        for (const node of elem.children || []) {
            const partTypeLC = this.getDefType(node, tagsLower, quietErrors);
            if (node._moduloLoadedBy || partTypeLC === null) {
                continue; // Already loaded, or an ignorable or silenced error
            }
            node._moduloLoadedBy = this.modulo.id; // First time loading, mark
            // Valid definition, now create the "def" object
            const def = Object.assign({ Parent: parentName }, defaultDef);
            def.Content = node.tagName === 'SCRIPT' ? node.textContent : node.innerHTML;
            array.push(Object.assign(def, this.modulo.config[partTypeLC]));
            for (let name of node.getAttributeNames()) { // Loop through attrs
                const value = node.getAttribute(name);
                if (partTypeLC === name && !value) { // e.g. <def Script>
                    continue; // This is the "Type" attribute itself, skip
                }
                def[toCamel(name)] = value; // "-kebab-case" to "CamelCase"
            }
        }
        this.modulo.repeatProcessors(array, 'DefLoaders', [ 'DefTarget', 'DefinedAs', 'Src' ]);
        return array;
    }

    getDefType(node, tagsLower, quiet = false) {
        const { tagName, nodeType, textContent } = node;
        if (nodeType !== 1) { // Text nodes, comment nodes, etc
            if (nodeType === 3 && textContent && textContent.trim() && !quiet) {
                console.error(`Unexpected text in definition: ${textContent}`);
            }
            return null;
        }
        let defType = tagName.toLowerCase();
        if (defType in this.modulo.config.domloader.genericDefTags) {
            for (const attrUnknownCase of node.getAttributeNames()) {
                const attr = attrUnknownCase.toLowerCase();
                if (!node.getAttribute(attr) && tagsLower.includes(attr)) {
                    defType = attr; // Has an empty string value, is a def
                }
                break; // Always break: We will only look at first attribute
            }
        }
        if (!(tagsLower.includes(defType))) { // Were any discovered?
            if (defType === 'testsuite') { return null; } /* XXX Remove and add recipe to stub / silence TestSuite not found errors */
            if (!quiet) { // Invalid def / cPart: This type is not allowed here
                console.error(`"${ defType }" is not one of: ${ tagsLower }`);
            }
            return null // Return null to signify not a definition
        }
        return defType; // Valid, expected definition: Return lowercase type
    }
});

modulo.register('processor', function src (modulo, def, value) {
    const { getParentDefPath } = modulo.registry.utils;
    def.Source = (new URL(value, getParentDefPath(modulo, def))).href;
    modulo.fetchQueue.fetch(def.Source).then(text => {
        def.Content = (text || '') + (def.Content || '');
    });
});

modulo.register('processor', function defTarget (modulo, def, value) {
    const resolverName = def.DefResolver || 'ValueResolver'; // TODO: document, make it switch to TemplaterResolver if there is {% or {{
    const resolver = new modulo.registry.core[resolverName](modulo);
    const target = value === null ? def : resolver.get(value);
    for (const [ key, defValue ] of Object.entries(def)) {
        if (key.endsWith(':') || key.includes('.')) {
            delete def[key]; // Remove & replace unresolved value
            resolver.set(/^[a-z]/.test(key) ? target : def, key, defValue);
        }
    }
});

modulo.register('processor', function content (modulo, conf, value) {
    modulo.loadString(value, conf.DefinitionName);
});

modulo.register('processor', function definedAs (modulo, def, value) {
    def.Name = value ? def[value] : (def.Name || def.Type.toLowerCase());
    const parentDef = modulo.definitions[def.Parent];
    const parentPrefix = parentDef && ('ChildPrefix' in parentDef) ?
        parentDef.ChildPrefix : (def.Parent ? def.Parent + '_' : '');
    def.DefinitionName = parentPrefix + def.Name;
    // Search for the next free Name by suffixing numbers
    while (def.DefinitionName in modulo.definitions) {
        const match = /([0-9]+)$/.exec(def.Name);
        const number = match ? match[0] : '';
        def.Name = def.Name.replace(number, '') + ((number * 1) + 1);
        def.DefinitionName = parentPrefix + def.Name;
    }
    modulo.definitions[def.DefinitionName] = def; // store definition
    const parentConf = modulo.definitions[def.Parent];
    if (parentConf) {
        parentConf.ChildrenNames = parentConf.ChildrenNames || [];
        parentConf.ChildrenNames.push(def.DefinitionName);
    }
});

modulo.register('processor', function customElement (modulo, def, value) {
    if (!def.ChildrenNames || def.ChildrenNames.length === 0) {
        console.warn('Empty ChildrenNames specified:', def.DefinitionName);
        return;
    }
    //if (def.namespace === 'modulo') { console.log("AWHAT modulo"); }
    //if (!def.namespace || def.namespace === 'modulo') { def.namespace = 'x'; }
    /*
    let s = '';
    for (const child of def.ChildrenNames.map(n => modulo.definitions[n])) {
        const cpName = def.RenderObj || def.Name;
        s += `        this.cparts.${ cpName } = `;
        s += `new modulo.registry.cparts.${ child.Type }(modulo, `;
        s += `modulo.defs['${ child.DefinitionName }'], this);\n`;
        s += `        this.cparts.${ cpName }.def = `
        s += `modulo.defs['${ child.DefinitionName }'];\n`;
    }
    */
    def.namespace = def.namespace || 'x';
    def.name = def.name || def.DefName || def.Name;
    def.TagName = `${ def.namespace }-${ def.name }`.toLowerCase();
    def.MainRequire = def.DefinitionName;
    const className =  `${ def.namespace }_${ def.name }`;
    def.Code = `
        const def = modulo.definitions['${ def.DefinitionName }'];
        class ${ className } extends ${ value } {
            constructor() {
                super();
                modulo.registry.utils.initElement(modulo, def, this);
            }
            connectedCallback() {
                window.setTimeout(() => this.parsedCallback(), 0);
            }
            parsedCallback() {
                modulo.registry.utils.mountElement(modulo, def, this);
            }
        }
        modulo.registry.utils.initClass(modulo, def, ${ className });
        window.customElements.define(def.TagName, ${ className });
        return ${ className };
    `;
});

modulo.register('util', function initElement (modulo, def, elem) {
    elem.modulo = modulo;
    elem.isMounted = false;
    elem.isModulo = true;
    elem.originalHTML = null;
    elem.originalChildren = [];
    elem.cparts = {};
});

modulo.register('util', function makeStore (modulo, def) {
    const isLower = key => key[0].toLowerCase() === key[0];
    const data = modulo.registry.utils.keyFilter(def, isLower);
    const newStore = { boundElements: {}, subscribers: [] };
    newStore.data = JSON.parse(JSON.stringify(data));
    return newStore;
});

modulo.register('util', function initClass (modulo, def, cls) {
    const initRenderObj = { elementClass: cls };
    for (const defName of def.ChildrenNames) {
        const cpartDef = modulo.definitions[defName];
        const cpartCls = modulo.registry.cparts[cpartDef.Type];
        if (cpartCls.factoryCallback) {
            const result = cpartCls.factoryCallback(initRenderObj, cpartDef, modulo);
            initRenderObj[cpartDef.Name] = result;
        }
    }
    cls.prototype.initRenderObj = initRenderObj;
    // Alias a method from the component class (TODO rm at some point)
    cls.prototype.rerender = function (original = null) {
        this.cparts.component.rerender(original);
    };
    cls.prototype.getCurrentRenderObj = function () {
        return this.cparts.component.getCurrentRenderObj();
    };
    modulo.register('element', cls);
});

modulo.register('util', function mountElement (modulo, def, elem) {
    let original = elem;
    if (elem.hasAttribute('modulo-original-html')) {
        original = modulo.registry.utils.makeDiv(elem.getAttribute('modulo-original-html'));
    }

    ////////
    // (legacy CPart setup -v)
    const allNames = [ def.DefinitionName ].concat(def.ChildrenNames);
    const { cparts } = elem.modulo.registry;
    const isLower = key => key[0].toLowerCase() === key[0];
    for (const def of allNames.map(name => modulo.definitions[name])) {
        let instance;
        if (def.Type === 'Component') {
            instance = new elem.modulo.registry.coreDefs.Component(elem.modulo, def, elem);
        } else {
            instance = new cparts[def.Type](elem.modulo, def, elem);
        }
        instance.element = elem;
        instance.modulo = elem.modulo;
        instance.conf = def;
        instance.attrs = elem.modulo.registry.utils.keyFilter(def, isLower);
        instance.id = ++window._moduloID;
        elem.cparts[def.RenderObj || def.Name] = instance;
    }
    ////////

    ////////
    // First rerender
    elem.cparts.component.lifecycle([ 'initialized' ]);
    elem.rerender(original); // render and re-mount it's own childNodes
    // TODO - Needs refactor, should do elem somewhere else:
    if (elem.hasAttribute('modulo-original-html')) {
        const { reconciler } = elem.cparts.component;
        reconciler.patch = reconciler.applyPatch; // Apply patches immediately
        reconciler.patchAndDescendants(elem, 'Mount');
        reconciler.patch = reconciler.pushPatch;
    }
    elem.isMounted = true;
});

modulo.register('processor', function mainRequire (modulo, conf, value) {
    modulo.assets.mainRequire(value);
});

modulo.register('cpart', class Artifact {
    // TODO: Refactor Component logic to be shared with Artifact (maybe using
    // preprocessors?). Refactor this to use something more generalized for
    // children, so it shares code flow with component.
    static build(modulo, def) {
        const finish = () => {
            const { saveFileAs, hash } = modulo.registry.utils;
            const children = (def.ChildrenNames || []).map(n => modulo.definitions[n]);
            //for (const child of children
            const tDef = children.filter(({ Type }) => Type === 'Template')[0] || null;
            const sDef = children.filter(({ Type }) => Type === 'Script')[0] || null;
            let result = { exports: {} };
            if (sDef) {
                result = modulo.assets.require(sDef.DefinitionName);
            }
            const ctx = Object.assign({}, modulo, { script: result.exports });
            ctx.bundle = bundledElems;
            const templater = new modulo.registry.engines.Templater(modulo, tDef);
            let code = templater.render(ctx);
            if (tDef && tDef.macros) { // TODO: Refactor this code, maybe turn into Template core feature to allow 2 tier / "macro" templating?
                const tDef2 = Object.assign({}, tDef, {
                    modeTokens: ['/' + '*-{-% %-}-*/', '/' + '*-{-{ }-}-*/', '/' + '*-{-# #-}-*/'],
                    modes: {
                        ['/' + '*-{-%']: templater.modes['{%'], // alias
                        ['/' + '*-{-{']: templater.modes['{{'], // alias
                        ['/' + '*-{-#']: templater.modes['{#'], // alias
                        text: templater.modes.text,
                    },
                    Content: code,
                    DefinitionName: tDef.DefinitionName + '_macro',
                    Hash: undefined,
                });
                const templater2 = new modulo.registry.engines.Templater(modulo, tDef2);
                //templater2.escapeText = s => s; // turn on safe all the time
                code = templater2.render(ctx);
            }
            def.FileName = `modulo-build-${ hash(code) }.${ def.name }`;
            if (def.name === 'html') { // TODO: Make this only happen during SSG
                def.FileName = window.location.pathname.split('/').pop() || 'index.html';
            }
            def.OutputPath = saveFileAs(def.FileName, code);
        }

        const bundledElems = [];
        if (def.bundle) {
            for (const elem of document.querySelectorAll(def.bundle)) {
                if (def.exclude && elem.matches(def.exclude)) {
                    continue;
                }
                if (elem.src || elem.href) {
                    modulo.fetchQueue.fetch(elem.src || elem.href).then(text => {
                        delete modulo.fetchQueue.data[elem.src || elem.href];
                        elem.bundledContent = text;
                    });
                }
                bundledElems.push(elem);
            }
        }
        if (def.remove) {
            document.querySelectorAll(def.remove).forEach(elem => elem.remove());
        }
        modulo.fetchQueue.enqueueAll(() => finish(bundledElems));
    }
}, {
    Contains: 'cparts',
    DefinedAs: 'name',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});


/*
modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
    directives: [ 'component.event', 'component.dataProp' ],
};
*/


modulo.config.component = {
    mode: 'regular',
    rerender: 'event',
    engine: 'Reconciler', // TODO: 'Engine':, depends on Instbuilders
    // namespace: 'x',
    Contains: 'cparts',
    CustomElement: 'window.HTMLElement',
    DefinedAs: 'name',
    RenderObj: 'component', // Make features available as "renderObj.component" 
    // Children: 'cparts', // How we can implement Parentage: Object.keys((get('modulo.registry.' + value))// cparts))
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    DefBuilders: [ 'CustomElement', 'Code' ],
    DefFinalizers: [ 'MainRequire' ],
    Directives: [ 'slotLoad', 'eventMount', 'eventUnmount', 'dataPropMount', 'dataPropUnmount' ],
    //InstBuilders: [ 'CreateChildren' ],
};

modulo.register('coreDef', class Component {
    rerender(original = null) {
        if (original) {
            if (this.element.originalHTML === null) {
                this.element.originalHTML = original.innerHTML;
            }
            this.element.originalChildren = Array.from(
                original.hasChildNodes() ? original.childNodes : []);
        }
        this.lifecycle([ 'prepare', 'render', 'reconcile', 'update' ]);
    }

    getCurrentRenderObj() {
        return (this.element.eventRenderObj || this.element.renderObj || this.element.initRenderObj);
    }

    lifecycle(lifecycleNames, rObj={}) {
        const renderObj = Object.assign({}, rObj, this.getCurrentRenderObj());
        this.element.renderObj = renderObj;
        for (const lifecycleName of lifecycleNames) {
            const methodName = lifecycleName + 'Callback';
            for (const [ name, obj ] of Object.entries(this.element.cparts)) {
                if (!(methodName in obj)) {
                    continue; // Skip if obj has not registered callback
                }
                const result = obj[methodName].call(obj, renderObj);
                if (result) {
                    renderObj[obj.conf.RenderObj || obj.conf.Name] = result;
                }
            }
        }
        //this.element.renderObj = null; // ?rendering is over, set to null
    }

    scriptTagLoad({ el }) {
        const newScript = el.ownerDocument.createElement('script');
        newScript.src = el.src; // TODO: Possibly copy other attrs?
        el.remove(); // delete old element
        this.element.ownerDocument.head.append(newScript);
    }

    initializedCallback(renderObj) {
        const opts = { directiveShortcuts: [], directives: [] };
        for (const cPart of Object.values(this.element.cparts)) {
            const def = (cPart.def || cPart.conf);
            for (const method of def.Directives || []) {
                const dirName = (def.RenderObj || def.Name) + '.' + method;
                opts.directives[dirName] = cPart;
            }
        }
        const addHead = ({ el }) => this.element.ownerDocument.head.append(el);
        if (this.attrs.mode === 'shadow') {
            this.element.attachShadow({ mode: 'open' });
        } else { // TODO: Refactor logic here
            opts.directives.slot = this;
            this.slotTagLoad = this.slotLoad.bind(this); // TODO switch to only slotTagLoad
            if (this.attrs.mode === 'vanish-into-document') {
                opts.directives.script = this;
                for (const headTag of [ 'link', 'title', 'meta' ]) {
                    opts.directives[headTag] = this;
                    this[headTag + 'TagLoad'] = addHead;
                }
            }
        }
        this.reconciler = new this.modulo.registry.engines.Reconciler(this, opts);
        this.resolver = new this.modulo.registry.core.ValueResolver(this.modulo);
    }

    prepareCallback() {
        const { originalHTML } = this.element;
        return { originalHTML, innerHTML: null, patches: null, id: this.id };
    }

    reconcileCallback(renderObj) {
        let { innerHTML, patches, root } = renderObj.component;
        this.mode = this.attrs.mode || 'regular';
        if (innerHTML !== null) {
            if (this.mode === 'regular' || this.mode === 'vanish') {
                root = this.element; // default, use element as root
            } else if (this.mode === 'shadow') {
                root = this.element.shadowRoot;
            } else if (this.mode === 'vanish-into-document') {
                root = this.element.ownerDocument.body; // render into body
            } else {
                this.modulo.assert(this.mode === 'custom-root', 'Invalid mode');
            }
            patches = this.reconciler.reconcile(root, innerHTML || '', this.localNameMap);// rm last arg
        }
        return { patches, innerHTML }; // TODO remove innerHTML from here
    }

    updateCallback(renderObj) {
        const { patches, innerHTML } = renderObj.component;
        if (patches) {
            this.reconciler.applyPatches(patches);
        }

        if (!this.element.isMounted && (this.mode === 'vanish' ||
                                        this.mode === 'vanish-into-document')) {
            // First time initialized, and is one of the vanish modes
            this.element.replaceWith(...this.element.childNodes); // Replace self
        }
    }

    handleEvent(func, payload, ev) {
        this.lifecycle([ 'event' ]);
        const { value } = (ev.target || {}); // Get value if is <INPUT>, etc
        func.call(null, payload === undefined ? value : payload, ev);
        this.lifecycle([ 'eventCleanup' ]); // todo: should this go below rerender()?
        if (this.attrs.rerender !== 'manual') {
            this.element.rerender(); // always rerender after events
        }
    }

    slotLoad({ el, value }) {
        let chosenSlot = value || el.getAttribute('name') || null;
        const getSlot = c => c.getAttribute ? (c.getAttribute('slot') || null) : null;
        let childs = this.element.originalChildren;
        childs = childs.filter(child => getSlot(child) === chosenSlot);
        if (!el.moduloSlotHasLoaded) { // clear innerHTML if this is first load
            el.innerHTML = '';
            el.moduloSlotHasLoaded = true;
        }
        el.append(...childs);
    }

    eventMount({ el, value, attrName, rawName }) {
        // Note: attrName becomes "event name"
        // TODO: Make it @click.payload, and then have this see if '.' exists
        // in attrName and attach as payload if so
        const { resolveDataProp } = this.modulo.registry.utils;
        const get = (key, key2) => resolveDataProp(key, el, key2 && get(key2));
        const func = get(attrName);
        this.modulo.assert(func, `No function found for ${rawName} ${value}`);
        if (!el.moduloEvents) {
            el.moduloEvents = {};
        }
        const listen = ev => {
            ev.preventDefault();
            const payload = get(attrName + '.payload', 'payload');
            const currentFunction = resolveDataProp(attrName, el);
            this.handleEvent(currentFunction, payload, ev);
        };
        el.moduloEvents[attrName] = listen;
        el.addEventListener(attrName, listen);
    }

    eventUnmount({ el, attrName }) {
        el.removeEventListener(attrName, el.moduloEvents[attrName]);
        // Modulo.assert(el.moduloEvents[attrName], 'Invalid unmount');
        delete el.moduloEvents[attrName];
    }

    dataPropMount({ el, value, attrName, rawName }) { // element, 
        // Resolve the given value and attach to dataProps
        if (!el.dataProps) {
            el.dataProps = {};
            el.dataPropsAttributeNames = {};
        }
        const resolver = new modulo.registry.core.ValueResolver(// TODO: Global modulo
                      this.element && this.element.getCurrentRenderObj());
        resolver.set(el.dataProps, attrName + ':', value);
        el.dataPropsAttributeNames[rawName] = attrName;
    }

    dataPropUnmount({ el, attrName, rawName }) {
        if (!el.dataProps) { console.log('Modulo ERROR: Could not Unmount', attrName, rawName, el); }
        if (el.dataProps) {
            delete el.dataProps[attrName];
            delete el.dataPropsAttributeNames[rawName];
        }
    }
});

modulo.register('coreDef', class Modulo { }, {
    ChildPrefix: '', // Prevents all children from getting modulo_ prefixed
    Contains: 'coreDefs',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
    defaultDef: { DefTarget: null, DefinedAs: null, DefName: null },
});

modulo.register('coreDef', class Library { }, {
    Contains: 'coreDefs',
    DefTarget: 'config.component',
    // DefinedAs: 'namespace', // TODO: Write tests for Library, the add this
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'Src', 'Content' ],
});

modulo.register('util', function keyFilter (obj, func) {
    const keys = func.call ? Object.keys(obj).filter(func) : func;
    return Object.fromEntries(keys.map(key => [ key, obj[key] ]));
});

modulo.register('util', function resolveDataProp (key, elem, defaultVal) {
    if (elem.dataProps && key in elem.dataProps) {
        return elem.dataProps[key];
    }
    return elem.hasAttribute(key) ? elem.getAttribute(key) : defaultVal;
});

modulo.register('util', function cleanWord (text) {
    // todo: should merge with stripWord ? See if "strip" functionality is enough
    return (text + '').replace(/[^a-zA-Z0-9$_\.]/g, '') || '';
});

modulo.register('util', function stripWord (text) {
    return text.replace(/^[^a-zA-Z0-9$_\.]/, '')
               .replace(/[^a-zA-Z0-9$_\.]$/, '');
});

modulo.register('util', function hash (str) {
    // Simple, insecure, "hashCode()" implementation. Returns base32 hash
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        //h = ((h << 5 - h) + str.charCodeAt(i)) | 0;
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    const hash8 = ('---------' + (h || 0).toString(32)).slice(-8);
    return hash8.replace(/-/g, 'x'); // Pad with 'x'
});

modulo.register('util', function makeDiv(html) {
    /* TODO: Have an options for doing <script  / etc preprocessing here:
      <state -> <script type="modulo/state"
      <\s*(state|props|template)([\s>]) -> <script type="modulo/\1"\2
      </(state|props|template)> -> </script>*/
    const div = window.document.createElement('div');
    div.innerHTML = html;
    return div;
});

modulo.register('util', function normalize(html) {
    // Normalize space to ' ' & trim around tags
    return html.replace(/\s+/g, ' ').replace(/(^|>)\s*(<|$)/g, '$1$2').trim();
});

modulo.register('util', function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
});

modulo.register('util', function saveFileAs(filename, text) {
    const element = window.document.createElement('a');
    const enc = window.encodeURIComponent(text);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + enc);
    element.setAttribute('download', filename);
    window.document.body.appendChild(element);
    element.click();
    window.document.body.removeChild(element);
    return `./${filename}`; // by default, return local path
});

modulo.register('util', function get(obj, key) {
    return (key in obj) ? obj[key] : (key + '').split('.').reduce((o, name) => o[name], obj);
});

modulo.register('util', function set(obj, keyPath, val) {
    return new modulo.registry.core.ValueResolver(modulo).set(obj, keyPath, val); // TODO: Global modulo
});

modulo.register('util', function getParentDefPath(modulo, def) {
    const { getParentDefPath } = modulo.registry.utils; // Use to recurse
    const pDef = def.Parent ? modulo.definitions[def.Parent] : null;
    const url = String(window.location).split('?')[0]; // Remove ? and #
    return pDef ? pDef.Source || getParentDefPath(modulo, pDef) : url;
});

modulo.register('util', function prefixAllSelectors(namespace, name, text='') {
    // TODO: Redo prefixAllSelectors to instead behave more like DataType,
    // basically using "?" auto determines based on Component mode + TagName,
    // allowing users to override if they want to intentionally silo their CSS
    // some other way
    // NOTE - has old tests that can be resurrected
    const fullName = `${namespace}-${name}`;
    let content = text.replace(/\*\/.*?\*\//ig, ''); // strip comments

    // To prefix the selectors, we loop through them, with this RegExp that
    // looks for { chars
    content = content.replace(/([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/gi, selector => {
        selector = selector.trim();
        if (selector.startsWith('@') || selector.startsWith(fullName)
              || selector.startsWith('from') || selector.startsWith('to')) {
            // TODO: Make a regexp to check if matches other keyframe
            // stuff, 90% etc
            // Skip, is @media or @keyframes, or already prefixed
            return selector;
        }

        // Upgrade the ":host" pseudo-element to be the full name (since
        // this is not a Shadow DOM style-sheet)
        selector = selector.replace(new RegExp(/:host(\([^)]*\))?/, 'g'), hostClause => {
            // TODO: this needs more thorough testing
            const notBare = (hostClause && hostClause !== ':host');
            return fullName + (notBare ? `:is(${hostClause})` : '');
        });

        // If it is not prefixed at this point, then be sure to prefix
        if (!selector.startsWith(fullName)) {
            selector = `${fullName} ${selector}`;
        }
        return selector;
    });
    return content;
});

modulo.register('core', class AssetManager {
    constructor (modulo) {
        this.modulo = modulo;
        this.stylesheets = {};
        this.cssAssetsArray = [];
        this.modules = {};
        this.moduleSources = {};
        this.nameToHash = {};
        this.mainRequires = []; // List of globally invoked modules
    }

    mainRequire(moduleName) {
        this.mainRequires.push(moduleName);
        this.require(moduleName);
    }

    require(moduleName) {
        this.modulo.assert(moduleName in this.nameToHash,
            `${ moduleName } not in ${ Object.keys(this.nameToHash).join(', ') }`);
        const hash = this.nameToHash[moduleName];
        this.modulo.assert(hash in this.modules,
            `${ moduleName } / ${ hash } not in ${ Object.keys(this.modules).join(', ') }`);
        return this.modules[hash].call(window, this.modulo);
    }

    define(name, code) {
        const hash = this.modulo.registry.utils.hash(code);
        this.modulo.assert(!(name in this.nameToHash), `Duplicate: ${ name }`);
        this.nameToHash[name] = hash;
        if (!(hash in this.modules)) {
            this.moduleSources[hash] = code;
            const assignee = `window.modulo.assets.modules["${ hash }"] = `;
            const prefix = assignee + `function ${ name } (modulo) {\n`;
            //this.modulo.assets = this;// TODO Should investigate why needed
            //this.modulo.pushGlobal();
            this.appendToHead('script', `"use strict";${ prefix }${ code }};\n`);
            //this.modulo.popGlobal();
        }
        return () => this.modules[hash].call(window, modulo); // TODO: Rm this, and also rm the extra () in Templater
    }

    registerStylesheet(text) {
        const hash = this.modulo.registry.utils.hash(text);
        if (!(hash in this.stylesheets)) {
            this.stylesheets[hash] = true;
            this.cssAssetsArray.push(text);
            this.appendToHead('style', text);
        }
    }

    appendToHead(tagName, codeStr) {
        const doc = window.document;
        const elem = doc.createElement(tagName);
        elem.setAttribute('modulo-asset', 'y'); // Mark as an "asset"
        if (doc.head === null) {
            console.log('Modulo WARNING: Head not ready.');
            setTimeout(() => doc.head.append(elem), 0);
        } else {
            doc.head.append(elem);
        }
        elem.textContent = codeStr; // Blocking, causes eval
    }
});

modulo.register('core', class FetchQueue {
    constructor(modulo) {
        this.modulo = modulo;
        this.queue = {};
        this.data = {};
        this.waitCallbacks = [];
    }

    fetch(src) {
        const label = 'testlabel'; // XXX rm label concept
        //if (src in this.data) { // Already found, resolve immediately
        //    const then = resolve => resolve(this.data[src], label, src);
        //    return { then, catch: () => {} }; // Return synchronous Then-able
        //}
        //return new Promise((resolve, reject) => {
        //});
        return { then : (resolve, reject) => {
            if (src in this.data) { // Already found, resolve immediately
                resolve(this.data[src], label, src);
            } else if (!(src in this.queue)) { // First time, make queue
                this.queue[src] = [ resolve ];
                // TODO: Think about if we want to keep cache:no-store
                window.fetch(src, { cache: 'no-store' })
                    .then(response => response.text())
                    .then(text => this.receiveData(text, label, src))
                    .catch(reject);
            } else {
                this.queue[src].push(resolve); // add to end of src queue
            }
        }};
    }

    receiveData(text, label, src) {
        this.data[src] = text; // load data
        const queue = this.queue[src];
        delete this.queue[src]; // delete queue
        queue.forEach(func => func(text, label, src));
        this.checkWait();
    }

    enqueueAll(callback) {
        const allQueues = Array.from(Object.values(this.queue));
        if (allQueues.length === 0) {
            return callback();
        }
        let callbackCount = 0;
        for (const queue of allQueues) {
            queue.push(() => {
                callbackCount++;
                if (callbackCount >= allQueues.length) {
                    //console.log(Array.from(Object.values(this.queue)).length);
                    callback();
                }
            });
        }
    }

    wait(callback) {
        // NOTE: There is a bug with this vs enqueueAll, specifically if we are
        // already in a wait callback, it can end up triggering the next one
        // immediately
        //console.log({ wait: Object.keys(this.queue).length === 0 }, Object.keys(this.queue));
        this.waitCallbacks.push(callback); // add to end of queue
        this.checkWait(); // attempt to consume wait queue
    }

    checkWait() {
        if (Object.keys(this.queue).length === 0) {
            while (this.waitCallbacks.length > 0) {
                this.waitCallbacks.shift()(); // clear while invoking
            }
        }
    }
});


modulo.register('cpart', class Props {
    initializedCallback(renderObj) {
        const props = {};
        const { resolveDataProp } = modulo.registry.utils;
        for (const [ propName, def ] of Object.entries(this.attrs)) {
            props[propName] = resolveDataProp(propName, this.element, def);
            // TODO: Implement type-checked, and required
        }
        return props;
    }

    prepareCallback(renderObj) {
        /* TODO: Remove after observedAttributes is implemented, e.g.:
          static factoryCallback({ attrs }, { componentClass }, renderObj) {
              //componentClass.observedAttributes = Object.keys(attrs);
          }
        */
        return this.initializedCallback(renderObj);
    }
});

modulo.register('processor', function prefixCSS (modulo, def, value) {
    const { namespace, mode, Name } = modulo.definitions[def.Parent] || {};
    if (mode === 'regular') {
        value = modulo.registry.utils.prefixAllSelectors(namespace, Name, value);
    }
    if (mode !== 'shadow') {
        modulo.assets.registerStylesheet(value);
    }
});

modulo.register('cpart', class Style {
    initializedCallback(renderObj) {
        const { component, style } = renderObj;
        if (component && component.attrs && component.attrs.mode === 'shadow') { // TODO Finish
            const style = window.document.createElement('style');
            style.setAttribute('modulo-ignore', 'true');
            style.textContent = style.content;// `<style modulo-ignore>${style.content}</style>`;
            this.element.shadowRoot.append(style);
        }
    }
    /*
    updateCallback() {
        const { isolateClass, allSelectors } = this.def;
        if (!isolateClass || allSelectors.length < 1) {
            return;
        }
        for (const elem of this.element.querySelector(allSelectors.join(','))) {
            elem.classList.add(isolateClass); // ensure always has class added
        }
    }
    */
}, {
    DefFinalizers: [ 'Content|PrefixCSS' ]
});

modulo.register('processor', function templatePrebuild (modulo, def, value) {
    if (!def.Content) {
        console.error('No Template Content specified:', def.DefinitionName, JSON.stringify(def));
        return;
    }
    const engine = def.engine || 'Templater';
    const instance = new modulo.registry.engines[engine](modulo, def);
    def.Hash = instance.Hash;
    //console.log('Template code:', def.Content);
    delete def.Content;
    delete def.TemplatePrebuild;
});

modulo.register('cpart', class Template {
    initializedCallback() {
        const engine = this.conf.engine || 'Templater';
        this.templater = new this.modulo.registry.engines[engine](this.modulo, this.conf);
        const render = this.templater.render.bind(this.templater);
        return { render }; // Expose render to include, renderas etc
    }
    renderCallback(renderObj) {
        if (!renderObj.component)renderObj.component={};// XXX fix
        renderObj.component.innerHTML = this.templater.render(renderObj);
    }
}, {
    TemplatePrebuild: "yes",
    DefFinalizers: [ 'TemplatePrebuild' ]
});


modulo.register('processor', function contentCSV (modulo, def, value) {
    const js = JSON.stringify((def.Content || '').split('\n').map(line => line.split(',')));
    def.Code = 'return ' + js;
});

modulo.register('processor', function contentJS (modulo, def, value) {
    const tmpFunc = new Function('return (' + (def.Content || 'null') + ');');
    def.Code = 'return ' + JSON.stringify(tmpFunc()) + ';'; // Evaluate
});

modulo.register('processor', function contentJSON (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(JSON.parse(def.Content || '{}')) + ';';
});

modulo.register('processor', function contentTXT (modulo, def, value) {
    def.Code = 'return ' + JSON.stringify(def.Content);
});

modulo.register('processor', function dataType (modulo, def, value) {
    if (value === '?') { // '?' means determine based on extension
        const ext = def.Src && def.Src.match(/(?<=\.)[a-z]+$/i);
        value = ext ? ext[0] : 'json';
    }
    def['Content' + value.toUpperCase()] = value;
});

modulo.register('processor', function code (modulo, def, value) {
    if (def.DefinitionName in modulo.assets.nameToHash) {
        console.error("ERROR: Duped def:", def.DefinitionName);
        return;
    }
    modulo.assets.define(def.DefinitionName, value);
});

modulo.register('processor', function requireData (modulo, def, value) {
    def.data = modulo.assets.require(def[value]);
});

modulo.register('cpart', class StaticData {
    static factoryCallback(renderObj, def, modulo) {
        return def.data;
    }
    prepareCallback() { // XXX remove when fac gets to be default
        return this.conf.data;
    }
}, {
    DataType: '?', // Default behavior is to guess based on Src ext
    RequireData: 'DefinitionName',
    DefLoaders: [ 'DefTarget', 'DefinedAs', 'DataType', 'Src' ],
    DefBuilders: [ 'ContentCSV', 'ContentTXT', 'ContentJSON', 'ContentJS' ],
    DefFinalizers: [ 'Code', 'RequireData' ],
});

modulo.register('coreDef', class Configuration { }, {
    DefTarget: 'config',
    DefBuilders: [ 'Content|Code', 'DefinitionName|MainRequire' ],
});

modulo.register('processor', function scriptAutoExport (modulo, def, value) {
    const { getAutoExportNames } = modulo.registry.utils;
    if (def.lifecycle && def.lifecycle !== 'initialized') {
        value = `function ${ def.lifecycle }Callback (renderObj) {${ value }}`;
    }
    const isDirRegEx = /(Unmount|Mount)$/;
    def.Directives = getAutoExportNames(value).filter(s => s.match(isDirRegEx));
    const { ChildrenNames } = modulo.definitions[def.Parent] || { };
    const sibNames = (ChildrenNames || []).map(n => modulo.definitions[n].Name);
    sibNames.push('component', 'element', 'cparts'); // Add in extras
    const varNames = sibNames.filter(name => value.includes(name));
    // Build def.Code to wrap the user-provided code and export local vars
    def.Code = `var script = { exports: {} }; `;
    def.Code += varNames.length ? `var ${ varNames.join(', ') };` : '';
    def.Code += '\n' + value + '\nreturn {';
    for (const s of getAutoExportNames(value)) {
        def.Code += `"${s}": typeof ${s} !== "undefined" ? ${s} : undefined, `;
    }
    def.Code += `setLocalVariables: function(o) {`
    def.Code += varNames.map(name => `${ name }=o.${ name }`).join('; ');
    def.Code += `}, exports: script.exports }\n`
});

modulo.register('cpart', class Script {
    static factoryCallback(renderObj, def, modulo) {
        //modulo.assert(results || !def.Parent, 'Invalid script return');
        const hash = modulo.assets.nameToHash[def.DefinitionName];
        const func = () => modulo.assets.modules[hash].call(window, modulo);
        if (def.lifecycle === 'initialized') {
            return { initializedCallback: func }; // Attach as callback
        }
        return func(); // Otherwise, should run in static context (e.g. now)
    }

    initializedCallback(renderObj) {
        // Create all lifecycle callbacks, wrapping around the inner script
        const script = renderObj[this.conf.Name];
        this.eventCallback = (rObj) => { // Create eventCallback to set inner
            const vars = { element: this.element, cparts: this.element.cparts };
            const setLocal = script.setLocalVariables || (() => {});
            setLocal(Object.assign(vars, rObj)); // Set inner vars (or no-op)
        };

        if (script.initializedCallback) { // If defined, trigger inner init
            this.eventCallback(renderObj); // Prep before (used by lc=false)
            Object.assign(script, script.initializedCallback(renderObj));
            this.eventCallback(renderObj); // Prep again (used by lc=initialize)
        }

        const isCallback = /(Mount|Unmount|Callback)$/;
        for (const cbName of Object.keys(script)) {
            if (cbName === 'initializedCallback' || !cbName.match(isCallback)) {
                continue; // Skip over initialized (already handled) and non-CBs
            }
            this[cbName] = arg => { // Arg: Either renderObj or directive obj
                const renderObj = this.element.getCurrentRenderObj();
                const script = renderObj[this.conf.Name]; // Get new render obj
                this.eventCallback(renderObj); // Prep before lifecycle method
                Object.assign(script, script[cbName](arg) || {});
            };
        }
    }
}, {
    lifecycle: null,
    DefBuilders: [ 'Content|ScriptAutoExport', 'Code' ],
});



modulo.register('cpart', class State {
    static factoryCallback(renderObj, def, modulo) {
        if (def.Store) {
            const store = modulo.registry.utils.makeStore(modulo, def);
            if (!(def.Store in modulo.stores)) {
                modulo.stores[def.Store] = store;
            } else {
                Object.assign(modulo.stores[def.Store].data, store.data);
            }
        }
    }

    initializedCallback(renderObj) {
        if (!this.def && this.conf) { this.def = this.conf; } // XXX rm
        const store = this.def.Store ? this.modulo.stores[this.def.Store]
                : this.modulo.registry.utils.makeStore(this.modulo, this.def);
        store.subscribers.push(Object.assign(this, store));
        return store.data; // TODO: Possibly, push ALL sibling CParts with stateChangedCallback
    }

    bindMount({ el, attrName, value }) {
        const name = attrName || el.getAttribute('name');
        const val = modulo.registry.utils.get(this.data, name);
        this.modulo.assert(val !== undefined, `state.bind "${name}" undefined`);
        const isText = el.tagName === 'TEXTAREA' || el.type === 'text';
        const evName = value ? value : (isText ? 'keyup' : 'change');
        if (!(name in this.boundElements)) {
            this.boundElements[name] = [];
        }
        // Bind the "listen" event to propagate to all, and trigger initial vals
        const listen = () => this.propagate(name, el.value, el);
        this.boundElements[name].push([ el, evName, listen ]);
        el.addEventListener(evName, listen); // todo: make optional, e.g. to support cparts?
        this.propagate(name, val, this); // trigger initial assignment(s)
    }

    bindUnmount({ el, attrName }) {
        const name = attrName || el.getAttribute('name');
        if (!(name in this.boundElements)) { // XXX HACK
            return console.log('Modulo ERROR: Could not unbind', name);
        }
        const remainingBound = [];
        for (const row of this.boundElements[name]) {
            if (row[0] === el) {
                row[0].removeEventListener(row[1], row[2]);
            } else {
                remainingBound.push(row);
            }
        }
        this.boundElements[name] = remainingBound;
    }

    stateChangedCallback(name, value, el) {
        this.modulo.registry.utils.set(this.data, name, value);
        if (!this.def.Only || this.def.Only.includes(name)) { // TODO: Test & document
            this.element.rerender();
        }
    }

    eventCallback() {
        this._oldData = Object.assign({}, this.data);
    }

    propagate(name, val, originalEl = null) {
        const elems = (this.boundElements[name] || []).map(row => row[0]);
        for (const el of this.subscribers.concat(elems)) {
            if (originalEl && el === originalEl) {
                continue; // don't propagate to self
            }
            if (el.stateChangedCallback) {
                el.stateChangedCallback(name, val, originalEl);
            } else if (el.type === 'checkbox') {
                el.checked = !!val; // ensure is bool
            } else {
                el.value = val;
            }
        }
    }

    eventCleanupCallback() {
        for (const name of Object.keys(this.data)) {
            this.modulo.assert(name in this._oldData, `There is no "state.${name}"`);
            if (this.data[name] !== this._oldData[name]) {
                this.propagate(name, this.data[name], this);
            }
        }
        this._oldData = null;
    }
}, { Directives: [ 'bindMount', 'bindUnmount' ], Store: null });


/* Implementation of Modulo Templating Language */
modulo.register('engine', class Templater {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.setup(def.Content, def);
    }

    setup(text, def) {
        Object.assign(this, this.modulo.config.templater, def);
        this.filters = Object.assign({}, this.modulo.registry.templateFilters, this.filters);
        this.tags = Object.assign({}, this.modulo.registry.templateTags, this.tags);
        if (this.Hash) {
            this.renderFunc = this.modulo.assets.require(this.DefinitionName);
        } else {
            this.compiledCode = this.compile(text);
            const unclosed = this.stack.map(({ close }) => close).join(', ');
            this.modulo.assert(!unclosed, `Unclosed tags: ${ unclosed }`);

            this.compiledCode = `return function (CTX, G) { ${ this.compiledCode } };`;
            const { hash } = this.modulo.registry.utils;
            this.Hash = 'T' + hash(this.compiledCode);
            if (this.DefinitionName in this.modulo.assets.nameToHash) { // TODO RM
                console.error("ERROR: Duped template:", def.DefinitionName);
                this.renderFunc = () => '';
                return;
            }
            this.renderFunc = this.modulo.assets.define(this.DefinitionName, this.compiledCode)();
        }
    }

    static moduloClone(modulo, other) {
        // Possible idea: Return a serializable array as args for new()
        return new this('', other);
    }

    tokenizeText(text) {
        // Join all modeTokens with | (OR in regex).
        const { escapeRegExp } = this.modulo.registry.utils;
        const re = '(' + this.modeTokens.map(escapeRegExp).join('|(').replace(/ +/g, ')(.+?)');
        return text.split(RegExp(re)).filter(token => token !== undefined);
    }

    compile(text) {
        const { normalize } = this.modulo.registry.utils;
        this.stack = []; // Template tag stack
        this.output = 'var OUT=[];\n'; // Variable used to accumulate code
        let mode = 'text'; // Start in text mode
        const tokens = this.tokenizeText(text);
        for (const token of tokens) {
            if (mode) { // if in a "mode" (text or token), then call mode func
                const result = this.modes[mode](token, this, this.stack);
                if (result) { // Mode generated text output, add to code
                    const comment = JSON.stringify(normalize(token).trim());
                    this.output += `  ${result} // ${ comment }\n`;
                }
            }
            // FSM for mode: ('text' -> null) (null -> token) (* -> 'text')
            mode = (mode === 'text') ? null : (mode ? 'text' : token);
        }
        this.output += '\nreturn OUT.join("");'
        return this.output;
    }

    render(renderObj) {
        return this.renderFunc(Object.assign({ renderObj }, renderObj), this);
    }

    parseExpr(text) {
        // TODO: Store a list of variables / paths, so there can be warnings or
        // errors when variables are unspecified
        // TODO: Support this-style-variable being turned to thisStyleVariable
        const filters = text.split('|');
        let results = this.parseVal(filters.shift()); // Get left-most val
        for (const [ fName, arg ] of filters.map(s => s.trim().split(':'))) {
            const argList = arg ? ',' + this.parseVal(arg) : '';
            results = `G.filters["${fName}"](${results}${argList})`;
        }
        return results;
    }

    parseCondExpr(string) {
        // This RegExp splits around the tokens, with spaces added
        const regExpText = ` (${this.opTokens.split(',').join('|')}) `;
        return string.split(RegExp(regExpText));
    }

    parseVal(string) {
        // Parses string literals, de-escaping as needed, numbers, and context
        // variables
        const { cleanWord } = this.modulo.registry.utils;
        const s = string.trim();
        if (s.match(/^('.*'|".*")$/)) { // String literal
            return JSON.stringify(s.substr(1, s.length - 2));
        }
        return s.match(/^\d+$/) ? s : `CTX.${cleanWord(s)}`
    }

    escapeText(text) {
        if (text && text.safe) {
            return text;
        }
        return (text + '').replace(/&/g, '&amp;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/'/g, '&#x27;').replace(/"/g, '&quot;');
    }
}, {
    modeTokens: ['{% %}', '{{ }}', '{# #}'],
    opTokens: '==,>,<,>=,<=,!=,not in,is not,is,in,not,gt,lt',
    opAliases: {
        '==': 'X === Y',
        'is': 'X === Y',
        'gt': 'X > Y',
        'lt': 'X < Y',
        'is not': 'X !== Y',
        'not': '!(Y)',
        'in': '(Y).includes ? (Y).includes(X) : (X in Y)',
        'not in': '!((Y).includes ? (Y).includes(X) : (X in Y))',
    },
});

// TODO: Consider patterns like this to avoid excess reapplication of
// filters:
// (x = X, y = Y).includes ? y.includes(x) : (x in y)
modulo.config.templater.modes = {
    '{%': (text, tmplt, stack) => {
        const tTag = text.trim().split(' ')[0];
        const tagFunc = tmplt.tags[tTag];
        if (stack.length && tTag === stack[stack.length - 1].close) {
            return stack.pop().end; // Closing tag, return it's end code
        } else if (!tagFunc) { // Undefined template tag
            throw new Error(`Unknown template tag "${tTag}": ${text}`);
        } // Normal opening tag
        const result = tagFunc(text.slice(tTag.length + 1), tmplt);
        if (result.end) { // Not self-closing, push to stack
            stack.push({ close: `end${ tTag }`, ...result });
        }
        return result.start || result;
    },
    '{#': (text, tmplt) => false, // falsy values are ignored
    '{{': (text, tmplt) => `OUT.push(G.escapeText(${tmplt.parseExpr(text)}));`,
    text: (text, tmplt) => text && `OUT.push(${JSON.stringify(text)});`,
};

modulo.config.templater.filters = (function () {
    const { get } = modulo.registry.utils;
    const safe = s => Object.assign(new String(s), { safe: true });
    const filters = {
        add: (s, arg) => s + arg,
        allow: (s, arg) => arg.split(',').includes(s) ? s : '',
        camelcase: s => s.replace(/-([a-z])/g, g => g[1].toUpperCase()),
        capfirst: s => s.charAt(0).toUpperCase() + s.slice(1),
        concat: (s, arg) => s.concat ? s.concat(arg) : s + arg,
        combine: (s, arg) => s.concat ? s.concat(arg) : Object.assign({}, s, arg),
        default: (s, arg) => s || arg,
        divisibleby: (s, arg) => ((s * 1) % (arg * 1)) === 0,
        dividedinto: (s, arg) => Math.ceil((s * 1) / (arg * 1)),
        escapejs: s => JSON.stringify(String(s)).replace(/(^"|"$)/g, ''),
        first: s => Array.from(s)[0],
        join: (s, arg) => (s || []).join(arg === undefined ? ", " : arg),
        json: (s, arg) => JSON.stringify(s, null, arg || undefined),
        last: s => s[s.length - 1],
        length: s => s.length !== undefined ? s.length : Object.keys(s).length,
        lower: s => s.toLowerCase(),
        multiply: (s, arg) => (s * 1) * (arg * 1),
        number: (s) => Number(s),
        pluralize: (s, arg) => (arg.split(',')[(s === 1) * 1]) || '',
        skipfirst: (s, arg) => Array.from(s).slice(arg || 1),
        subtract: (s, arg) => s - arg,
        truncate: (s, arg) => ((s && s.length > arg*1) ? (s.substr(0, arg-1) + '…') : s),
        type: s => s === null ? 'null' : (Array.isArray(s) ? 'array' : typeof s),
        renderas: (rCtx, template) => safe(template.render(rCtx)),
        reversed: s => Array.from(s).reverse(),
        upper: s => s.toUpperCase(),
        yesno: (s, arg) => `${ arg || 'yes,no' },,`.split(',')[s ? 0 : s === null ? 2 : 1],
    };
    const { values, keys, entries } = Object;
    const extra = { get, safe, values, keys, entries };
    return Object.assign(filters, extra);
})();

modulo.config.templater.tags = {
    'debugger': () => 'debugger;',
    'if': (text, tmplt) => {
        // Limit to 3 (L/O/R)
        const [ lHand, op, rHand ] = tmplt.parseCondExpr(text);
        const condStructure = !op ? 'X' : tmplt.opAliases[op] || `X ${op} Y`;
        const condition = condStructure.replace(/([XY])/g,
            (k, m) => tmplt.parseExpr(m === 'X' ? lHand : rHand));
        const start = `if (${condition}) {`;
        return { start, end: '}' };
    },
    'else': () => '} else {',
    'elif': (s, tmplt) => '} else ' + tmplt.tags['if'](s, tmplt).start,
    'comment': () => ({ start: "/*", end: "*/"}),
    'include': (text) => `OUT.push(CTX.${ text.trim() }.render(CTX));`,
    'for': (text, tmplt) => {
        // Make variable name be based on nested-ness of tag stack
        const { cleanWord } = modulo.registry.utils;
        const arrName = 'ARR' + tmplt.stack.length;
        const [ varExp, arrExp ] = text.split(' in ');
        let start = `var ${arrName}=${tmplt.parseExpr(arrExp)};`;
        // TODO: Upgrade to of (after good testing), since probably no need to
        // support for..in
        start += `for (var KEY in ${arrName}) {`;
        const [keyVar, valVar] = varExp.split(',').map(cleanWord);
        if (valVar) {
            start += `CTX.${keyVar}=KEY;`;
        }
        start += `CTX.${valVar ? valVar : varExp}=${arrName}[KEY];`;
        return {start, end: '}'};
    },
    'empty': (text, {stack}) => {
        // Make variable name be based on nested-ness of tag stack
        const varName = 'G.FORLOOP_NOT_EMPTY' + stack.length;
        const oldEndCode = stack.pop().end; // get rid of dangling for
        const start = `${varName}=true; ${oldEndCode} if (!${varName}) {`;
        const end = `}${varName} = false;`;
        return { start, end, close: 'endfor' };
    },
};

modulo.register('engine', class DOMCursor {
    constructor(parentNode, parentRival) {
        this.initialize(parentNode, parentRival);
        this.instanceStack = [];
    }

    initialize(parentNode, parentRival) {
        this.parentNode = parentNode;
        this.nextChild = parentNode.firstChild;
        this.nextRival = parentRival.firstChild;
        this.keyedChildren = {};
        this.keyedRivals = {};
        this.keyedChildrenArr = null;
        this.keyedRivalsArr = null;
    }

    saveToStack() {
        // TODO: Once we finalize this class, write "_.pick" helper
        const { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr } = this;
        const instance = { nextChild, nextRival, keyedChildren, keyedRivals,
                parentNode, keyedChildrenArr, keyedRivalsArr };
        this.instanceStack.push(instance);
    }

    loadFromStack() {
        const stack = this.instanceStack;
        return stack.length > 0 && Object.assign(this, stack.pop());
    }

    hasNext() {
        if (this.nextChild || this.nextRival) {
            return true; // Is pointing at another node
        }

        // Convert objects into arrays so we can pop
        if (!this.keyedChildrenArr) {
            this.keyedChildrenArr = Object.values(this.keyedChildren);
        }
        if (!this.keyedRivalsArr) {
            this.keyedRivalsArr = Object.values(this.keyedRivals);
        }

        if (this.keyedRivalsArr.length || this.keyedChildrenArr.length) {
            return true; // We have queued up nodes from keyed values
        }

        return this.loadFromStack() && this.hasNext();
    }

    next() {
        let child = this.nextChild;
        let rival = this.nextRival;
        if (!child && !rival) { // reached the end
            if (!this.keyedRivalsArr) {
                return [null, null];
            }
            // There were excess keyed rivals OR children, pop()
            return this.keyedRivalsArr.length ?
                  [ null, this.keyedRivalsArr.pop() ] :
                  [ this.keyedChildrenArr.pop(), null ];
        }

        // Handle keys
        this.nextChild = child ? child.nextSibling : null;
        this.nextRival = rival ? rival.nextSibling : null;

        let matchedRival = this.getMatchedNode(child, this.keyedChildren, this.keyedRivals);
        let matchedChild = this.getMatchedNode(rival, this.keyedRivals, this.keyedChildren);
        // TODO refactor this
        if (matchedRival === false) {
            // Child has a key, but does not match rival, so SKIP on child
            child = this.nextChild;
            this.nextChild = child ? child.nextSibling : null;
        } else if (matchedChild === false) {
            // Rival has a key, but does not match child, so SKIP on rival
            rival = this.nextRival;
            this.nextRival = rival ? rival.nextSibling : null;
        }
        const keyWasFound = matchedRival !== null || matchedChild !== null;
        const matchFound = matchedChild !== child && keyWasFound;
        if (matchFound && matchedChild) {
            // Rival matches, but not with child. Swap in child.
            this.nextChild = child;
            child = matchedChild;
        }

        if (matchFound && matchedRival) {
            // Child matches, but not with rival. Swap in rival.
            this.modulo.assert(matchedRival !== rival, 'Dupe!'); // (We know this due to ordering)
            this.nextRival = rival;
            rival = matchedRival;
        }

        return [ child, rival ];
    }

    getMatchedNode(elem, keyedElems, keyedOthers) {
        const key = elem && elem.getAttribute && elem.getAttribute('key');
        if (!key) {
            return null;
        }
        if (key in keyedOthers) {
            const matched = keyedOthers[key];
            delete keyedOthers[key];
            return matched;
        } else {
            if (key in keyedElems) {
                console.error('MODULO WARNING: Duplicate key:', key);
            }
            keyedElems[key] = elem;
            return false;
        }
    }
});

modulo.config.reconciler = {
    directiveShortcuts: [ [ /^@/, 'component.event' ],
                          [ /:$/, 'component.dataProp' ] ],
};
modulo.register('engine', class Reconciler {
    constructor(modulo, def) {
        this.modulo = modulo;
        this.constructor_old(def);
    }
    constructor_old(opts) {
        opts = opts || {};
        this.shouldNotDescend = !!opts.doNotDescend;
        this.directives = opts.directives || {};
        this.tagTransforms = opts.tagTransforms;
        this.directiveShortcuts = opts.directiveShortcuts || [];
        if (this.directiveShortcuts.length === 0) { // XXX horrible HACK
            this.directiveShortcuts = modulo.config.reconciler.directiveShortcuts; // TODO global modulo
        }
        this.patch = this.pushPatch;
        this.patches = [];
    }

    parseDirectives(rawName, directiveShortcuts) { //, foundDirectives) {
        if (/^[a-z0-9-]$/i.test(rawName)) {
            return null; // if alpha-only, stop right away
            // TODO: If we ever support key= as a shortcut, this will break
        }

        // "Expand" shortcuts into their full versions
        let name = rawName;
        for (const [regexp, directive] of directiveShortcuts) {
            if (rawName.match(regexp)) {
                name = `[${directive}]` + name.replace(regexp, '');
            }
        }
        if (!name.startsWith('[')) {
            return null; // There are no directives, regular attribute, skip
        }

        // There are directives... time to resolve them
        const { cleanWord, stripWord } = modulo.registry.utils; // TODO global modulo
        const arr = [];
        const attrName = stripWord((name.match(/\][^\]]+$/) || [ '' ])[0]);
        for (const directiveName of name.split(']').map(cleanWord)) {
            // Skip the bare name itself, and filter for valid directives
            if (directiveName !== attrName) {// && directiveName in directives) {
                arr.push({ attrName, rawName, directiveName, name })
            }
        }
        return arr;
    }

    loadString(rivalHTML, tagTransforms) {
        this.patches = [];
        const rival = modulo.registry.utils.makeDiv(rivalHTML);
        const transforms = Object.assign({}, this.tagTransforms, tagTransforms);
        this.applyLoadDirectives(rival, transforms);
        return rival;
    }

    reconcile(node, rival, tagTransforms) {
        // TODO: should normalize <!DOCTYPE html>
        if (typeof rival === 'string') {
            rival = this.loadString(rival, tagTransforms);
        }
        this.reconcileChildren(node, rival);
        this.cleanRecDirectiveMarks(node);
        return this.patches;
    }

    applyLoadDirectives(elem, tagTransforms) {
        this.patch = this.applyPatch; // Apply patches immediately
        for (const node of elem.querySelectorAll('*')) {
            // legacy -v, TODO rm
            const newTag = tagTransforms[node.tagName.toLowerCase()];
            //console.log('this is tagTransforms', tagTransforms);
            if (newTag) {
                modulo.registry.utils.transformTag(node, newTag);
            }
            ///////

            const lowerName = node.tagName.toLowerCase();
            if (lowerName in this.directives) {
                this.patchDirectives(node, `[${lowerName}]`, 'TagLoad');
            }

            for (const rawName of node.getAttributeNames()) {
                // Apply load-time directive patches
                this.patchDirectives(node, rawName, 'Load');
            }
        }
        this.markRecDirectives(elem); // TODO rm
        this.patch = this.pushPatch;
    }

    markRecDirectives(elem) {
        // TODO remove this after we reimplement [component.ignore]
        // Mark all children of modulo-ignore with mm-ignore
        for (const node of elem.querySelectorAll('[modulo-ignore] *')) {
            // TODO: Very important: also mark to ignore children that are
            // custom!
            node.setAttribute('mm-ignore', 'mm-ignore');
        }

        // TODO: hacky / leaky solution to attach like this
        //for (const rivalChild of elem.querySelectorAll('*')) {
        //    rivalChild.moduloDirectiveContext = this.directives;
        //}
    }

    cleanRecDirectiveMarks(elem) {
        // Remove all mm-ignores
        for (const node of elem.querySelectorAll('[mm-ignore]')) {
            node.removeAttribute('mm-ignore');
        }
    }

    applyPatches(patches) {
        patches.forEach(patch => this.applyPatch.apply(this, patch));
    }

    reconcileChildren(childParent, rivalParent) {
        // Nonstandard nomenclature: "The rival" is the node we wish to match
        const cursor = new modulo.registry.engines.DOMCursor(childParent, rivalParent);
        while (cursor.hasNext()) {
            const [ child, rival ] = cursor.next();
            const needReplace = child && rival && (
                child.nodeType !== rival.nodeType ||
                child.nodeName !== rival.nodeName
            ); // Does this node to be swapped out? Swap if exist but mismatched

            if ((child && !rival) || needReplace) { // we have more rival, delete child
                this.patchAndDescendants(child, 'Unmount');
                this.patch(cursor.parentNode, 'removeChild', child);
            }

            if (needReplace) { // do swap with insertBefore
                this.patch(cursor.parentNode, 'insertBefore', rival, child.nextSibling);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (!child && rival) { // we have less than rival, take rival
                // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                this.patch(cursor.parentNode, 'appendChild', rival);
                this.patchAndDescendants(rival, 'Mount');
            }

            if (child && rival && !needReplace) {
                // Both exist and are of same type, let's reconcile nodes
                if (child.nodeType !== 1) { // text or comment node
                    if (child.nodeValue !== rival.nodeValue) { // update
                        this.patch(child, 'node-value', rival.nodeValue);
                    }
                } else if (!child.isEqualNode(rival)) { // sync if not equal
                    this.reconcileAttributes(child, rival);
                    if (rival.hasAttribute('modulo-ignore')) {
                        // console.log('Skipping ignored node');
                    } else if (child.isModulo) { // is a Modulo component
                        // TODO: Possibly add directive resolution context to rival / child.originalChildren?
                        this.patch(child, 'rerender', rival);
                    } else if (!this.shouldNotDescend) {
                        cursor.saveToStack();
                        cursor.initialize(child, rival);
                    }
                }
            }
        }
    }

    pushPatch(node, method, arg, arg2 = null) {
        this.patches.push([ node, method, arg, arg2 ]);
    }

    applyPatch(node, method, arg, arg2) { // take that, rule of 3!
        //if (!node || !node[method]) { console.error('NO NODE:', node, method, arg, arg2) } // XXX
        if (method === 'node-value') {
            node.nodeValue = arg;
        } else if (method === 'insertBefore') {
            node.insertBefore(arg, arg2); // Needs 2 arguments
        } else if (method === 'attr-append') { // Append string to existing
            node.setAttribute(arg, (node.getAttribute(arg) || '') + arg2); // TODO: DEAD CODE
        } else if (method.startsWith('directive-')) {
            // TODO: Possibly, remove 'directive-' prefix, unnecessary
            method = method.substr('directive-'.length);
            node[method].call(node, arg); // invoke directive method
        } else {
            node[method].call(node, arg); // invoke method
        }
    }

    patchDirectives(el, rawName, suffix, copyFromEl = null) {
        const foundDirectives = this.parseDirectives(rawName, this.directiveShortcuts);
        if (!foundDirectives || foundDirectives.length === 0) {
            return;
        }

        const value = (copyFromEl || el).getAttribute(rawName); // Get value
        for (const directive of foundDirectives) {
            const dName = directive.directiveName; // e.g. "state.bind", "link"
            const fullName = dName + suffix; // e.g. "state.bindMount"

            // Hacky: Check if this elem has a different moduloDirectiveContext than expected
            //const directives = (copyFromEl || el).moduloDirectiveContext || this.directives;
            //if (el.moduloDirectiveContext) {
            //    console.log('el.moduloDirectiveContext', el.moduloDirectiveContext);
            //}
            const { directives } = this;

            const thisContext = directives[dName] || directives[fullName];
            if (thisContext) { // If a directive matches...
                const methodName = fullName.split('.')[1] || fullName;
                Object.assign(directive, { value, el });
                this.patch(thisContext, 'directive-' + methodName, directive);
            }
        }
    }

    reconcileAttributes(node, rival) {
        const myAttrs = new Set(node ? node.getAttributeNames() : []);
        const rivalAttributes = new Set(rival.getAttributeNames());

        // Check for new and changed attributes
        for (const rawName of rivalAttributes) {
            const attr = rival.getAttributeNode(rawName);
            if (myAttrs.has(rawName) && node.getAttribute(rawName) === attr.value) {
                continue; // Already matches, on to next
            }

            if (myAttrs.has(rawName)) { // If exists, trigger Unmount first
                this.patchDirectives(node, rawName, 'Unmount');
            }
            // Set attribute node, and then Mount based on rival value
            this.patch(node, 'setAttributeNode', attr.cloneNode(true));
            this.patchDirectives(node, rawName, 'Mount', rival);
        }

        // Check for old attributes that were removed
        for (const rawName of myAttrs) {
            if (!rivalAttributes.has(rawName)) {
                this.patchDirectives(node, rawName, 'Unmount');
                this.patch(node, 'removeAttribute', rawName);
            }
        }
    }

    patchAndDescendants(parentNode, actionSuffix) {
        if (parentNode.nodeType !== 1) { // cannot have descendants
            return;
        }
        let nodes = [ parentNode ]; // also, patch self (but last)
        if (!this.shouldNotDescend) {
            nodes = Array.from(parentNode.querySelectorAll('*')).concat(nodes);
        }
        for (let rival of nodes) { // loop through nodes to patch
            if (rival.hasAttribute('mm-ignore')) {
                // Skip any marked to ignore
                continue;
            }

            for (const rawName of rival.getAttributeNames()) {
                // Loop through each attribute patching foundDirectives as necessary
                this.patchDirectives(rival, rawName, actionSuffix);
            }
        }
    }
});

modulo.register('util', function getAutoExportNames(contents) {
    // TODO: Change exports/Directives/etc to def processor to better expose
    const regexpG = /(function|class)\s+(\w+)/g;
    const regexp2 = /(function|class)\s+(\w+)/; // hack, refactor
    return (contents.match(regexpG) || []).map(s => s.match(regexp2)[2])
        .filter(s => s && !Modulo.INVALID_WORDS.has(s));
});



modulo.assets.modules = window.moduloBuild.modules;
modulo.assets.nameToHash = window.moduloBuild.nameToHash;
modulo.definitions = window.moduloBuild.definitions;

modulo.assets.require("configuration");

modulo.assets.require("library_Page");

modulo.assets.require("library_NavBar");

modulo.assets.require("library_EndorsementsGallery");

modulo.assets.require("library_MobileNavBar");

modulo.assets.require("library_Banner");

modulo.assets.require("library_Gallery");

modulo.assets.require("library_HeroInset");

modulo.assets.require("library_AllBanners");

modulo.assets.require("library_EventCard");

modulo.assets.require("library1_ContactForm");

modulo.assets.require("library1_ActionNetworkForm");

modulo.assets.require("library1_DonateButtons");

modulo.assets.require("library2_MobilizeAPI");

