import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function shadowToClasses(jsonPath) {
  const json = getJson(jsonPath)
  const shadows = json.shadow;
  let css = "";

  for (const key in shadows) {
    const shadow = shadows[key];
    const elevation = shadow.elevation === "-" ? "inset" : "";
    const x = shadow.x + "px";
    const y = shadow.y + "px";
    const blur = shadow.blur + "px";
    const spread = shadow.spread + "px";
    const color = `var(--uai-color-semantic-${shadow.color})`;

    css += `.shadow-${camelToKebab(key)} {\n`;
    css += `  box-shadow: ${x} ${y} ${blur} ${spread} ${color} ${elevation};\n`;
    css += "}\n";
    css += "\n";
  }

  return css;
}

const css = shadowToClasses('../../../tokens/shadow.tokens.json');
// console.log(css);
import fs from 'fs';
fs.writeFileSync('./tmp.css', css, 'utf-8');