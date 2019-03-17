import './greeter1.css';
import greeter2style from './greeter2.scss';

import logo from './mickey.png';

/**
 * Greeter Class
 */
export class Greeter {
  /**
   * Simple greeting method. Rerutn string
   * @param {*} greeting
   * @param {*} object
   */
  greeting(greeting, object){
    return `${greeting}, ${object}`;
  }

  /**
   *
   * @param {*} elId element identifier
   * @param {*} msg meggage to publish
   */
  publishToPanel(elId, msg){
    const mpEl = document.querySelector(elId);
    mpEl.textContent = msg;
  }

  /**
   * This method contains sample of CSS styles
   * @param {*} qSelector
   * @param {*} title
   */
  addSection(qSelector, title){
    const appEl = document.querySelector(qSelector);
    const h2 = document.createElement('h2');
    h2.className = 'edwSec2';
    h2.textContent = title;
    appEl.appendChild(h2);

    const para = document.createElement('p');
    para.className = greeter2style.edwSec2para;
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    appEl.appendChild(para);
  }

  /**
   * This method demonstartes samples of image injection
   * @param {*} qSelector 
   */
  addImage(qSelector){
    const appEl = document.querySelector(qSelector);
    const h2 = document.createElement('h2');
    h2.className = 'edwSec2';
    h2.textContent = 'SSection 3. Image Loader';
    appEl.appendChild(h2);

    const para = document.createElement('p');
    para.textContent = 'This section contains sample of image insertion';

    appEl.appendChild(para);

    window.console.log(logo);
    const img = document.createElement('img');
    img.src = logo;
    appEl.appendChild(img);
  }
}
