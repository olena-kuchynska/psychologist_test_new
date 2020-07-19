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
                    <img class="firstTree" src="./images/tree-1.png" />
                    <div class="title-for-block">Мои основные принцыпы</div>
                    <ul class="principles__list">
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">
                                <span>&#10625;</span>Конфидециальность
                            </p>
                            <p class="principles__block-text">
                            Я с уважением отношусь к жизненным историям
                            своих клиентов и гарантирую сохранность информации.
                            </p>
                        </li>
                        <li class="principles__list-block">
                            <p class="principles__block-title">
                                <span>&#10625;</span>Профиссионализм
                            </p>
                            <p class="principles__block-text">
                            Я постоянно повышаю свою квалификацию, расширяю возможности,
                            инструменты для помощи клиентам.
                            </p>
                        </li>
                        <li class="principles__list-block">
                            <p class="principles__block-title">
                                <span>&#10625;</span>Ответственность
                            </p>
                            <p class="principles__block-text">
                            Я работаю только в границах своей окомпетенстности и
                            несу ответственность за выбранные процедуры и методы.
                            </p>
                        </li>
                        <li class="principles__list-block">
                            <p class="principles__block-title">
                                <span>&#10625;</span>Благополучие клиента
                            </p>
                            <p class="principles__block-text">
                            Нет одинаковых людей. К каждому клиенту индивидуальный
                            подход с учетом особенностей личности и ситуации.
                            </p>
                        </li>
                    </ul> 
                </div>
                <div class="questions" id="questions">
                    <img class="secondTree" src="./images/tree-2.png" />
                    <div class="title-for-block">Часто задаваемые вопросы</div>

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
                    <img class="thirdTree" src="./images/tree-3.png" />
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
            <div>
            <p>
            </p>
            <p>
            </p>
            </div>
            <div>
            </div>

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