import AboutView from './AboutFormMvc/AboutView';
import AboutForm from './AboutFormMvc/AboutForm';
import AboutFormControll from './AboutFormMvc/AboutController';
import ConsultationView from './ConsultationFormMvc/ConsultationView';
import ConsultationForm from './ConsultationFormMvc/ConsultationForm';
import ConsultationFormControll from './ConsultationFormMvc/ConsultationController';
import CabinetView from './CabinetFormMvc/CabinetView';
import CabinetForm from './CabinetFormMvc/CabinetForm';
import CabinetFormControll from './CabinetFormMvc/CabinetController';
import PubSub from './pattern/pubSub';

document.addEventListener ('DOMContentLoaded', function() {

    const subscribers = new PubSub();

    const aboutView = new AboutView();
    const aboutForm = new AboutForm(aboutView);
    const aboutFormController = new AboutFormControll(aboutForm, subscribers, window.location.href);

    const consultationView = new ConsultationView();
    const consultationForm = new ConsultationForm(consultationView);
    const consultationFormController = new ConsultationFormControll(consultationForm, subscribers);

    const cabinetView = new CabinetView();
    const cabinetForm = new CabinetForm(cabinetView);
    const cabinetFormController = new CabinetFormControll(cabinetForm, subscribers);    

    subscribers.subscribe('about', aboutFormController.handleShowForm.bind(aboutFormController));
    subscribers.subscribe('reorganized', aboutFormController.handleReorganized.bind(aboutFormController));
    subscribers.subscribe('consultation', consultationFormController.handleShowForm.bind(consultationFormController));
    subscribers.subscribe('cabinet', cabinetFormController.handleShowForm.bind(cabinetFormController));
    subscribers.subscribe('feedbacks', consultationFormController.handleFeedbacks.bind(consultationFormController));
    
    aboutFormController.handleShowForm();

});