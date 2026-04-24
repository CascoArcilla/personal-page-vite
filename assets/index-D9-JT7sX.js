(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return document.addEventListener(`click`,e=>{e.target.classList.contains(`nav-btn`)&&t(e.target.getAttribute(`data-id`))}),`
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
`}var t=e=>{let t=document.getElementsByClassName(`nav-ul`)[0].clientHeight;if(e==`inicio`){scrollTo({top:0});return}let n=document.getElementById(e).getBoundingClientRect().top-t-20;scrollBy({top:n})},n=`/personal-page-vite/assets/team-CJZbk3nX.png`;function r(){return`
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
    <img class="icon" src="${n}" alt="icono de equipo">
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
`}var i=`/personal-page-vite/assets/php-TO-LBpev.png`,a=`/personal-page-vite/assets/C-CI8GFbzj.png`,o=`/personal-page-vite/assets/Java-CE2wooCb.png`,s=`/personal-page-vite/assets/Kotlin-CUL6Sce1.png`,c=`/personal-page-vite/assets/js-Cqmxx4SW.png`,l=`/personal-page-vite/assets/python-logo-CpjGiCMp.webp`;function u(){return`
<article id="languajes" class="languajes">
    <header>
        <h3>Lenguajes de programación</h3>
    </header>
    <ul>
        <li><img src="${i}" alt="log de PHP" class="item-developer-web"></li>
        <li><img src="${a}" alt="logo de C" class="item-developer-web"></li>
        <li><img src="${o}" alt="logo de Java" class="item-developer-web"></li>
        <li><img src="${s}" alt="logo de Kotlin" class="item-developer-web"></li>
        <li><img src="${c}" alt="logo de JS" class="item-developer-web"></li>
        <li><img src="${l}" alt="logo de Python" class="item-developer-web"></li>
    </ul>
</article>
    `}var d=`/personal-page-vite/assets/mysql-B0Jnrhf5.webp`,f=`/personal-page-vite/assets/mariadb-BKxmivWL.png`,p=`/personal-page-vite/assets/postgre-Ci_pw_Cw.png`,m=`/personal-page-vite/assets/mongo-DHUKbjzE.png`;function h(){return`
<article id="sgbds-use">
    <header>
        <h3>Bases de datos</h3>
    </header>
    <ul>
        <li>
            <img src="${d}" alt="logo de mysql" class="item-developer-web">
        </li>
        <li>
            <img src="${f}" alt="logo de mariadb" class="item-developer-web mariadb">
        </li>
        <li>
            <img src="${p}" alt="logo de postgressql" class="item-developer-web">
        </li>
        <li>
            <img src="${m}" alt="logo de mongodb" class="item-developer-web">
        </li>
    </ul>
</article>
    `}var g=`/personal-page-vite/assets/html-BOv9K_3f.png`,_=`/personal-page-vite/assets/css-01ZSU-62.png`,v=`/personal-page-vite/assets/react-Ca_dIG4B.png`,y=`data:image/png;base64,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`,b=`/personal-page-vite/assets/tailwindcss-BSZZm2jp.png`,x=`/personal-page-vite/assets/remix-r-yRiHdnkL.png`,S=`/personal-page-vite/assets/django-2nqOWuDN.png`;function C(){return`
<article id="developer-web">
    <header>
        <h3>Desarrollo Web</h3>
    </header>
    <ul>
        <li>
            <img src="${_}" alt="logo de css" class="item-developer-web">
        </li>
        <li>
            <img src="${g}" alt="logo de html" class="item-developer-web">
        </li>
        <li>
            <img src="${v}" alt="logo de react" class="item-developer-web">
        </li>
        <li>
            <img src="${y}" alt="logo de bootstrap" class="item-developer-web">
        </li>
        <li>
            <img src="${b}" alt="logo de tailwind css" class="item-developer-web">
        </li>
        <li>
            <img src="${x}" alt="logo remix" class="item-developer-web">
        </li>
        <li>
            <img src="${S}" alt="logo django" class="item-developer-web">
        </li>
    </ul>
</article>
    `}var w=`data:image/png;base64,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`,T=`/personal-page-vite/assets/github-logo-DkTr3Tul.png`,E=`/personal-page-vite/assets/figma-logo-CCcFopil.png`,D=`/personal-page-vite/assets/blender-logo-CUt4sR0-.png`,O=`/personal-page-vite/assets/slack-logo-wIBzHcnm.png`,k=`/personal-page-vite/assets/myadmin-logo-0OnVdShJ.png`,A=`/personal-page-vite/assets/vscode-logo-RQxuWjEg.png`;function j(){return`
<article id="tools" class="tools">
    <header>
        <h3>Herramientas y entornos de desarrollo</h3>
    </header>

    <div class="wrap-tools">
    <ul class="images-tools">
        <li>
            <img
            src="${w}"
            alt="logo de git">
            <img src="${D}" alt="logo de blender">
        </li>
        <li>
            <img src="${T}" alt="logo de github">
            <img src="${A}" alt="logo vscode">
            <img src="${E}" alt="icono de figma">
        </li>
        <li>
            <img
                src="${O}"
                alt="logo slack">
            <img
                src="${k}"
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
    `}function M(){return`
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
    `}var N=`/personal-page-vite/assets/relacional-Bcyx4sAI.jpg`,P=`/personal-page-vite/assets/secuencia-BQQ_mJXH.png`,F=`/personal-page-vite/assets/class-RIEMUqT3.jpg`,I=`/personal-page-vite/assets/activity-B4u3BZyM.png`,L=`/personal-page-vite/assets/cu-C6sJjfUJ.webp`;function R(){let e=`var(--primary)`,t=[N,P,F,I,L];return document.addEventListener(`DOMContentLoaded`,()=>{let n=document.querySelector(`.target-uml`),r=document.querySelectorAll(`.item-uml`);n.style.backgroundImage=`url(${t[0]})`,r[0].style.backgroundColor=e;let i=1,a=r[0];setInterval(()=>{a.style.backgroundColor=`var(--alter-text-color)`,n.style.backgroundImage=`url(${t[i]})`,r[i].style.backgroundColor=e,a=r[i],i++,i===t.length&&(i=0)},2500)}),`
<article id="uml" class="uml">
    <header>
        <h3>Modelado, Diagramas UML</h3>
    </header>
    <div class="wrap-uml">
        <div class="back-diagram"></div>
        <ul>
            <li class="item-uml" data-name-uml="relacional.jpg">Diagrama de Modelo Relacional</li>
            <li class="item-uml" data-name-uml="secuencia.png">Diagrama de Secuencia</li>
            <li class="item-uml" data-name-uml="class.jpg">Diagrama de Clases</li>
            <li class="item-uml" data-name-uml="activity.png">Diagrama de Actividad</li>
            <li class="item-uml" data-name-uml="cu.webp">Diagrama de Casos de uso</li>
        </ul>
        <aside class="target-uml">
        </aside>
    </div>
</article>
    `}function z(){return`
<section id="knowledge" class="know">
<header>
    <h2>Conocimientos</h2>
    <p class="desc-know">
        Aquí plasmo los conocimientos y tecnologías que he usado
        a lo largo de la carrera, y como estudiante
        autodidacta
    </p>
</header>
${u()}
${h()}
${C()}
${j()}
${M()}
${R()}
</section>
    `}function B(){return`
<section id="exp" class="expe">
    <header>
        <h2>Experiencia</h2>
    </header>

    <article>
        <header>
            <h3>Proyecto académico de residencia ampliada</h3>
            <p>Agosto 2025 - Marzo 2026</p>
        </header>
        <p class="info">
            Recopilación e interpretación de requisitos funcionales y no funcionales, diseño del sistema (uso de UML),
            metodología Scrum, planificaciones de tareas, metas, gestión de tiempo y generación de manuales. Uso de Docker
            para desplegar el proyecto realizado con Django y Apache para recibir solicitudes. El proyecto consistió en
            implementar diferentes técnicas sensoriales para recolectar y exportar datos de sesiones sensoriales.
        </p>
    </article>

    <article>
        <header>
            <h3>Proyecto integrador de la carrera</h3>
            <p>Agosto 2024 - Diciembre 2024</p>
        </header>
        <p class="info">
            Con el objetivo de crear una app de Android (con Android Studio) con un pequeño servicio web usando PHP para
            los lugares turísticos del municipio Tezonapa, asumí el papel de líder de equipo para coordinar tareas a
            compañeros de semestres mas bajos, interpretamos requisitos, establecí tiempos usando la metodología de
            desarrollo clásica cascada, siendo yo el encargado del desarrollo de la aplicación y servicio.
        </p>
    </article>

    <article>
        <header>
            <h3>Servicio Social de la carrera</h3>
            <p>Julio 2024 - Enero 2025</p>
        </header>
        <p class="info">
            Durante este periodo me asignaron desarrollar una aplicación Android de
            realidad aumentada usando Unity y Vuforia para un libro de sexto de primaria,
            aprendí a realizar modelos 3D con la herramienta de Blender, usé el
            programa de software libre Inkscape para realizar las interfaces grafías.
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
</section>
    `}function V(){return`
<section id="projects">
    <header>
        <h2>Proyectos</h2>
    </header>
    <article>
        <h3>Trabajando en esta sección...</h3>
    </article>
</section>
    `}function H(){return`
<main>
  ${r()}
  ${z()}
  ${B()}
  ${V()}
</main>
`}document.querySelector(`#app`).innerHTML=`
${e()}
${H()}
`;