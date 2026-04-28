import '../css/projects.css';
import { blackJack } from './projects/black-jack.js';

export function projects() {
    return `
<section id="projects">
    <header>
        <h2>Proyectos</h2>
    </header>
    <div class="container-projects">
        ${blackJack()}
        ${blackJack()}
        ${blackJack()}
        ${blackJack()}
    </div>
</section>
    `;
}