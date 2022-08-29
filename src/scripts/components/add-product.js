import NiceSelect from '../nice-select2.js';

class Chip {
    constructor(chip = '.chip') {
        this.chip = chip;
        this.input = this.chip.querySelector('.chip-input'); 

        this.input.addEventListener('keypress', e => {
            let value = this.input.value;

            if (e.which === 13 && value) {
                this.input.before(function() {
                    let newChip = document.createElement('div');
                    let newChipText = document.createElement('span');
                    let newChipButton = document.createElement('span');
    
                    newChip.classList.add('chip-list-item');
                    newChip.addEventListener('click', (e) => {
                        chip.removeChild(e.currentTarget);
                    });

                    newChipText.classList.add('chip-list-item__text');
                    newChipText.innerHTML = value;

                    newChipButton.classList.add('chip-list-item__button');
    
                    newChip.append(newChipText, newChipButton)
    
                    return newChip;
                }());
                
                this.input.value = '';
            }
        });
    }
}


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
    
    if (form) {
        // copy blocks
        const copyBlocks = form.querySelectorAll('.copy-block');

        copyBlocks&&copyBlocks.length&&copyBlocks.forEach((copy) => {
            const content = copy.querySelector('.copy-block-content'); 
            const buttonAdd = copy.querySelector('.copy-block-content__add'); 
            
            buttonAdd&&buttonAdd.addEventListener('click', (e) => {
                let extra = content.cloneNode(true);
                let extraCount = extra.querySelector('.copy-block-content__count');
                let extraButton = extra.querySelector('.copy-block-content__icon');
                let inputs = extra.querySelectorAll('input');
                let chip = extra.querySelector('.chip');
                let chips = extra.querySelectorAll('.chip-list-item');

                extra.classList.add('extra');
                extraButton.classList.remove('copy-block-content__add')
                extraButton.classList.add('copy-block-content__remove')

                inputs&&inputs.length&&inputs.forEach((input) => { input.value = '' })

                if (chip) new Chip(chip);

                chips&&chips.length&&chips.forEach((chip) => {
                    chip.parentNode.removeChild(chip);
                })

                copy.appendChild(extra);
            });
        });

        document.addEventListener('click', (el) => {
            if (el.target && el.target.classList.contains('copy-block-content__remove')) {
                let content = el.target.closest('.copy-block-content');
                
                content&&content.parentNode.removeChild(content);
            }
        });


        // chips
        const chips = form.querySelectorAll('.chip');

        chips&&chips.length&&chips.forEach((chip) => {
            new Chip(chip)
        });



        // form submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            // console.log('submit');
        });
    }
}

export const initTinyMce = () => {
    if (typeof tinymce !== 'undefined') {
        tinymce&&tinymce.init({selector: 'textarea.editor'});
    }
}