import {Greeter} from './greeter/greeter.js';

const greeter = new Greeter();
const message = greeter.greeting('Hello', 'Webpack!');
greeter.publishToPanel('#appMsgPanel', message);
greeter.addSection('#app', 'Section 2. CSS Loader');
greeter.addImage('#app');
window.console.log(message);
