class AppView {
    constructor() {        

    }

    showForm() {
        const container = document.querySelector('.container');

        container.innerHTML = 
            `<div class="header">
                <div class="nav">

                </div>
            </div>
            <div class="principles">

            </div>
            <div class="questions">

            </div>
            <div class="about">

            </div>
            <div class="education">

            </div>
            <div class="recording">

            </div>
            <div class="footer">

            </div>`;
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