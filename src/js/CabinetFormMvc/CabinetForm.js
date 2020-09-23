export default class CabinetForm {
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