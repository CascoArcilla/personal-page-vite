import "../css/basic-info.css";
import { basicInfo } from "../sections/basic-info.js";
import { knowledge } from "../sections/knowledge/knowledge.js";
import { experence } from "../sections/experence.js";
import { projects } from "../sections/projects.js";

export function contentMain() {
    return `
<main>
  ${basicInfo()}
  ${knowledge()}
  ${experence()}
  ${projects()}
</main>
`
}