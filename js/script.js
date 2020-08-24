class AboutView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.wrapper');

        container.innerHTML = 
            `<header class="header">
                <input id="burger" type="checkbox" class="header__burger-state"/>                
                <label for="burger" class="header__burger-btn">
                    <span class="header__burger-icon1"></span>
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
            <main class="mainContent">
                <div class="principles" id="principles">
                    <img class="firstTree" src="./images/tree-1.png" alt="tree"/>
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
                    <img class="secondTree" src="./images/tree-2.png" alt="tree"/>
                    <div class="title-for-block">Часто задаваемые вопросы</div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                К психологу ходят только нездоровые. Вы хотите сказать, что я теряю рассудок?
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1">
                                Если ты слабак, то иди к психологу. Сильные личности справляются сами?
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2">
                                Мне стыдно говорить об этом с чужим человеком
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3">
                                Откуда ему знать, каково мне? И как он может помочь, если никогда не был на моем месте?
                            </li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4">
                                Можно не ходить к психологу пока не совсем все плохо. если будет невыносимо, тогда пойду
                            </li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active answer">
                                <p class="answer__block-text">
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>
                                <span>Татьяна Колесник</span>                                
                            </div>
                            <div class="carousel-item answer">
                                <p class="answer__block-text">
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>
                                <span>Татьяна Колесник</span>                          
                            </div>
                            <div class="carousel-item answer">
                                <p class="answer__block-text">
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>
                                <span>Татьяна Колесник</span>                                                         
                            </div>
                            <div class="carousel-item answer">
                                <p class="answer__block-text">
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>
                                <span>Татьяна Колесник</span>                           
                            </div>
                            <div class="carousel-item answer">
                                <p class="answer__block-text">
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>
                                <span>Татьяна Колесник</span>                            
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about" id="about">
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
                    <img class="thirdTree" src="./images/tree-3.png" alt="tree" />
                </div>
                <div class="education" id="education">                
                    <img class="fourthTree" src="./images/tree-4.png" alt="tree" />
                    <div class="title-for-block">Образование</div>
                    <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active">
                                Schema Therapy training Standard and Advanced Level, Accredited by International Society of  Schema Therapy (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1">
                                Инструктор практик осознанности (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2">
                                Базовый 2-x годовой курс обучения УАТА по Транзакционному анализу в области психологии (2012)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="3">
                                Introduction to Cognitive Behavioural Therapy, by the European Psychiatric Association (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="4">
                                Профессиональное развитие в КПТ (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="5">
                                Нейробиология в психотерапии (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="6">
                                Фасилитатор практик осознанности: Mindfulness Practitioner Course: Level I, II, III & Master (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="7">
                            Когнитивно-поведенческая терапия расстройств регуляции злости. Когнитивно-поведенческая терапия усложненной реакции утраты (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="8">
                            Введение в Терапию принятия и ответственности (ACT) с элементами Функционального анализа поведения (FAP) и Теории реляционных рамок (RFT), (2018)
                            </li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="9">
                            Когнитивно-поведенческая терапия социальной фобии. Когнитивно поведенческая терапия низкой самооценки (2017)
                            </li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                               
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                          
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                            <div class="carousel-item">
                            <img class="certificate" src="./images/certificate.png" alt="certificate" />                                                         
                            </div>
                        </div>
                    </div>
                </div>                
            </main>
            <section class="recording" id="recording">
                <div class="recording__block">
                    <div class ="recording__block-acticle">
                        <p class="recording__block-title">Запишитесь на консультацию</p>
                        <p class="recording__block-text">
                        Я помогаю улучшить качество жизни и
                        конструктивно решать проблемы, от конфликтов
                        в семье до вопросов саморазвития.
                        </p>
                    </div>                    
                    <button class="recording__block-button"><a href="tg://resolve?domain=bulatik0101" target="_blank">Написать в Telegram</a></button>
                </div>
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
                <img class="footer__block footer__block--logo" src="./images/logo-desing.png" alt="logo"/>
            </footer>`;
    }

    reorganizedView() {
        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = '';

        const articalPhoto = document.querySelector('.article__photo');        
        const articalInfoText = document.querySelector('.article__info-text');        

        if(articalPhoto && articalInfoText) {

            articalPhoto.remove();
            articalInfoText.remove();        

            const article = document.querySelector('article');
            article.classList.add('article--another');            
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

        navigation.addEventListener('click', event => {
            let currentElement = event.target.parentElement;
            let currentEvent = currentElement.innerText;
            if(currentElement!=='Записаться') {
                this.subscribers.publish('reorganized');
                if(currentEvent === 'Обо мне') {
                    this.subscribers.publish('about');
                } else if(currentEvent === 'Консультации') {
                    this.subscribers.publish('consultation');
                } else if(currentEvent === 'Кабинет') {
                    this.subscribers.publish('consulation');
                }
            }
            
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
            <div class="article-relationship">
                <div class="article-new">
                    <p class="article__info-title">Консультации</p>
                    <p class="article__info-subtitle article__info-subtitle--italic">Моя основная специализация&nbsp;&mdash; отношения.</p>
                </div>
                <div class="relationship">
                    <div class="relationship__image-block">
                        <div class="relationship__image"></div>
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
                </div>
            </div>
            <div class="organisational__block">
                <p class="title-for-block">Организационные моменты</p>
                <p class="organisational__block-title">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p>
                <p class="organisational__block-title">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p> 
                <p class="organisational__block-title">
                Я психолог, специализируюсь на личностно-центрированной терапии психотерапевт,
                сертифицированный преподаватель практик, член Украинской
                ассоциации когнитивно-поведенческой терапии,
                член Украинского Союза Психотерапевтов,
                Украинской Ассоциации Транзактного Анализа и
                Европейской Ассоциации Транзактного Анализа.
                </p>             
            </div>
            <div class="answer">
                <div class="answer__block">
                    <span class="answer__block-text answer__block--new">Читать отзывы</span>                           
                </div>                         
            </div>
            
        `;

        /* const articleNew = document.createElement('div');
        articleNew.setAttribute('class','article-new');
        mainContent.appendChild(articleNew);

        const articalCaption = document.createElement('div');
        articalCaption.setAttribute('class','article__info-title');
        articalCaption.innerText = 'Консультации';
        articleNew.appendChild(articalCaption);

        const articalSubtitle = document.createElement('div');
        articalSubtitle.setAttribute('class','article__info-subtitle');
        articalSubtitle.classList.add('article__info-subtitle--italic')
        articalSubtitle.innerHTML = 'Моя основная специализация&nbsp;&mdash; отношения.';
        articleNew.appendChild(articalSubtitle); */

        

    }
}


class ConsultationForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }
}

class ConsultationFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowForm() {
        this.model.handleShowForm();
    }
        
}

class CabinetView {
    constructor() {        

    }

    showForm() {
        
    }
}


class CabinetForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }
}

class CabinetFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowForm() {
        this.model.handleShowForm();
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