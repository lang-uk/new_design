/*
Default usage
<div data-collapse data-collapse-open="true" data-collapse-target=".nameOfCollapseClass">
</div>

<div class="nameOfCollapseClass">
</div>

Or import Collapse class and extend of it

class CollapseOther extends Collapse {
  constructor() {
    super()
    this.$selector = '.js-collapse-other';
  }

  afterShow($target) {
  }

  afterHide($target) {
  }
}

const collapse = CollpaseOther();
....
....
collapse.show()
collapse.hide()
*/

import { sleep, stringToHash } from '../utils.js'

export class Collapse {
    constructor(selector = '[data-collapse]', config = {}) {
        this.config = {
            transitionDuration: 200,
            saveState: false,
            ...config
        }
        this.selector = selector
        this.isActive = false

    }


    init() {
        if (typeof this.selector === 'object' && this.selector.nodeType !== undefined) {
            this.collapse = this.selector
        } else if (typeof this.selector === 'string') {
            this.collapse = document.querySelector(this.selector)
        }

        if (!this.collapse.dataset.collapseTarget) {
            throw Error('data-collapse-target is not defined. Please specify data-collapse-target attribute')
        }

        this.collapseTargetSelector = this.collapse.dataset.collapseTarget
        this.collapseTarget = document.querySelectorAll(this.collapseTargetSelector)

        if (this.collapse.dataset.collapseSaveState) {
            this.config.saveState = this.collapse.dataset.collapseSaveState
        }
        if (this.collapse.dataset.collapseTransitionDuration) {
            this.config.transitionDuration = parseInt(this.collapse.dataset.collapseTransitionDuration, 10)
        }

        this.collapseTarget.forEach((target) => {
            if (this.open) {
                this.show()
            } else {
                target.style.maxHeight = 0
                target.style.overflow = 'hidden'
            }

            target.style.transitionProperty = 'max-height'
            target.style.transitionDuration = `${this.config.transitionDuration}ms`
        })

        this.collapse.addEventListener('click', (e) => {
            if (this.open) {
                // this.collapse.innerHTML = `<p class="button-s"> Показати більше </p> <img src="./img/vector_1.png">`
                this.hide()
            } else {
                this.show()
                // this.collapse.innerHTML = `<p class="button-s"> Показати менше </p> <img src="./img/vector_2.png">`
            }
        })
    }

    get elementId() {
        const hashString = window.location.pathname + this.collapseTargetSelector
        const hash = stringToHash(hashString)
        return `collapse-${hash}`
    }

    get open() {
        const dataState = this.collapse.dataset.collapseOpen === 'true'
        let storageState = false
        if (this.config.saveState) {
            storageState = localStorage.getItem(this.elementId) === 'true'
        }
        return dataState || storageState
    }

    set open(value) {
        this.collapse.dataset.collapseOpen = value
        this.collapseTarget.forEach(target => {
            target.dataset.collapseOpen = value
        })
        if (this.config.saveState) {
            localStorage.setItem(this.elementId, value)
        }
    }

    show() {
        if (!this.isActive) {
            this.isActive = true
            this.open = true


            this.collapseTarget.forEach(target => {
                target.style.maxHeight = `${target.scrollHeight}px`
            })
            // Sleep for duration of transition
            sleep(this.config.transitionDuration).then(() => {
                this.collapseTarget.forEach(target => {
                    target.style.maxHeight = ''
                    target.style.overflow = ''
                })
                this.isActive = false
            })
        }
    }

    hide() {
        if (!this.isActive) {
            this.isActive = true
            this.open = false

            this.collapseTarget.forEach(target => {
                target.style.overflow = 'hidden'
                target.style.maxHeight = `${target.scrollHeight}px`
            })
            sleep(100).then(() => {
                this.collapseTarget.forEach(target => {
                    target.style.maxHeight = '0px'
                })
            })
            sleep(this.config.transitionDuration + 100).then(() => {
                this.isActive = false
            })
        }
    }
}

export const initCollapse = () => {
    document.querySelectorAll('[data-collapse=""]').forEach(value => {
        const collapse = new Collapse(value)
        collapse.init()
    })
}