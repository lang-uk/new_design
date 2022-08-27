import barba from '@barba/core';
import gsap from 'gsap';
import { initButtons } from './button-wave.js'
import { initCopyText } from './copy-text.js'
import { initSliders } from './slider.js'
import { initCookie } from './cookie.js'
import { initAccordions } from './accordions.js'
import { initForms } from './form.js'

export const initTransition = () => {
    const loader = document.querySelector('.loader');

    loader && gsap.set(loader, {
        yPercent: 110,
        autoAlpha: 1
    });

    function loaderIn() {
        return gsap.fromTo(loader,
            {
                yPercent: 110
            },
            {
                duration: 1.2,
                yPercent: 0,
                ease: 'Power4.inOut',
            });
    }

    function loaderAway() {
        return gsap.to(loader, {
            duration: 1.2,
            yPercent: -110,
            ease: 'Power4.inOut'
        });
    }


    barba.init({
        transitions: [{
            name: 'cover',
            async leave() {
                await loaderIn();
            },
            enter() {
                loaderAway();
            }
        }]
    });

    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });

    barba.hooks.beforeEnter((data) => {
        initButtons();

        initCopyText();

        initSliders();

        initCookie();

        initForms();

        initAccordions();
    });
}