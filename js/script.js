class AboutView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.wrapper');

        container.innerHTML =`
        <div class="containier">
                <header class="header">
                    <input id="burger" type="checkbox" class="header__burger-state"/>                
                    <label for="burger" class="header__burger-btn">
                        <!--<span class="header__burger-icon1"></span>-->
                        <span class="header__burger-icon2"></span>
                        <span class="header__burger-icon3"></span>
                    </label>
                    <nav> 
                        <ul class="header-nav">
                            <li class="header-nav__item">
                                <a href="#" class="header-nav__link">Обо мне</a>
                            </li>
                            <li class="header-nav__item">
                                <a href="#" class="header-nav__link">Консультации</a>
                            </li>
                            <li class="header-nav__item">
                                <a href="#" class="header-nav__link">Кабинет</a>
                            </li>
                            <li class="header-nav__item">
                                <a href="#recording" class="header-nav__link">Записаться</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <article class="article">
                    <div class="article__photo">
                    </div>
                    <div class="article__info">
                        <p class="article__info-title">Татьяна Колесник</p>
                        <p class="article__info-subtitle">Психолог, психотерапевт</p>
                        <p class="article__info-text">
                        Я помогаю улучшить качество жизни и конструктивно решать проблемы,
                        от конфликтов в семье до вопросов саморазвития.
                        </p>
                    </div>
                </article>                
                </div>
                <main class="mainContent">
                    <div class="principles" id="principles">
                        <img class="tree tree__first" src="./images/tree-1.png" alt="tree"/>
                        <div class="title-for-block">Мои основные принцыпы</div>
                        <ul class="principles__list">
                            <li class="principles__list-block">                            
                                <p class="principles__block-title">
                                    <!--<span>&#10625;</span>-->Конфидециальность
                                </p>
                                <p class="principles__block-text">
                                    Я с уважением отношусь к жизненным историям
                                    своих клиентов и гарантирую сохранность информации.
                                </p>
                            </li>
                            <li class="principles__list-block">
                                <p class="principles__block-title">
                                    <!--<span>&#10625;</span>-->Профиссионализм
                                </p>
                                <p class="principles__block-text">
                                    Я постоянно повышаю свою квалификацию, расширяю возможности,
                                    инструменты для помощи клиентам.
                                </p>
                            </li>
                            <li class="principles__list-block">
                                <p class="principles__block-title">
                                    <!--<span>&#10625;</span>-->Ответственность
                                </p>
                                <p class="principles__block-text">
                                    Я работаю только в границах своей окомпетенстности и
                                    несу ответственность за выбранные процедуры и методы.
                                </p>
                            </li>
                            <li class="principles__list-block">
                                <p class="principles__block-title">
                                    <!--<span>&#10625;</span>-->Благополучие клиента
                                </p>
                                <p class="principles__block-text">
                                    Нет одинаковых людей. К каждому клиенту индивидуальный
                                    подход с учетом особенностей личности и ситуации.
                                </p>
                            </li>
                        </ul> 
                    </div>
                    <div class="questions" id="questions">
                        <img class="tree tree__second" src="./images/tree-2.png" alt="tree"/>
                        <div class="title-for-block">Часто задаваемые вопросы</div>
                        <div id="carouselQuestions" class="carousel slide carousel-fade" data-ride="carousel">
                            <ol class="carousel-indicators" id="first">
                                <li data-target="#carouselQuestions" data-slide-to="0" class="active">
                                    К психологу ходят только нездоровые. Вы хотите сказать, что я теряю рассудок?
                                </li>
                                <li data-target="#carouselQuestions" data-slide-to="1">
                                    Если ты слабак, то иди к психологу. Сильные личности справляются сами?
                                </li>
                                <li data-target="#carouselQuestions" data-slide-to="2">
                                    Мне стыдно говорить об этом с чужим человеком
                                </li>
                                <li data-target="#carouselQuestions" data-slide-to="3">
                                    Откуда ему знать, каково мне? И как он может помочь, если никогда не был на моем месте?
                                </li>
                                <li data-target="#carouselQuestions" data-slide-to="4">
                                    Можно не ходить к психологу пока не совсем все плохо. если будет невыносимо, тогда пойду
                                </li>
                            </ol>
                            <div class="carousel-inner" id="carousel-first">
                                <div id="item-0" class="carousel-item active answer">
                                    <p class="answer__block-text">
                                        Любой человек может столкнуться со сложностью, справиться с которой 
                                        самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                        это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                        Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                    </p>
                                    <span class="answer__block-author">Татьяна Колесник</span>                                
                                </div>
                                <div id="item-1" class="carousel-item answer">
                                    <p class="answer__block-text">
                                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
                                        Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. 
                                        В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя 
                                        Lorem Ipsum для распечатки образцов.
                                    </p>
                                    <span class="answer__block-author">Татьяна Колесник</span>                          
                                </div>
                                <div id="item-2" class="carousel-item answer">
                                    <p class="answer__block-text">
                                        Любой человек может столкнуться со сложностью, справиться с которой 
                                        самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                        это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                        Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                    </p>
                                    <span class="answer__block-author">Татьяна Колесник</span>                                                         
                                </div>
                                <div id="item-3" class="carousel-item answer">
                                    <p class="answer__block-text">
                                        Любой человек может столкнуться со сложностью, справиться с которой 
                                        самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                        это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                        Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                    </p>
                                    <span class="answer__block-author">Татьяна Колесник</span>                           
                                </div>
                                <div id="item-4" class="carousel-item answer">
                                    <p class="answer__block-text">
                                        Любой человек может столкнуться со сложностью, справиться с которой 
                                        самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                        это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                        Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                    </p>
                                    <span class="answer__block-author">Татьяна Колесник</span>                            
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="about">
                        <div class="about__block">
                            <p class="about__block-title">Обо мне</p>
                            <p class="about__block-text">
                            Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                            сертифицированный преподаватель практик, член Украинской
                            ассоциации когнитивно-поведенческой терапии,
                            член Украинского Союза Психотерапевтов,
                            Украинской Ассоциации Транзактного Анализа и
                            Европейской Ассоциации Транзактного Анализа.
                            </p>
                        </div>
                        <img class="tree tree__third" src="./images/tree-3.png" alt="tree" />
                    </div>
                    <div class="education" id="education">                
                        <img class="tree tree__fourth" src="./images/tree-4.png" alt="tree" />
                        <div class="title-for-block">Образование</div>
                        <div id="carouselEducation" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators" id="second">
                                <li data-target="#carouselEducation" data-slide-to="00" class="active">
                                    Schema Therapy training Standard and Advanced Level, Accredited by International Society of  Schema Therapy (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="01">
                                    Инструктор практик осознанности (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="02">
                                    Базовый 2-x годовой курс обучения УАТА по Транзакционному анализу в области психологии (2012)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="03">
                                    Introduction to Cognitive Behavioural Therapy, by the European Psychiatric Association (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="04">
                                    Профессиональное развитие в КПТ (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="05">
                                    Нейробиология в психотерапии (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="06">
                                    Фасилитатор практик осознанности: Mindfulness Practitioner Course: Level I, II, III & Master (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="07">
                                Когнитивно-поведенческая терапия расстройств регуляции злости. Когнитивно-поведенческая терапия усложненной реакции утраты (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="08">
                                Введение в Терапию принятия и ответственности (ACT) с элементами Функционального анализа поведения (FAP) и Теории реляционных рамок (RFT), (2018)
                                </li>
                                <li data-target="#carouselEducation" data-slide-to="09">
                                Когнитивно-поведенческая терапия социальной фобии. Когнитивно поведенческая терапия низкой самооценки (2017)
                                </li>
                            </ol>
                            <div class="carousel-inner" id="carousel-second">
                                <div id="item-00" class="carousel-item active">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                               
                                </div>
                                <div id="item-01" class="carousel-item">
                                <img class="certificate" src="./images/psyhologist-icon.png" alt="certificate" />                          
                                </div>
                                <div id="item-02" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-03" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-04" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-05" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-06" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-07" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-08" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                                <div id="item-09" class="carousel-item">
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                                </div>
                            </div>
                        </div>
                    </div>                
                </main>
                <section class="recording" id="recording">
                    <form class="recording__block">
                        <div class ="recording__block-acticle">
                            <p class="recording__block-title">Запишитесь на&nbsp;консультацию</p>
                            <p class="recording__block-text">
                            Я помогаю улучшить качество жизни и
                            конструктивно решать проблемы, от конфликтов
                            в семье до вопросов саморазвития.
                            </p>
                        </div>
                        <button class="recording__block-button"><a href="tg://resolve?domain=bulatik0101" target="_blank">Написать в Telegram</a></button>
                    </form>
                </section>
                <footer class="footer">
                    <div class="footer__block">
                        <p class="footer__block-subtitie">
                        Психолог, психотерапевт
                        </p>
                        <p class="footer__block-text footer__block-text--name">
                        Татьяна Колесник
                        </p>
                    </div>
                    <div class="footer__block">
                        <p class="footer__block-subtitie">
                        Звоните с 11 до 20
                        </p>
                        <p class="footer__block-text">
                        +38 067 563 63 15
                        </p>
                    </div>
                    <div class="footer__block">
                        <p class="footer__block-subtitie">
                        или пишите в любое время
                        </p>
                        <p class="footer__block-text">
                        hello@happylife.dp.ua
                        </p>
                    </div>
                    <div class="footer__block">
                        <p class="footer__block-subtitie">
                        следите за новостями
                        </p>
                        <ul class="footer__social-list">
                        <li class="footer__social-item">
                        <a href="https://uk-ua.facebook.com" target="_blank" class="footer__social-item--facebook">Facebook</a>
                        </li>
                        <li class="footer__social-item">
                        <a href="https://twitter.com" target="_blank" class="footer__social-item--twitter">Twitter</a>
                        </li>
                        <li class="footer__social-item">
                        <a href="https://www.youtube.com" target="_blank" class="footer__social-item--youtube">Youtube</a>
                        </li>
                        <li class="footer__social-item">
                        <a href="https://www.instagram.com/" target="_blank" class="footer__social-item--instagram">Instagram</a>
                        </li>
                        </ul>
                    </div>
                    <div class="footer__logo">Fedorov<br /> Desing Studio</div>
                </footer>`;
    }

    reorganizedView() {
        const block = document.querySelector('.containier');
        block.classList.remove('containier--another');
        const container = document.querySelector('.wrapper');
        container.classList.remove('wrapper__cabinet');
        container.removeAttribute('style');
        const mainContent = document.querySelector('.mainContent');/* 
        mainContent.classList.remove('mainContent__horizontal');
        const recordingBlock = document.querySelector('.recording__block');
        recordingBlock.classList.remove('recording__block--smaller'); */
        mainContent.innerHTML = '';

        const articalPhoto = document.querySelector('.article__photo');        
        const articalInfoText = document.querySelector('.article__info-text');  
        const recordingButton = document.querySelector('.recording__block-button');
        const recording = document.querySelector('.recording');

        if(articalPhoto && articalInfoText) {

            articalPhoto.remove();
            articalInfoText.remove();        

            const article = document.querySelector('article');
            article.classList.add('article--another');

            recordingButton.innerText = 'Отправить';
            recording.classList.add('recording--new')

            const recordingInfo = document.createElement('div');
            recordingInfo.classList.add('recording__block-form');
            recordingButton.before(recordingInfo);


            const inputName = document.createElement('input');
            inputName.classList.add('recording__block-form-input');
            const inputPhone = document.createElement('input');
            inputPhone.classList.add('recording__block-form-input');
            const inputDate = document.createElement('input');
            inputDate.classList.add('recording__block-form-input');
            inputDate.setAttribute('type','datetime-local');
            const inputComments = document.createElement('input');
            inputComments.classList.add('recording__block-form-input');

            const titleName = document.createElement('p');
            titleName.innerText = 'Ваше имя';
            titleName.classList.add('recording__block-form-title');
            const titlePhone = document.createElement('p');
            titlePhone.innerText = 'Ваш номер телефона';
            titlePhone.classList.add('recording__block-form-title');
            const titleDate = document.createElement('p');
            titleDate.innerText = 'Удбные даты и время';
            titleDate.classList.add('recording__block-form-title');
            const titleComments = document.createElement('p');
            titleComments.innerText = 'Что вы ожидаете от встречи?';
            titleComments.classList.add('recording__block-form-title');
            recordingInfo.appendChild(titleName);
            recordingInfo.appendChild(inputName);
            recordingInfo.appendChild(titlePhone);
            recordingInfo.appendChild(inputPhone);
            recordingInfo.appendChild(titleDate);
            recordingInfo.appendChild(inputDate);            
            recordingInfo.appendChild(titleComments);
            recordingInfo.appendChild(inputComments);


        }        
    }
}

class AboutForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }
    handleReorganized() {
        this.view.reorganizedView();
    }
}

class AboutFormControll {
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

            if(currentEvent!=='Записаться') {
                this.subscribers.publish('reorganized');
                if(currentEvent === 'Обо мне') {
                    this.subscribers.publish('about');/* 
                    history.pushState(null, null, '/about'); */
                } else if(currentEvent === 'Консультации') {
                    this.subscribers.publish('consultation');/* 
                    history.pushState(null, null, '/consultation'); */
                } else if(currentEvent === 'Кабинет') {
                    this.subscribers.publish('cabinet');/* 
                    history.pushState(null, null, '/cabinet'); */
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
        
}

class ConsultationView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.wrapper');        

        

        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = `
            <div class="relationship">
                <div class="article-new">
                    <p class="article__info-title">Консультации</p>
                    <p class="article__info-subtitle article__info-subtitle--italic">Моя основная специализация&nbsp;&mdash; отношения.</p>
                    <div class="article-new__tree"></div>
                    <!--<img class="tree tree__first--consult" src="./images/tree-3.png" alt="tree" />-->
                </div>
                    <div class="relationship__image">
                        <div class="relationship__image-block"></div>
                    </div>
                    <ul class="principles__list">
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с собой</p>
                            <p class="principles__block-text">
                                Самоактуализация, смыслы, счастье, радость, вопросы собственной свободы и авторства своей жизни…
                            </p>
                        </li>
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с собой</p>
                            <p class="principles__block-text">
                                Самоактуализация, смыслы, счастье, радость, вопросы собственной свободы и авторства своей жизни…
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с собой</p>
                            <p class="principles__block-text">
                                Самоактуализация, смыслы, счастье, радость, вопросы собственной свободы и авторства своей жизни…
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с собой</p>
                            <p class="principles__block-text">
                                Самоактуализация, смыслы, счастье, радость, вопросы собственной свободы и авторства своей жизни…
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с собой</p>
                            <p class="principles__block-text">
                                Самоактуализация, смыслы, счастье, радость, вопросы собственной свободы и авторства своей жизни…
                            </p>
                        </li>                      
                    </ul>    
                <img class="tree tree__second--consult" src="./images/tree-2.png" alt="tree" />
            </div>
            <div class="organisational__block">
                <p class="title-for-block">Организационные моменты</p>
                <p class="organisational__block-text">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p>
                <p class="organisational__block-text">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p> 
                <p class="organisational__block-text">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p>             
            </div>
            <section class="answer">
                <div class="answer__block">
                    <img class="tree tree__third--consult" src="./images/tree-1.png" alt="tree" />
                    <span class="answer__block-text answer__block--new">Читать отзывы</span>                           
                </div>                         
            </section>
            <div class="toDoList">
                <div class="toDoList__iDo">
                    <p class="toDoList__title">Что я делаю</p>
                    <ul class="toDoList__list">
                        <li>Элементы схема-терапии;</li>
                        <li>Элементы когнитивно-поведенческой психотерапии</li>
                        <li>Элементы терапии основанной на осознанности;</li>
                        <li>Элементы схема-терапии;</li>
                        <li>Элементы схема-терапии;</li>
                        <li>Элементы схема-терапии;</li>
                        <li>Элементы схема-терапии;</li>
                        <li>Элементы схема-терапии;</li>
                    </ul>
                </div>
                <div class="toDoList__iNotDo">
                    <div class="toDoList__iNotDo--block"> 
                        <p class="toDoList__title">Что я не делаю</p>
                        <ul class="toDoList__list">
                            <li>гипноз и внушение;</li>
                            <li>навязывание мнения и взглядов;</li>
                            <li>навязывание мнения и взглядов;</li>
                            <li>навязывание мнения и взглядов;</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        `;
    }

