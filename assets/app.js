/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../components/base.css';


import HeaderScript from '../components/Layout/Header/Header.js';

function main() {
  document.body.classList.remove('no-js');
console.log('test')
  HeaderScript();
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
