import '../css/projects.css';
import { blackJack } from './projects/black-jack.js';
import { tzServiceWeb } from './projects/tz-service-web.js';
import { tzAndroid } from './projects/tz-android.js';
import { sensoLab } from './projects/senso-lab.js';

export function projects() {
    return `
<section id="projects">
    <header>
        <h2>Proyectos</h2>
    </header>
    <div class="container-projects">
        ${blackJack()}
        ${tzServiceWeb()}
        ${tzAndroid()}
        ${sensoLab()}
    </div>
</section>
    `;
}