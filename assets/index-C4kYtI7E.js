(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`
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
`}function t(){return`
<section class="my-name">
<article class="center">
    <p style="font-size: xx-large;">Mi nombre es</p>
    <h2>Norberto Montalvo García</h2>
</article>
<article class="center">
    <img class="photo" src="https://avatars.githubusercontent.com/u/120123220?v=4"
    alt="rostro de norberto montalvo garcia">
</article>
</section>

<section id="basic-info" class="about-me">
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
<img class="icon" src="assets/imgs/team.png" alt="icono de equipo">
</section>
`}function n(){return`
<article id="languajes" class="languajes">
    <header>
        <h3>Lenguajes de programación</h3>
    </header>
    <ul>
        <li>
            <img src="assets/imgs/php.png" alt="log de PHP">
        </li>
        <li>
            <img src="assets/imgs/C.png" alt="logo de C">
        </li>
        <li>
            <img src="assets/imgs/Java.png" alt="logo de Java">
        </li>
        <li>
            <img src="assets/imgs/Kotlin.png" alt="logo de Kotlin">
        </li>
        <li>
            <img src="assets/imgs/js.png" alt="logo de JS">
        </li>
    </ul>
</article>
    `}function r(){return`
<article id="sgbds-use">
    <header>
        <h3>Bases de datos</h3>
    </header>
    <ul>
        <li>
            <img src="https://brandlogo.org/wp-content/uploads/2024/02/MySQL-Logo-300x300.png.webp" alt="logo de mysql">
        </li>
        <li>
            <img src="https://images.icon-icons.com/2699/PNG/512/mariadb_logo_icon_168996.png" alt="logo de mariadb">
        </li>
        <li>
            <img src="https://images.icon-icons.com/2415/PNG/512/postgresql_original_wordmark_logo_icon_146392.png"
            alt="logo de postgressql">
        </li>
        <li>
            <img src="https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
            alt="logo de mongodb">
        </li>
    </ul>
</article>
    `}function i(){return`
<article id="developer-web">
    <header>
        <h3>Desarrollo Web</h3>
    </header>
    <ul>
        <li>
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="logo de css">
        </li>
        <li>
            <img src="assets/imgs/html.png" alt="logo de html">
        </li>
        <li>
            <img src="https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png" alt="logo de react">
        </li>
        <li>
            <img src="https://images.seeklogo.com/logo-png/38/2/bootstrap-5-logo-png_seeklogo-386607.png"
            alt="logo de bootstrap">
        </li>
        <li>
            <img src="https://images.icon-icons.com/2699/PNG/512/tailwindcss_logo_icon_167923.png"
            alt="logo de tailwind css">
        </li>
        <li>
            <img src="https://www.datocms-assets.com/205/1667581660-remix.svg?auto=format&fit=max&w=1200"
            alt="logo remix">
        </li>
    </ul>
</article>
    `}function a(){return`
<article id="tools" class="tools">
    <header>
        <h3>Herramientas y entornos de desarrollo</h3>
    </header>

    <div class="wrap-tools">
    <ul class="images-tools">
        <li>
            <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256"
            alt="logo de git">
            <img src="https://img.icons8.com/?size=512&id=65231&format=png" alt="logo de blender">
        </li>
        <li>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo de github">
            <img src="https://chris-ayers.com/assets/images/vscode-logo.png" alt="logo vscode">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="icono de figma">
        </li>
        <li>
            <img
                src="https://brandlogos.net/wp-content/uploads/2019/01/slack_2019-logo_brandlogos.net_vc8uu-512x512.png"
                alt="logo slack">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/PhpMyAdmin_logo.svg/1200px-PhpMyAdmin_logo.svg.png"
                alt="logo de phpMyAdmin">
        </li>
    </ul>

    <div class="tools-back"></div>

    <ul class="list-tools">
        <div class="laptop">
            <li>Github</li>
            <li>Slack</li>
            <li>Visual Studio Code</li>
            <li>Android Studio</li>
            <li>Figma</li>
        </div>
        <div class="laptop">
            <li>NetBeans</li>
            <li>PowerShell</li>
            <li>Visual Paradigm</li>
        </div>
        <div class="laptop">
            <li>phpMyAdmin</li>
            <li>MySQL Workbench</li>
            <li>Git</li>
            <li>Jira</li>
            <li>Blender</li>
        </div>
        <div class="phone">
            <li>Github</li>
            <li>Slack</li>
            <li>Visual Studio Code</li>
            <li>Android Studio</li>
            <li>Figma</li>
            <li>NetBeans</li>
            <li>PowerShell</li>
            <li>Visual Paradigm</li>
            <li>phpMyAdmin</li>
            <li>MySQL Workbench</li>
            <li>Git</li>
            <li>Jira</li>
            <li>Blender</li>
        </div>
    </ul>
    </div>
</article>
    `}function o(){return`
<article id="plus" class="plus">
    <header>
        <h3>Otros conocimientos</h3>
    </header>
    <ul>
        <li>
            <p>API REST</p>
            <p></p>
            <p></p>
            <p></p>
        </li>
        <li>
            <p></p>
            <p>NodeJs</p>
            <p></p>
            <p></p>
        </li>
        <li>
            <p></p>
            <p></p>
            <p>Metodologías agiles (Scrum, EX)</p>
            <p></p>
        </li>
        <li>
            <p></p>
            <p></p>
            <p></p>
            <p>Metodología en cascada.</p>
        </li>
    </ul>
</article>
    `}function s(){return`
<article id="uml" class="uml">
    <header>
        <h3>Modelado, Diagramas UML</h3>
    </header>
    <div class="wrap-uml">
        <div class="back-diagram"></div>
        <ul>
            <li class="e-r">Diagramas Entidad-Relación (ER)</li>
            <li>Diagramas Secuencia</li>
            <li class="class">Diagramas Clases</li>
            <li>Diagramas Actividad</li>
            <li class="c-u">Diagramas Casos de uso</li>
        </ul>
        <aside class="target-uml">
        </aside>
    </div>
</article>
    `}function c(){return`
<section id="knowledge" class="know">
<header>
    <h2>Conocimientos</h2>
    <p>
    Aquí plasmo los conocimientos y tecnologías que he usado
    a lo largo de la carrera, y como estudiante
    autodidacta
    </p>
</header>
${n()}
${r()}
${i()}
${a()}
${o()}
${s()}
</section>
    `}function l(){return`
<section id="exp" class="expe">
    <header>
        <h2>Experiencia</h2>
    </header>
    <article>
        <header>
            <h3>Pensemos Web, desarrollo FrondEnd:</h3>
            <p>Aproximadamente de Marzo 2023 a Octubre 2023</p>
        </header>
        <p class="info">
            La experiencia obtenida fue el desarrollo deproyectosFrondEnd
            usando la metodología ágil Scrum, uso de Jira para gestar el proyecto,
            trabajar en equipo y usar Slack para la comunicación. Usar Git,
            Github y Bitbucket para controlar las versiones de los sitios web.
        </p>
    </article>

    <article>
        <header>
            <h3>Innova TecNM 2024</h3>
        </header>   
        <p class="info">
            Me desempeñe como estudiante líder en el certamen de proyectos hasta
            la etapa regional, en el aplique los conocimientos sobre desarrollo web
            con el objetivo de crear una PWA para el registro de glucosa usando
            React, Bootstrap entre otras librerías.
        </p>
    </article>
</section>
    `}function u(){return`
<section id="projects">
    <header>
        <h2>Proyectos</h2>
    </header>
</section>
    `}function d(){return`
<main>
  <h1>
    Hola, bienvenido
  </h1>
  ${t()}
  ${c()}
  ${l()}
  ${u()}
</main>
`}document.querySelector(`#app`).innerHTML=`
${e()}
${d()}
`;