import { cube } from './math.js';
import 'jquery';

const arr = [1, 2, 3];
const test = () => console.log(...arr);

jQuery('h1').css('background', '#f0f0f0');
console.log("index.js");
console.log("5 cubed is equal to " + cube(5));
test();

