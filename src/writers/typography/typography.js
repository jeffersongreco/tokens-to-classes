import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function typographyToClasses() {
  const json = getJson('../../../tokens/typography.tokens.json')
  const types = json.typography.semantic;
  let css = "";

  for (const key in types) {
    const type = types[key];
    const family = `var(--uai-typography-core-family-${type.family})`
    const size = `var(--uai-dimension-minor-scale-${type.size})`
    const weight = `var(--uai-typography-core-weight-${type.weight})`
    const tracking = `var(--uai-typography-core-tracking-${type.tracking})`
    const leading = `var(--uai-typography-core-leading-${type.leading})`

    css += `.type-${camelToKebab(key)} {\n`;
    css += `  font-family: ${family};\n`;
    css += `  font-size: ${size};\n`;
    css += `  font-weight: ${weight};\n`;
    css += `  letter-spacing: ${tracking};\n`;
    css += `  line-height: ${leading};\n`;
    css += "}\n";
    css += "\n";
  }

  return css;
}

export default typographyToClasses;

// Teste
// const css = typographyToClasses();
// console.log(css);
// import fs from 'fs';
// fs.writeFileSync('./tmp.css', css, 'utf-8');