    showFeedbacks() {
        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = `
        <section class="answer answer--feedbacks">
            <h1 class="answer__title">Отзывы</h1>     
            <div class="answer__block">
                <img class="tree tree__first--feedbacks" src="./images/tree-1.png" alt="tree" />
                <div class="answer__block-text">Сразу же после первого сеанса с Татьяной я вышла с широкой улыбкой на лице. Проблемы превратились в решаемые задачи и абсолютно перестали беспокоить, как это было раньше. Очень приятный и светлый человек. Татьяна, огромное Вам спасибо!</div>                           
                <span class="answer__block-author">Татьяна Колесник</span>
            </div>
            <div class="answer__block answer__block--even">
                <img class="tree tree__second--feedbacks" src="./images/tree-3.png" alt="tree" />
                <div class="answer__block-text answer__block-text--even">Пришла к Татьяне в полном состоянии не ресурса и апатии. Было чувство, что запуталась в жизни, понимания "Кто я?" и "Чем хочу заниматься". Всего несколько встреч с Ириной помогли вернутся в ресурсное состоянии и желания творить. Больше всего понравилось, что все индивидуально и работа идет по моему запросу. Я люблю решать проблемы быстро и Татьянаподкупила тем, что не надо будет ходить 1,5 года на терапию чтобы решить мою задачу. Хотя другие специалисты предлагали свои услуги от 10 встреч и более :) Татьяна, огромная благодарность за профессионализм, индивидуальны подход и кропотливый труд в нашей совместной работе. Не всегда было легко, но однозначно этого того стоило. Я теперь точно знаю к кому идти, если на жизненном пути возникли трудности. И вам рекомендую.</div>                      
                <span class="answer__block-author answer__block-author--even">Татьяна Колесник</span></div>                          
            <div class="answer__block">
                <div class="answer__block-text">Мені достатньо було одного візиту до Татьяни ,щоб зрозуміти всю суть моєї проблеми,і дійсно зараз я дуже щаслива,і кохана людина,тим паче і сама кохаю, спілкування було дуже приємним, і я змогла повністю розкритися психологу.Хочу вас подякувати Ірино,за те що ви є,і допомагаєте людям,іноді сам ти не взмозі зрозуміти ,і друзі і рідні теж не можуть тобі відкрити очі і допомогти ,тому звернення до психолога це вихід,тим більш допомога собі розібратися в свої думках,які дуже швидку змінюються.Ви мені дуже допомогли ,я дуже щаслива.Дякую.</div>                           
                <span class="answer__block-author">Татьяна Колесник</span></div>                          
            </div> 
            <div class="answer__block answer__block--even">
                <img class="tree tree__third--feedbacks" src="./images/tree-5.png" alt="tree" />
                <div class="answer__block-text answer__block-text--even">Хочу поблагодарить Татьяну за помощь! Мне очень помогли консультации. Я осознала некоторые очевидные вещи в своей жизни, о которых раньше даже не задумывалась. Смогла изменить отношение к проблемам из прошлого, которые до сих пор меня беспокоили, и, что самое важное, переосмыслить свое будущее.</div>                           
                <span class="answer__block-author answer__block-author--even">Татьяна Колесник</span></div>                          
            </div> 
            <div class="answer__block">
                <img class="tree tree__fourth--feedbacks" src="./images/tree-3.png" alt="tree" />
                <div class="answer__block-text">Обращалась по поводу проблем после того, как переболела серьезной болезнью и лежала в больнице. Хотя у меня есть не одна подруга, рассказывать им о своих проблемах было сложно. Да и что они могли посоветовать - "не парься и все пройдет". После нескольких сеансов поняла для себя, что все проблемы, которые у меня есть находятся у меня внутри и справиться с ними могу я сама. И это было как-то удивительно - вроде человек тебе помогает, но и вроде как ты помогаешь себе сама. Я очень благодарна и сейчас прохожу терапию у Татьяны!</div>                           
                <span class="answer__block-author">Татьяна Колесник</span></div>
            </div> 
            <div class="answer__block answer__block--even">
                <div class="answer__block-text answer__block-text--even">Моя история прихода к психологу Татьяне, начинается с того ,что я запутался сам в себе. Я как бы знал что мне делать и в тоже время не знал... Наверное эта ситуация знакома многим. Буду краток, мне кажется что каждый из нас нуждается во взгляде на наш внутренний мир, и лучше когда это делает профессионал своего дела. Огромное спасибо за профессиональную консультацию. С признательностью и уважением Юра. =))</div>                           
                <span class="answer__block-author answer__block-author--even">Татьяна Колесник</span></div>                          
            </div> 
        </section>`

    }
}


class ConsultationForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }
    handleFeedbacks() {
        this.view.showFeedbacks();
    }
}

class ConsultationFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowForm() {
        this.model.handleShowForm();
        this.actionforForm();
    }
    
    handleFeedbacks() {
        this.model.handleFeedbacks();
    }

    actionforForm() {
        const answers = document.querySelector('.answer__block');
        answers.addEventListener('click', event => {
            window.scrollTo(pageXOffset, 0);
            this.handleFeedbacks();/* 
            history.pushState(null, null, '/consultation#feedbacks');   */                      
        });
    }
        
}

class CabinetView {
    constructor() {        

    }

    showForm() {
        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = `
        <img class="cabinet__img" src="./images/cabinet.png" alt="cabinet" />
        <article class="location">
            <h1 class="location__title">Мой кабинет</h1>
            <p class="location__description">Как и в своей работе, в моем кабинете я стараюсь создать атмосферу комфорта и уюта.</p>
            <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
            <div class="location__map"> 
            <iframe src="https://www.google.com/maps/d/embed?mid=1KWKO1v_9qWF90PK3R7huW-_5hlCmCxeq" width="350" height="220" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>    
        </article>
         <span class="cabinet__description cabinet__description-first">Можем<br />перекусить</span>
        <span class="cabinet__description cabinet__description-second">Мое образование</span>
        <span class="cabinet__description cabinet__description-third cabinet__description--right">Забавные<br />подарки</span>
        <span class="cabinet__description cabinet__description-fourth">Много<br />интересного</span>
        <span class="cabinet__description cabinet__description-fifth cabinet__description--right">Искусство<br />в основе</span>
        <span class="cabinet__description cabinet__description-sixth">Групповые<br />занятия</span>
        <span class="cabinet__description cabinet__description-seventh">Все для вашего комфорта</span>`;
        
    }

