import share from '../assets/icons/share.svg';

export function projectElement(project) {
    let media = "";
    let liveButton = "";

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
        <a class="item-project__btn item-project__btn--repo" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="Ver repositorio de ${project.title} en GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
        </a>
    </footer>
</article>
    `;
}