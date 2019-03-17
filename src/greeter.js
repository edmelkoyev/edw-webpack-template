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
    const mpEl = document.getElementById(elId);
    const txtNode = document.createTextNode(msg);
    mpEl.appendChild(txtNode);
  }
}
