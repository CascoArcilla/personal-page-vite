import "../css/nav.css";

export function nav() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-btn")) {
            movePageTo(e.target.getAttribute("data-id"));
        }
    });

    return `
<nav class="nav-ul">
    <button class="nav-btn" data-id="inicio">Inicio</button>
    <button class="nav-btn" data-id="basic-info">Sobre mi</button>
    <div class="wrap-dropdown">
        <button class="nav-btn" data-id="knowledge">Conocimientos</button>
        <div class="dropdown">
            <button class="nav-btn" data-id="languajes">Lenguajes de programación</button>
            <button class="nav-btn" data-id="sgbds-use">SGBDS usados</button>
            <button class="nav-btn" data-id="developer-web">Desarrollo web</button>
            <button class="nav-btn" data-id="tools">Herramienas</button>
            <button class="nav-btn" data-id="plus">Otros</button>
            <button class="nav-btn" data-id="uml">Modelado UML</button>
        </div>
    </div>
    <button class="nav-btn" data-id="exp">Experiencia</button>
    <button class="nav-btn" data-id="projects">Proyectos</button>
</nav>
`
}


/* Move to exact point of secction by id in page */
const movePageTo = (idSecction) => {
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