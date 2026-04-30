import share from '../components/icon-share.js';
import github from '../components/icon-github.js';

export function projectElement(project) {
    console.log(project);

    let media = "";
    let liveButton = "";
    let githubButton = "";

    if (project.img) {
        media = `<img class="item-project__img" src="${project.img}" alt="Captura de pantalla del proyecto ${project.title}" loading="lazy" />`;

    } else if (project.video_url) {
        media = `<iframe class="item-project__video" width="315" height="576" src="${project.video_url}" title="${project.video_name}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allowfullscreen></iframe>`;
    }

    if (project.live) {
        liveButton = `<a class="item-project__btn item-project__btn--live" href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Ver proyecto ${project.title} en vivo">
            ${share}
            Ver proyecto
        </a>`;
    }

    if (project.github) {
        githubButton = `<a class="item-project__btn item-project__btn--repo" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver repositorio de ${project.title} en GitHub">
            ${github}
            GitHub
        </a>`;
    }

    return `
<article class="item-project">
    <header class="item-project__header">
        <h3 class="item-project__title">${project.title}</h3>
    </header>

    <div class="item-project__media">
        ${media}
    </div>

    <p class="item-project__description">
        ${project.description}
    </p>

    <footer class="item-project__footer">
        ${liveButton}
        ${githubButton}
    </footer>
</article>
    `;
}