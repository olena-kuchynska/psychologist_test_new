export default class CabinetFormControll {
    constructor(model, subscribers) {
        this.model = model;
        this.subscribers = subscribers;
    }

    resizing() {
        let height = document.documentElement.clientHeight;
        const cabinet = document.querySelector('.cabinet');
        const cabinetImg = document.querySelector('.cabinet__img');

        if(cabinetImg) {

            cabinetImg.setAttribute('style',`height: ${height}` + `px;`);

            if(document.documentElement.clientWidth > 1200)  {
                this.model.handleReorganized();
            } else { 
                const container = document.querySelector('.wrapper');
                container.classList.remove('wrapper__cabinet');

                const body = document.querySelector('body');
                body.removeAttribute('style');     

                const block = document.querySelector('.containier');
                block.classList.remove('containier--another');

                cabinetImg.addEventListener('load', () => {
                    let scroll = cabinet.scrollWidth * 0.4;
                    cabinet.scrollLeft = parseInt(scroll);
                });
            }

        } 
    }

    actionforForm() {                     
        window.addEventListener('resize',() => {this.resizing();});
        const cabinet = document.querySelector('.cabinet');
        const rails = document.querySelectorAll('.nicescroll-rails');
        
        if(rails) {
            rails.forEach(item => {
                item.remove();
            })
        }

        $('.cabinet').niceScroll({
            cursorcolor: "#fff", 
            cursoropacitymin: 1,
            cursorwidth: "5px",
            cursorborderradius: "15px",
            cursorborder:"0px solid #505050",
            background: "rgb(140, 189, 16)",
            owerflowy: false,
        });


        const cabinetImg = document.querySelector('.cabinet__img');

        cabinet.addEventListener('click', event => {                      
            var past = document.documentElement.clientWidth * 0.5;
            if(event.clientX >= past) {
                cabinet.scrollLeft += 100;
            } else if(event.clientX < past) {
                cabinet.scrollLeft -= 100;
            }

        });

        cabinetImg.addEventListener('keydown', event => {            
            if(event.code === "ArrowRight") {
                cabinet.scrollLeft += 100;
            } else if(event.code === "ArrowLeft") {
                cabinet.scrollLeft -= 100;
            }

        });

    }

    handleShowForm() {
        this.model.handleShowForm();
        this.resizing(); 
        this.actionforForm();     
              
    }
        
}