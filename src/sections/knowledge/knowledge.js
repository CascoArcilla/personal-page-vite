import "../../css/knowledge.css";
import { languages } from "./languages.js";
import { useSGBD } from "./use-sgbd.js";
import { developerWeb } from "./developer-web.js";
import { tools } from "./tools.js";
import { plus } from "./plus.js";
import { uml } from "./uml.js";

export function knowledge() {
    return `
<section id="knowledge" class="know">
<header>
    <h2>Conocimientos</h2>
    <p>
    Aquí plasmo los conocimientos y tecnologías que he usado
    a lo largo de la carrera, y como estudiante
    autodidacta
    </p>
</header>
${languages()}
${useSGBD()}
${developerWeb()}
${tools()}
${plus()}
${uml()}
</section>
    `
}