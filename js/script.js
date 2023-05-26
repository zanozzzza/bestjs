//МОДАЛЬНОЕ ОКНО
document.getElementById("buttonmodal").addEventListener("click", function(){
    document.getElementById("modal").classList.add("open");


})

document.getElementById("buttonclose").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("open");
})


const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
    cookies.style.display = "none";
});

//АККОРДЕОН
class ItcAccordion {
    constructor(target, config) {
        this._el = typeof target === 'string' ? document.querySelector(target) : target;
        const defaultConfig = {
        alwaysOpen: true
        };
        this._config = Object.assign(defaultConfig, config);
        this.addEventListener();
    }
    addEventListener() {
        this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
            return;
        }
        if (!this._config.alwaysOpen) {
            const elOpenItem = this._el.querySelector('.accordion__item_show');
            if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
            }
        }
        elHeader.parentElement.classList.toggle('accordion__item_show');
        });
    }
}

new ItcAccordion('#accordion-1');


