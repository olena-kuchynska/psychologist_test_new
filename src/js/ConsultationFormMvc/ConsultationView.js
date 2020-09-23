export default class ConsultationView {
    constructor() {
    }

    showForm() {
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
                            <p class="principles__block-title">Отношения в паре</p>
                            <p class="principles__block-text">
                                Психологический брачный контракт, ревность, конфликты в паре, предразводное состояние отношений, психологическое восстановление после развода и расставания, отсутствие секса и пр.
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения детей и родителей</p>
                            <p class="principles__block-text">
                                Как общаться с подростком и пережить переходной возраст, общение со свекровью, как прекратить контроль со стороны родителей, что делать если родители стареют, а я вспоминаю былые обиды… и т.д
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с коллективом</p>
                            <p class="principles__block-text">
                                Если угнетает начальник,  профессиональное выгорание, поиск своего места в профессии, конфликты с коллегами, что делать, если «вырос» из своей должности, что делать, если я достиг желаемой высоты в бизнесе и потерял интерес двигаться дальше…
                            </p>
                        </li>  
                        <li class="principles__list-block">                            
                            <p class="principles__block-title">Отношения с миром</p>
                            <p class="principles__block-text">
                            Если ничего не радует, нет интереса ни к чему и никому, страх отношений с другими людьми, боязнь публичных выступлений, неуверенность среди людей…
                            </p>
                        </li>                      
                    </ul>    
                <img class="tree tree__second--consult" src="./images/tree-2.png" alt="tree" />
            </div>
            <div class="organisational__block">
                <p class="title-for-block">Организационные моменты</p>
                <p class="organisational__block-text">
                    Каждая консультация длится 50 минут, частота встреч 1-2 раза в неделю. Количество встреч зависит от специфики проблемы и динамики изменений в процессе консультирования.
                </p>
                <p class="organisational__block-text">                
                    После первой очной встречи, в случае принятия решения о продолжении совместной работы, вы оплачиваете двойную стоимость консультации — вторая часть суммы идет на оплату последней сессии (депозит).
                </p> 
                <p class="organisational__block-text">
                    Skype-консультации оплачиваются за сутки до встречи. Своевременная оплата является гарантом проведения консультации. Вы можете согласовать со мной перенос консультации не позже, чем за сутки до встречи.
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
                        <li>Элементы транзактного анализа;</li>
                        <li>Практики осознанности;</li>
                        <li>Дыхательные техники;</li>
                        <li>Схематизацию;</li>
                        <li>Элементы арт-терапии.</li>
                    </ul>
                </div>
                <div class="toDoList__iNotDo">
                    <div class="toDoList__iNotDo--block"> 
                        <p class="toDoList__title">Что я не делаю</p>
                        <ul class="toDoList__list">
                            <li>гипноз и внушение;</li>
                            <li>навязывание мнения и взглядов;</li>
                            <li>фармакотерапию (медикаменты);</li>
                            <li>работу с третьими лицами без их присутствия и согласия.</li>
                        </ul>
                    </div>
                </div>
            </div>`;
    }

    showFeedbacks() {
        const mainContent = document.querySelector('.mainContent');
        mainContent.innerHTML = `
        <section class="answer answer--feedbacks">
            <h1 class="answer__title">Отзывы</h1>     
            <div class="answer__block">
                <img class="tree tree__first--feedbacks" src="./images/tree-1.png" alt="tree" />
                <div class="answer__block-text">Сразу же после первого сеанса с Татьяной я вышла с широкой улыбкой на лице. Проблемы превратились в решаемые задачи и абсолютно перестали беспокоить, как это было раньше. Очень приятный и светлый человек. Татьяна, огромное Вам спасибо!</div>                           
                <span class="answer__block-author">Алексей Костючик</span>
            </div>
            <div class="answer__block answer__block--even">
                <img class="tree tree__second--feedbacks" src="./images/tree-3.png" alt="tree" />
                <div class="answer__block-text answer__block-text--even">Пришла к Татьяне в полном состоянии не ресурса и апатии. Было чувство, что запуталась в жизни, понимания "Кто я?" и "Чем хочу заниматься". Всего несколько встреч с Ириной помогли вернутся в ресурсное состоянии и желания творить. Больше всего понравилось, что все индивидуально и работа идет по моему запросу. Я люблю решать проблемы быстро и Татьянаподкупила тем, что не надо будет ходить 1,5 года на терапию чтобы решить мою задачу. Хотя другие специалисты предлагали свои услуги от 10 встреч и более :) Татьяна, огромная благодарность за профессионализм, индивидуальны подход и кропотливый труд в нашей совместной работе. Не всегда было легко, но однозначно этого того стоило. Я теперь точно знаю к кому идти, если на жизненном пути возникли трудности. И вам рекомендую.</div>
            </div>                        
            <div class="answer__block">
                <div class="answer__block-text">Мені достатньо було одного візиту до Татьяни ,щоб зрозуміти всю суть моєї проблеми,і дійсно зараз я дуже щаслива,і кохана людина,тим паче і сама кохаю, спілкування було дуже приємним, і я змогла повністю розкритися психологу.Хочу вас подякувати Ірино,за те що ви є,і допомагаєте людям,іноді сам ти не взмозі зрозуміти ,і друзі і рідні теж не можуть тобі відкрити очі і допомогти ,тому звернення до психолога це вихід,тим більш допомога собі розібратися в свої думках,які дуже швидку змінюються.Ви мені дуже допомогли ,я дуже щаслива.Дякую.</div>                       
            </div> 
            <div class="answer__block answer__block--even">
                <img class="tree tree__third--feedbacks" src="./images/tree-5.png" alt="tree" />
                <div class="answer__block-text answer__block-text--even">Хочу поблагодарить Татьяну за помощь! Мне очень помогли консультации. Я осознала некоторые очевидные вещи в своей жизни, о которых раньше даже не задумывалась. Смогла изменить отношение к проблемам из прошлого, которые до сих пор меня беспокоили, и, что самое важное, переосмыслить свое будущее.</div>                           
                <span class="answer__block-author answer__block-author--even">Дмитрий В.</span></div>                          
            </div> 
            <div class="answer__block">
                <img class="tree tree__fourth--feedbacks" src="./images/tree-3.png" alt="tree" />
                <div class="answer__block-text">Обращалась по поводу проблем после того, как переболела серьезной болезнью и лежала в больнице. Хотя у меня есть не одна подруга, рассказывать им о своих проблемах было сложно. Да и что они могли посоветовать - "не парься и все пройдет". После нескольких сеансов поняла для себя, что все проблемы, которые у меня есть находятся у меня внутри и справиться с ними могу я сама. И это было как-то удивительно - вроде человек тебе помогает, но и вроде как ты помогаешь себе сама. Я очень благодарна и сейчас прохожу терапию у Татьяны!</div>                           
                <span class="answer__block-author">Оксана Ю.</span></div>
            </div> 
            <div class="answer__block answer__block--even">
                <div class="answer__block-text answer__block-text--even">Моя история прихода к психологу Татьяне, начинается с того ,что я запутался сам в себе. Я как бы знал что мне делать и в тоже время не знал... Наверное эта ситуация знакома многим. Буду краток, мне кажется что каждый из нас нуждается во взгляде на наш внутренний мир, и лучше когда это делает профессионал своего дела. Огромное спасибо за профессиональную консультацию. С признательностью и уважением Юра. =))</div>                           
                <span class="answer__block-author answer__block-author--even">Юра Д.</span></div>                          
            </div> 
        </section>`

    }
}