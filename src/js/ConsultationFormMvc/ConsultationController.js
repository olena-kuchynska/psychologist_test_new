export default class ConsultationFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    handleShowForm(){     
        this.model.handleShowForm();
        this.actionforForm(); 
    }
    
    handleFeedbacks() {
        this.model.handleFeedbacks();
    }

    actionforForm() {
        const answers = document.querySelector('.answer__block');
        const rails = document.querySelectorAll('.nicescroll-rails');
        
        if(rails) {
            rails.forEach(item => {
                item.remove();
            })
        }
        
        answers.addEventListener('click', event => {
            window.scrollTo(pageXOffset, 0);
            this.handleFeedbacks();
            history.pushState(null, null, '/feedbacks');                   
        });
    }
        
}