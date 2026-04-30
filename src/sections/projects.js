import '../css/projects.css';
import { projectElement } from './project-element.js';
import { dataProjects } from './data-projects.js';

export function projects() {
    let renderProjects = ``;

    dataProjects.forEach(project => {
        renderProjects += projectElement(project);
    });

    return `
<section id="projects">
    <header>
        <h2>Proyectos</h2>
    </header>
    <div class="container-projects">
        ${renderProjects}
    </div>
</section>
    `;
}