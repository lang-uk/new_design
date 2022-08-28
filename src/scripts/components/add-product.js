import NiceSelect from '../nice-select2.js';


export const initAddProduct = () => {
    const selects = document.querySelectorAll('select');

    if (selects && selects.length) {
        selects.forEach((select) => {
            new NiceSelect(select);
        });
    }

    if (typeof tinymce !== 'undefined') {
        tinymce&&tinymce.init({selector: 'textarea.editor'});
    }

    const form = document.querySelector('form.add-product-form');

    form&&form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log('submot');
    });
}