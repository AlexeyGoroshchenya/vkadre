import { burger } from './modules/burger';
import { swiper } from './modules/swiper';
import { services } from './modules/services';
import { faq } from './modules/faq'
import { calendar } from './modules/calendar'
//import { scroll } from './modules/scroll';
//import { sendForm } from './modules/sendForm';
import { getData } from './modules/getData'


burger();
//scroll();
swiper();
services();
faq();
//calendar();
getData('../dist/events.json', calendar);

//console.log(getData('../dist/events.json'));


//sendForm(document.querySelector('.bet__body'), 'https://jsonplaceholder.typicode.com/posts');
