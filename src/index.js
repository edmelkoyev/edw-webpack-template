import {Greeter} from './greeter.js';

const greeter = new Greeter();
const message = greeter.greeting('Hello', 'Webpack');
greeter.publishToPanel('messagePanel', message);
window.console.log(message);
