import mysql from "../../assets/img/mysql.webp";
import mariadb from "../../assets/img/mariadb.png";
import postgressql from "../../assets/img/postgre.png";
import mongodb from "../../assets/img/mongo.png";

export function useSGBD() {
    return `
<article id="sgbds-use">
    <header>
        <h3>Bases de datos</h3>
    </header>
    <ul>
        <li>
            <img src="${mysql}" alt="logo de mysql" class="item-developer-web">
        </li>
        <li>
            <img src="${mariadb}" alt="logo de mariadb" class="item-developer-web mariadb">
        </li>
        <li>
            <img src="${postgressql}" alt="logo de postgressql" class="item-developer-web">
        </li>
        <li>
            <img src="${mongodb}" alt="logo de mongodb" class="item-developer-web">
        </li>
    </ul>
</article>
    `
}