import "../../css/tools.css";
import git from "../../assets/img/git-logo.png";
import github from "../../assets/img/github-logo.png";
import figma from "../../assets/img/figma-logo.png";
import blender from "../../assets/img/blender-logo.png";
import slack from "../../assets/img/slack-logo.png";
import phpmyadmin from "../../assets/img/myadmin-logo.png";
import visualstudio from "../../assets/img/vscode-logo.png";

export function tools() {
    return `
<article id="tools" class="tools">
    <header>
        <h3>Herramientas y entornos de desarrollo</h3>
    </header>

    <div class="wrap-tools">
    <ul class="images-tools">
        <li>
            <img
            src="${git}"
            alt="logo de git">
            <img src="${blender}" alt="logo de blender">
        </li>
        <li>
            <img src="${github}" alt="logo de github">
            <img src="${visualstudio}" alt="logo vscode">
            <img src="${figma}" alt="icono de figma">
        </li>
        <li>
            <img
                src="${slack}"
                alt="logo slack">
            <img
                src="${phpmyadmin}"
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
    `
}