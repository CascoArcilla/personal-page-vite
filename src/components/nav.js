export function nav() {
    return `
<nav class="nav-ul">
    <button class="nav-btn" onclick="movePageTo('inicio')">Inicio</button>
    <button class="nav-btn" onclick="movePageTo('basic-info')">Sobre mi</button>
    <div class="wrap-dropdown">
        <button class="nav-btn" onclick="movePageTo('knowledge')">Conocimientos</button>
        <div class="dropdown">
            <button class="nav-btn" onclick="movePageTo('languajes')">Lenguajes de programación</button>
            <button class="nav-btn" onclick="movePageTo('sgbds-use')">SGBDS usados</button>
            <button class="nav-btn" onclick="movePageTo('developer-web')">Desarrollo web</button>
            <button class="nav-btn" onclick="movePageTo('tools')">Herramienas</button>
            <button class="nav-btn" onclick="movePageTo('plus')">Otros</button>
            <button class="nav-btn" onclick="movePageTo('uml')">Modelado UML</button>
        </div>
    </div>
    <button class="nav-btn" onclick="movePageTo('exp')">Experiencia</button>
    <button class="nav-btn" onclick="movePageTo('projects')">Proyectos</button>
</nav>
`
}

/* Move to exact point of secction by id in page */
function movePageTo(idSecction) {
    let heightNav = document.getElementsByClassName("nav-ul")[0].clientHeight;
    let marginTopTargetPostion = 20;

    if (idSecction == "inicio") {
        scrollTo({ top: 0 });
        return;
    }

    let positionY = document
        .getElementById(idSecction)
        .getBoundingClientRect().top;
    let targetPosition = positionY - heightNav - marginTopTargetPostion;

    scrollBy({ top: targetPosition });
}