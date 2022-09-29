import barba from '@barba/core';
import gsap from 'gsap';
import { initButtons } from './button-wave.js'
import { initCopyText } from './copy-text.js'
import { initSliders } from './slider.js'
import { initCookie } from './cookie.js'
import { initAccordions } from './accordions.js'
import { initForms } from './form.js'
import { initAddProduct } from './add-product.js'
import { initTinyMce } from './add-product.js'
import { initHeaderTransition } from './header.js'


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
                duration: .6,
                yPercent: 0,
                ease: 'Power4.inOut',
            });
    }

    function loaderAway() {
        return gsap.to(loader, {
            duration: .6,
            yPercent: -110,
            ease: 'Power4.inOut'
        });
    }

    function loadScripts(container) {
        return new Promise((resolve, reject) => {            
            let script = document.createElement('script');
            script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js';
            container.appendChild(script);

            script.onload = initTinyMce;
            resolve();
        })
    }


    barba.init({
        sync: true,
        transitions: [{
            name: 'cover',
            async leave() {
                await loaderIn();
            },
            enter() {
                loaderAway();
            }
        }],
        views: [{
            namespace: 'add-product',
            async beforeEnter({ next }) {
                await loadScripts(next.container);
            }, 
        }],
    });

    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
    });

    barba.hooks.beforeEnter((data) => {
        initHeaderTransition();
        
        initButtons();

        initCopyText();

        initSliders();

        initCookie();

        initForms();

        initAccordions();

        initAddProduct();
    });
}