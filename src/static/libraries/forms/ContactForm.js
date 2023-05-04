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

