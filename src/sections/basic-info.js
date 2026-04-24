import team from "../assets/img/team.png"

export function basicInfo() {
    return `
<section class="my-name">
    <header>
        <h1>
            ¡Hola, bienvenido!
        </h1>
    </header>

    <div class="wrap-info">
        <article>
            <p style="font-size: xx-large;">Mi nombre es</p>
            <h2>Norberto Montalvo García</h2>
        </article>

        <article class="center">
            <img class="photo" src="https://avatars.githubusercontent.com/u/120123220?v=4"
                alt="rostro de norberto montalvo garcia">
        </article>
    </div>
</section>

<section id="basic-info" class="about-me">
    <img class="icon" src="${team}" alt="icono de equipo">
    <div class="wrap-info">
        <header>
        <h2>Sobre mí</h2>
        </header>
        <article>
        <p>
            Egresado de ingeniería en sistemas computacionales con enfoque en el desarrollo de software,
            autodidacta, con capacidad para trabajar y coordinar un pequeño equipo, gestionar proyectos
            pequeños e interpretar requisitos. Uso de tecnologías para la comunicación y administración de
            proyectos. Actualmente con mayor conocimiento en el desarrollo web. Capacidad de adaptación
            frente a problemas nuevos, destacado como una persona sociable en el trabajo y el equipo.
        </p>
        </article>
    </div>
</section>
`
}