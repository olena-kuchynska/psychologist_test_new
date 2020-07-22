class AppView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.wrapper');

        container.innerHTML = 
            `<header class="header">        
                <!--<input id="burger" type="checkbox" class="header__burger-state"/>                
                <label for="burger" class="header__burger-btn">
                    <span class="header__burger-icon1"></span>
                    <span class="header__burger-icon2"></span>
                    <span class="header__burger-icon3"></span>
                </label>-->
                <nav> 
                    <ul class="header-nav">
                        <li class="header-nav__item">
                            <a href="#about" class="header-nav__link">Обо мне</a>
                        </li>
                        <li class="header-nav__item">
                            <a href="" class="header-nav__link">Консультации</a>
                        </li>
                        <li class="header-nav__item">
                            <a href="" class="header-nav__link">Кабинет</a>
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
                            <li data-target="#carouselExampleIndicators" data-slide-to="2">Мне стыдно говорить об этом с чужим человеком</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3">Откуда ему знать, каково мне? И как он может помочь, если никогда не был на моем месте?</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="4">Можно не ходить к психологу пока не совсем все плохо. если будет невыносимо, тогда пойду</li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <p>
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>                                
                            </div>
                            <div class="carousel-item">
                                <p>
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>                          
                            </div>
                            <div class="carousel-item">
                                <p>
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>                                                         
                            </div>
                            <div class="carousel-item">
                                <p>
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>                            
                            </div>
                            <div class="carousel-item">
                                <p>
                                    Любой человек может столкнуться со сложностью, справиться с которой 
                                    самому не всегда бывает под силу. Это не значит, что он слаб и безнадежен,
                                    это значит, что необходимо найти дополнительный ресурс. Этим ресурсом становится психолог. 
                                    Вы же обращаетесь к стоматологу, когда болит зуб, не потому, что вы — слабак?
                                </p>                            
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
                    <div class="title-for-block">Образование</div>

                </div>
                <div class="recording" id="recording">
                    <div class="recording__block">
                    <div class ="recording__block-acticle">
                        <p class="recording__block-title">Запишитесь на консультацию</p>
                        <p class="recording__block-text">
                        Я помогаю улучшить качество жизни и
                        конструктивно решать проблемы, от конфликтов
                        в семье до вопросов саморазвития.
                        </p>
                    </div>                    
                        <button class="recording__block-button">Написать в Telegram</button>
                    </div>
                </div>
            </main>            
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
                <img class="footer__block footer__block--logo" src="../images/logo-desing.png" alt="logo"/>
            </footer>`;
    }
}

class AppForm {
    constructor(view) {
        this.view = view;        
    }

    handleShowForm() {
        this.view.showForm();
    }
}

class AppFormControll {
    constructor(model) {
        this.model = model;
    }

    handleShowForm() {
        this.model.handleShowForm();
    }
        
}


document.addEventListener ('DOMContentLoaded', function() {

    const appView = new AppView();
    const appForm = new AppForm(appView);
    const appFormControll = new AppFormControll(appForm);
    
    appFormControll.handleShowForm();

});