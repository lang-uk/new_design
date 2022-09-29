

function initAccordion(accordion) {
    const toggles = accordion.querySelectorAll('.accordion-toggle');
    const body = accordion.querySelector('.accordion-body');
    const list = accordion.parentNode;

    toggles&&toggles.length&&toggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();

            if (!accordion.classList.contains('active')) {
                accordionOpen(accordion, body, list.classList.contains('cards'));
            } else {
                accordionClose(accordion, body, list.classList.contains('cards'));
            }
        })
    })

    if (accordion.hasAttribute('data-open')) {
        accordionOpen(accordion, body);
    }
}


function accordionOpen(accordion, body, cards = false) {
    if (accordion && body) {
        accordion.classList.add('active');
        body.style.height = 'auto';

        let height = body.clientHeight + 'px';

        body.style.height = (cards) ? '160px' : '0px';

        setTimeout(() => { body.style.height = height }, 0);
    }
}


function accordionClose(accordion, body, cards = false) {
    if (accordion && body) {
        body.style.height = (cards) ? '160px' : '0px';

        body.addEventListener('transitionend', function () {
            accordion.classList.remove('active');
        }, { once: true });
    }
}



export const initAccordions = () => {
	const accordions = document.querySelectorAll('.accordion');

	if (accordions && accordions.length) {
	    accordions.forEach((accordion) => {
	        initAccordion(accordion);
	    });
	}

    const services = document.querySelector('.services');

    if (services) {
        const list = document.querySelector('.services-list');
        const types = document.querySelectorAll('.services-types .button-fill');

        types && types.length && types.forEach((button) => {
            button.addEventListener('click', e => {
                let type = button.dataset.type;

                if (!button.classList.contains('active')) {
                    types.forEach(item => { item.classList.remove('active') });

                    button.classList.add('active');

                    (type == 'cards') ? list.classList.add('cards') : list.classList.remove('cards');
                }
            })
        });
    }
}
