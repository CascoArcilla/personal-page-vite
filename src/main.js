import './style.css'
import { nav } from './components/nav.js'
import { contentMain } from './components/content-main.js'

document.querySelector('#app').innerHTML = `
${nav()}
${contentMain()}
`;