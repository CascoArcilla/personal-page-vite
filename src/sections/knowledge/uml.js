import "../../css/uml.css";

export function uml() {
    return `
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
    `
}

