import php from "../../assets/img/php.png"
import c from "../../assets/img/C.png"
import java from "../../assets/img/Java.png"
import kotlin from "../../assets/img/Kotlin.png"
import js from "../../assets/img/js.png"
import python from "../../assets/img/python-logo.webp"

export function languages() {
    return `
<article id="languajes" class="languajes">
    <header>
        <h3>Lenguajes de programación</h3>
    </header>
    <ul>
        <li><img src="${php}" alt="log de PHP" class="item-developer-web"></li>
        <li><img src="${c}" alt="logo de C" class="item-developer-web"></li>
        <li><img src="${java}" alt="logo de Java" class="item-developer-web"></li>
        <li><img src="${kotlin}" alt="logo de Kotlin" class="item-developer-web"></li>
        <li><img src="${js}" alt="logo de JS" class="item-developer-web"></li>
        <li><img src="${python}" alt="logo de Python" class="item-developer-web"></li>
    </ul>
</article>
    `
}