class Calculator {
    constructor(selector) {
        this.selector = selector;
        this.buttonDOM = null;
        this.atsakymasDOM = null;
        this.lygtisDOM = null;
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
        this.addEvents();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    render() {
        let HTML = `   <main class="calc-turinys">
        <div class="ekraniukas">
            <div class="atsakymas"></div>
            <div class="lygties-dalis"></div>
        </div>
        <div class="mygtuku-dalis">
            <div class="button sviesus">C</div>
            <div class="button sviesus">+/-</div>
            <div class="button sviesus">%</div>
            <div class="button tamsus">/</div>
            <div class="button balti">1</div>
            <div class="button balti">2</div>
            <div class="button balti">3</div>
            <div class="button tamsus">*</div>
            <div class="button balti">4</div>
            <div class="button balti">5</div>
            <div class="button balti">6</div>
            <div class="button tamsus">-</div>
            <div class="button balti">7</div>
            <div class="button balti">8</div>
            <div class="button balti">9</div>
            <div class="button tamsus">+</div>
            <div class="button balti">0</div>
            <div class="button balti">.</div>
            <div class="button balti">&lt</div>
            <div class="button raudonas">=</div>
        </div>
    </main>`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);

        this.buttonDOM = document.querySelectorAll('.button');
        this.atsakymasDOM = document.querySelector('.atsakymas');
        this.lygtisDOM = document.querySelector('.lygties-dalis');

    }

    addEvents() {
        this.buttonDOM.addEventListener('click', e => {
            //   let lygtis = '';
            //   for (const mygtukas of )
            this.lygtisDOM.innerText += this.buttonDOM.innerText;
            return this.lygtisDOM.innerText
        })

    }
}

export { Calculator }