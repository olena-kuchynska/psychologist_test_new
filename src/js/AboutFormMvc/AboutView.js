export default class AboutView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.wrapper');

        container.innerHTML =`
        <div class="containier">
                <header class="header">
                    <input id="burger" type="checkbox" class="header__burger-state"/>                
                    <label for="burger" class="header__burger-btn">
                        <span class="header__burger-icon2"></span>
                        <span class="header__burger-icon3"></span>
                    </label>
                    <nav> 
                        <ul class="header-nav">
                            <li class="header-nav__item">
                                <a href="" class="header-nav__link">Обо мне</a>
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
                                <img class="certificate" src="./images/certificate.png" alt="certificate" />                          
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
                <section class="recording recording--close">
                    <form class="recording__block">
                        <div class="recording__block-acticle">
                            <p class="recording__block-title">Запишитесь на&nbsp;консультацию</p>
                            <p class="recording__block-text">
                            Я помогаю улучшить качество жизни и
                            конструктивно решать проблемы, от конфликтов
                            в семье до вопросов саморазвития.
                            </p>
                        </div>
                        <div class="recording__block-form">
                            <p class="recording__block-form-title">Ваше имя</p>
                            <input class="recording__block-form-input" 
                                placeholder="Констатнтин" required="required" 
                                name="name" 
                                autocomplete="off">
                            <p class="recording__block-form-title">Ваш номер телефона</p>
                            <input class="recording__block-form-input recording__block-form-inputPhone" 
                                placeholder="+38 066 605 91 25" required="required" 
                                name="phone" 
                                autocomplete="off" 
                                maxlength="17">
                            <p class="recording__block-form-title">Удбные даты и время</p>
                            <input class="recording__block-form-input"
                                placeholder="12 октября 2020"
                                name="date">
                            <p class="recording__block-form-title">Что вы ожидаете от встречи?</p>
                            <textarea class="recording__block-form-input recording__block-form-inputText"
                                placeholder="Хочу разобраться в отношениях в семье и с самим собой." 
                                name="comments" 
                                autocomplete="off"></textarea>
                        </div>
                        <div class="recording__block-send"><button class="recording__block-button">Отправить</button></div>
                        <div class="recording__block-close"><span class="recording__block-elem"></span></div>
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

    resetInfo() {        
        const inputName = document.getElementsByName('name');
        inputName[0].value = '';
        const inputPhone = document.getElementsByName('phone');
        inputPhone[0].value = '';
        const inputDate = document.getElementsByName('date');
        inputDate[0].value = '';
        const inputComments = document.getElementsByName('comments');
        inputComments[0].value = '';
    }
}