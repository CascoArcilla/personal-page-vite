import "../../css/uml.css";
import relacional from "../../assets/img/relacional.jpg";
import secuencia from "../../assets/img/secuencia.png";
import classUml from "../../assets/img/class.jpg";
import activity from "../../assets/img/activity.png";
import cu from "../../assets/img/cu.webp";

export function uml() {
    const liSelect = "var(--primary)";
    const liUnselect = "var(--alter-text-color)";
    const images = [
        relacional,
        secuencia,
        classUml,
        activity,
        cu
    ];

    document.addEventListener("DOMContentLoaded", () => {
        const showUml = document.querySelector(".target-uml");
        const listUml = document.querySelectorAll(".item-uml");

        showUml.style.backgroundImage = `url(${images[0]})`;
        listUml[0].style.backgroundColor = liSelect;

        let index = 1;
        let before = listUml[0];

        setInterval(() => {
            before.style.backgroundColor = liUnselect;
            showUml.style.backgroundImage = `url(${images[index]})`;
            listUml[index].style.backgroundColor = liSelect;
            before = listUml[index];
            index++;
            if (index === images.length) {
                index = 0;
            }
        }, 2500);
    });

    return `
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
    `
}