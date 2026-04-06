import { basicInfo } from "../sections/basic-info.js";
import { knowledge } from "../sections/knowledge/knowledge.js";
import { experence } from "../sections/experence.js";
import { projects } from "../sections/projects.js";

export function contentMain() {
    return `
<main>
  <h1>
    Hola, bienvenido
  </h1>
  ${basicInfo()}
  ${knowledge()}
  ${experence()}
  ${projects()}
</main>
`
}