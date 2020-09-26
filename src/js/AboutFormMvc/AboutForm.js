export default class AboutForm {
    constructor(view) {
        this.view = view;   
    }

    handleShowForm() {
        this.view.showForm();
    }
    handleReorganized() {
        this.view.reorganizedView();
    }
    sendMessage(message) {        
        fetch('/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
        })
        .then(response => {
            try {
            this.view.resetInfo();
            } catch {console.log(`Access error: ${response}`)};            
        })
        .catch(err => console.error(`Connection Error:${err}`));  
    }
}