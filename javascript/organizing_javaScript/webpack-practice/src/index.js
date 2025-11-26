import { greeting } from "./greeting.js";
import './style.css';
import odinImage from "../asset/resource/odin.png";

const image = document.createElement("img");
image.src = odinImage;
const div = document.createElement('div')
div.textContent = 'use webpack dev serve'
document.body.appendChild(image);
document.body.appendChild(div)
console.log(greeting);