export default class CabinetView {
    constructor() {        

    }

    showForm() { 

        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = `
        <div class="cabinet">
            <img class="cabinet__img" src="./images/cabinet.png" alt="cabinet" />
            <!--<span class="cabinet__description cabinet__description-first">Можем<br />перекусить</span>
            <span class="cabinet__description cabinet__description-second">Мое образование</span>
            <span class="cabinet__description cabinet__description-third cabinet__description--right">Забавные<br />подарки</span>
            <span class="cabinet__description cabinet__description-fourth">Много<br />интересного</span>
            <span class="cabinet__description cabinet__description-fifth cabinet__description--right">Искусство<br />в основе</span>
            <span class="cabinet__description cabinet__description-sixth">Групповые<br />занятия</span>
            <span class="cabinet__description cabinet__description-seventh">Все для вашего комфорта</span>-->
        </div>
        <article class="location">
            <h1 class="location__title">Мой кабинет</h1>
            <p class="location__description">Как и в своей работе, в моем кабинете я стараюсь создать атмосферу комфорта и уюта.</p>
            <div class="location__map"> 
                <iframe  class="location__map-bg" src="https://www.google.com/maps/d/embed?mid=1KWKO1v_9qWF90PK3R7huW-_5hlCmCxeq" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                <span class="location__map-adress">Украина, Днепр,<br />Крутогорный спуск, 16А</span>
            </div>    
        </article>
         `;
        
    }

    reorganizedView() {               
        const container = document.querySelector('.wrapper');
        container.classList.add('wrapper__cabinet');

        /*const body = document.querySelector('body');
        body.setAttribute('style','overflow-y: hidden;');*/

        const block = document.querySelector('.containier');
        block.classList.add('containier--another');        
    }
}