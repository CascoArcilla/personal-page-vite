import "../../css/developer-web.css";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import react from "../../assets/img/react.png";
import bootstrap from "../../assets/img/bootstrap.png";
import tailwindcss from "../../assets/img/tailwindcss.png";
import remix from "../../assets/img/remix-r.png";
import django from "../../assets/img/django.png";

export function developerWeb() {
    return `
<article id="developer-web">
    <header>
        <h3>Desarrollo Web</h3>
    </header>
    <ul>
        <li>
            <img src="${css}" alt="logo de css" class="item-developer-web">
        </li>
        <li>
            <img src="${html}" alt="logo de html" class="item-developer-web">
        </li>
        <li>
            <img src="${react}" alt="logo de react" class="item-developer-web">
        </li>
        <li>
            <img src="${bootstrap}" alt="logo de bootstrap" class="item-developer-web">
        </li>
        <li>
            <img src="${tailwindcss}" alt="logo de tailwind css" class="item-developer-web">
        </li>
        <li>
            <img src="${remix}" alt="logo remix" class="item-developer-web">
        </li>
        <li>
            <img src="${django}" alt="logo django" class="item-developer-web">
        </li>
    </ul>
</article>
    `
}