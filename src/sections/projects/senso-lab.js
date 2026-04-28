import sensoLabImg from "../../assets/project_img/senso_lab.webp";

export function sensoLab() {
    return `
<article class="item-project">
    <header class="item-project__header">
        <h3 class="item-project__title">Trabajando en ello...</h3>
    </header>

    <div class="item-project__media">
        <img
            class="item-project__img"
            src="${sensoLabImg}"
            alt="Captura de pantalla de Senso Lab MX"
            loading="lazy"
        />
    </div>

    <p class="item-project__description">
        Trabajando para mostrarlo
    </p>
    
    <footer class="item-project__footer">
    </footer>
</article>
    `
}