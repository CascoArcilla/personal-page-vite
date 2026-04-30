import image_bj from "../assets/project_img/black-jack.webp";
import tzServiceWebImg from "../assets/project_img/turitezo-sw.webp";
import image_ec_controller from "../assets/project_img/ec_controll.webp";

export const dataProjects = [
    {
        title: 'Simple Black Jack',
        img: image_bj,
        live: 'https://cascoarcilla.github.io/vanilla-blackjack/',
        github: 'https://github.com/CascoArcilla/vanilla-blackjack',
        description: 'Juego creado por diversion, es un Black Jack jugable directamente en el navegador. Usando vanilla JavaScript, HTML y Tailwind CSS. Incluye lógica de baraja, turnos del jugador y del dealer, así como el manejo del estado del juego.'
    },
    {
        title: 'Turitezo, servicio web',
        img: tzServiceWebImg,
        live: 'https://turitezo-service-web.onrender.com/',
        github: 'https://github.com/CascoArcilla/turitezo-serviceweb',
        description: 'Un servicio web para la aplicacion de Turitezo, creado para mostrar los lugares turisticos de un municipio. Utilizado PHP vanilla, MySQL, con un Dockerfile para el despliegue de la aplicacion en Render partiendo de la imagen php:8.4-apache.'
    },
    {
        title: 'Turitezo Android',
        video_url: 'https://www.youtube.com/embed/SDv79hfHUSk',
        video_name: 'Turitezo',
        github: 'https://github.com/CascoArcilla/turitezo-android',
        description: 'La aplicación para el proyecto Turitezo, creada para mostrar los lugares turisticos de mi municipio, por circustancias, no pude continuarla, fue un buen proyecto para seguir aprendiendo sobre el desarrollo de aplicaciones móviles con Android nativo.'
    },
    {
        title: 'EC Controller (Proyecto en desarrollo)',
        github: 'https://github.com/CascoArcilla/wats-control',
        img: image_ec_controller,
        description: 'Proyecto personal que estoy desarrollando para mi hogar. Un sistema para el control de consumo electrico y estimacion de costos (no incluye hardware).'
    },
    {
        title: 'Senso Lab MX',
        description: 'Trabajando para mostrarlo, es un sistema para agilizar la recolección y exportación de datos.'
    }
]