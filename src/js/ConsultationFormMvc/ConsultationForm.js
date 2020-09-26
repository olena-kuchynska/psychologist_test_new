export default class ConsultationForm {
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