    reorganizedView() {
        /* const mainContent = document.querySelector('.mainContent');
        mainContent.classList.add('mainContent__horizontal'); */
         
        const container = document.querySelector('.wrapper');
        container.classList.add('wrapper__cabinet');

        const body = document.querySelector('body');
        body.setAttribute('style','overflow-y: hidden;');

        const block = document.querySelector('.containier');
        block.classList.add('containier--another');

        /* const recording = document.querySelector('.recording__block');
        recording.classList.add('recording__block--smaller'); */
        
    }


}


class CabinetForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }

    handleReorganized() {        
        this.view.reorganizedView();
    }
}

class CabinetFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    resizing() {
        let height = document.documentElement.clientHeight;
        const cabinet = document.querySelector('.cabinet__img');
        cabinet.setAttribute('style',`height: ${height}` + `px;`);
    }

    actionforForm() {
        this.resizing();
        /* window.addEventListener('resize',this.resizing()); */

    }

    handleShowForm() {      
        
        this.model.handleReorganized();        
        this.model.handleShowForm();
        this.actionforForm();
    }
        
}


class PubSub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }    
        this.subscribers[event].push(callback);
    }

    publish(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data));
    }
}


document.addEventListener ('DOMContentLoaded', function() {

    const subscribers = new PubSub();

    const aboutView = new AboutView();
    const aboutForm = new AboutForm(aboutView);
    const aboutFormController = new AboutFormControll(aboutForm, subscribers);

    const consultationView = new ConsultationView();
    const consultationForm = new ConsultationForm(consultationView);
    const consultationFormController = new ConsultationFormControll(consultationForm, subscribers);

    const cabinetView = new CabinetView();
    const cabinetForm = new CabinetForm(cabinetView);
    const cabinetFormController = new CabinetFormControll(cabinetForm, subscribers);    

    subscribers.subscribe('about', aboutFormController.handleShowForm.bind(aboutFormController));
    subscribers.subscribe('reorganized', aboutFormController.handleReorganized.bind(aboutFormController));
    subscribers.subscribe('consultation', consultationFormController.handleShowForm.bind(consultationFormController));
    subscribers.subscribe('cabinet', cabinetFormController.handleShowForm.bind(cabinetFormController));
    
    aboutFormController.handleShowForm();

});