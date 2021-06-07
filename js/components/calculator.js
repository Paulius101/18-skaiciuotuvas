class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = document.querySelector(selector);
        this.buttonsData = [
            { title: 'C', color: 'sviesus' },
            { title: '+/-', color: 'sviesus' },
            { title: '%', color: 'sviesus' },
            { title: '/', color: 'tamsus' },
            { title: '1', color: 'balti' },
            { title: '2', color: 'balti' },
            { title: '3', color: 'balti' },
            { title: '*', color: 'tamsus' },
            { title: '4', color: 'balti' },
            { title: '5', color: 'balti' },
            { title: '6', color: 'balti' },
            { title: '-', color: 'tamsus' },
            { title: '7', color: 'balti' },
            { title: '8', color: 'balti' },
            { title: '9', color: 'balti' },
            { title: '+', color: 'tamsus' },
            { title: '0', color: 'balti' },
            { title: '.', color: 'balti' },
            { title: '<', color: 'balti' },
            { title: '=', color: 'raudonas' },
        ];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    // render() {
    //     let HTML = ``;

    //     this.DOM.insertAdjacentHTML('beforeend', HTML);
    // }
}

export { Calculator }