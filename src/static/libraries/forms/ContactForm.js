
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
    },
    {
      label: 'Yes, I want to pledge a donation ',
      name: 'pledge',
    },
];

const increments = [ 2, 9, 27, 50, 200, 1000 ];

let hasRun = false;
function prepareCallback() {
    if (!hasRun) {
        hasRun = true;
        const urlParams = new URLSearchParams(location.search);
        if (urlParams.get('volunteer')) {
            state.volunteer = true;
            state.title = 'Volunteer';
        } else if (urlParams.get('pledge')) {
            state.pledge = true;
            state.title = 'Pledge';
        } else {
            if (props.volunteerform) {
                state.volunteer = true;
                state.title = 'Volunteer';
            } else if (props.pledgeform) {
                state.pledge = true;
                state.title = 'Pledge';
            }
        }
    }
    if (state.pledge === 'on') {
        // Fix bug
        state.pledge = !!document.querySelector('[name=pledge]').checked;
    }
    return {
        form_name: 'contact',
        fields,
        increments,
    }
}

function updateCallback () {
    // Force a full state rerender
}

