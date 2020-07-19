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

                </div>
                <div class="questions" id="questions">

                </div>
                <div class="about" id="about">

                </div>
                <div class="education" id="education">

                </div>
                <div class="recording" id="recording">

                </div>
            </main>            
            <footer class="footer">

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