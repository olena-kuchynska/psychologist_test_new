export default class AboutFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowForm() {
        this.model.handleShowForm();
        this.actionforForm();
    }

    handleReorganized() {
        this.model.handleReorganized();
        this.actionForReorganized();
    }

    actionforForm() {
        const navigation = document.querySelector('.header-nav');
        const menu = document.querySelector('nav');
        const caruselIndicatorsAll = document.querySelectorAll('.carousel-indicators');
        const caruselInnerAll = document.querySelectorAll('.carousel-inner');
        const burger = document.querySelector('#burger');
        const article = document.querySelector('.article');
        const mainContent = document.querySelector('.mainContent');
        const recording = document.querySelector('.recording');                
        const footer = document.querySelector('.footer');
        const overlay = document.querySelector('.overlay');

        overlay.addEventListener('click', (event) => {
            overlay.classList.add('overlay--close');
        });


        burger.addEventListener('change', event => {  
            if (event.target.checked === true) {                                
                menu.setAttribute('style','display:block;');
                article.classList.add('blur');
                mainContent.classList.add('blur');
                footer.classList.add('blur');
                recording.classList.add('blur');
            } else {                
                article.classList.remove('blur');
                mainContent.classList.remove('blur');
                footer.classList.remove('blur');
                recording.classList.remove('blur'); 
                setTimeout(() => { menu.setAttribute('style','display:none;');},170);                
                setTimeout(() => { menu.removeAttribute('style');},200);
            }
            
        });

        navigation.addEventListener('click', event => {
            let currentElement = event.target;
            let currentEvent = currentElement.innerText;

            const body = document.querySelector('body');
            body.removeAttribute('style');
            burger.checked = false;
            
            article.classList.remove('blur');
            mainContent.classList.remove('blur');
            footer.classList.remove('blur');
            recording.classList.remove('blur');
            menu.removeAttribute('style');

            if(currentEvent!=='Записаться' && currentEvent.length < 20 ) {                
                event.preventDefault();                                    
                this.subscribers.publish('reorganized'); 
                let link = undefined;
                if(currentEvent === 'Обо мне') {
                    this.subscribers.publish('about');
                    history.pushState(null,null,`/`);
                } else {
                    if(currentEvent === 'Консультации') {
                        link = 'consultation';                    
                    } else if(currentEvent === 'Кабинет') {                    
                        link = 'cabinet';
                    }
                    history.pushState(null,null,`/${link}`);
                    this.subscribers.publish(link);
                }
                window.scrollTo(pageXOffset, 0);
            }
                        
        });

        window.addEventListener('popstate', () => {
            let currentEvent = window.location.href.split('http://localhost:3000/')[1];
            let recording = window.location.href.split('#')[1];
            if(!recording) {                             
                this.subscribers.publish('reorganized'); 
                let link = undefined;
                if(currentEvent === '') {
                    this.subscribers.publish('about');
                    history.pushState(null,null,`/`);
                } else {
                    if(currentEvent === 'consultation') {
                        link = 'consultation';                    
                    } else if(currentEvent === 'cabinet') {                    
                        link = 'cabinet';
                    } else if(currentEvent === 'feedbacks') {
                        link = 'feedbacks';
                    }
                    history.pushState(null,null,`/${link}`);
                    this.subscribers.publish(link);
                }
            }
        });


        caruselIndicatorsAll.forEach( caruselIndicators => { 

            caruselIndicators.addEventListener('click', event => {
                let currentElement = event.target;
                let parentElement = currentElement.parentElement;
                let currentClass = currentElement.classList;
                let statusActive = false;
                currentClass.forEach(item => {
                    if(item === 'active') {
                        statusActive = true;
                    } else {
                        statusActive = false;
                    }
                });

                if(!statusActive) {
                    parentElement.childNodes.forEach(item => {

                        if(item.classList) {
                            item.classList.remove('active');
                        } 
                        
                    })
                    currentElement.classList.add('active');
                    let numberAnswer = currentElement.getAttribute('data-slide-to');
                    let idCarusel = `carousel-${parentElement.id}`;
                    let inner;

                    caruselInnerAll.forEach(caruselInner => {
                        if(caruselInner.id === idCarusel) {
                            inner= caruselInner.childNodes;
                        }                         
                    });                 
                    
                    if(inner) {
                        inner.forEach(item => {

                            let idItem = item.id;
                        let id = `item-${numberAnswer}`;
                        let i = idItem===id;
    
                            if(item.classList) {
                                item.classList.forEach(className => {
                                    if(className === 'active') {
                                        item.classList.remove('active');

                                    } else if(idItem === id) {
                                        item.classList.add('active');
                                    }
                                });
                                
                            }   
                            
                        });

                    }

                }
            }); 
        }); 
        
    }

    listener(event) {
        const inputName = document.getElementsByName('name');
        const inputPhone = document.getElementsByName('phone');
        const inputDate = document.getElementsByName('date');
        const inputComments = document.getElementsByName('comments');
        
        let message = {
            name: inputName[0].value,
            phone: inputPhone[0].value,
            inputDate: inputDate[0].value,
            inputComments: inputComments[0].value,
        }

        if(inputPhone[0].value.length !== 17)  {inputPhone[0].setCustomValidity('Введите данные корректно');}
        else if(inputName[0].value !== "" && inputPhone[0].value !== "") {                
            event.preventDefault();
            this.model.sendMessage(message);
            const overlay = document.querySelector('.overlay');
            overlay.classList.remove('overlay--close');
        }
    }

    actionForReorganized() {
        const recordingButton = document.querySelector('.recording__block-button');                    
        recordingButton.removeEventListener('click', this.listener, false);
        recordingButton.addEventListener('click', this.listener);

        jQuery(function($){
            $('.recording__block-form-inputPhone').mask("+38 099 999 99 99");
        });
    }
        
} 