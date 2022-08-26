
function initFormsListener() {
	const forms = document.querySelectorAll('form.form');
	
	if (forms && forms.length) {
		forms.forEach((form) => {
			const formRequiredFields = form.querySelectorAll('.required');

			formRequiredFields.forEach((field) => {
				field.addEventListener('focus', function(e) {
					field.parentNode.classList.remove('error')
				})
			});

			form.addEventListener('submit', function(e) {
				e.preventDefault();
				let countErrors = 0;

				formRequiredFields.forEach((field) => {
					if (field.name == 'email') {
						if (!validateEmail(field.value)) {
							field.parentNode.classList.add('error');
							countErrors++;
						} else {
							field.parentNode.classList.remove('error');
						}
					} else {
						if (field.value.length <= 2) {
							field.parentNode.classList.add('error');
							countErrors++;
						} else {
							field.parentNode.classList.remove('error');
						}
					}
				});

				if (countErrors > 0) {
					return false;
				}

				formAjaxSend(form);
			});
		});
	}
}

function formAjaxSend(form) {
	const actionInput = form.querySelector('input[name="action"]');
    const urlInput = form.querySelector('input[name="url"]');

	if (actionInput && urlInput) {
        const url = urlInput.value + actionInput.value;
		const request = new XMLHttpRequest();
		const formFields = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
		let params = '';

		formFields.forEach((field, i) => {
			if (field.value) {
				if (i != 0) params += '&';
				params += field.name + '=' + field.value.replace(/\n/g, '<br/>');
			}
		});


		request.responseType = 'json';
		request.open('POST', url, true);
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		 
		request.send(params);

		request.onload = function() {
			if (request.readyState === 4 && request.status === 200) {
				formSuccessSubmit(form);
			}
		}		
	} else {
		formSuccessSubmit(form);
	}
}


function formSuccessSubmit(form) {
    const redirect = form.querySelector('input[name="redirect"]');
	const formFields = form.querySelectorAll('input:not([type="hidden"], [type="radio"], [type="checkbox"])');

	formFields.forEach((field) => {
		field.value = '';
	});

    if (redirect) {
        window.location.pathname = redirect.value
    }
}


function validateEmail(email) {
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export const initForms = () => {
	
	initFormsListener();
}
