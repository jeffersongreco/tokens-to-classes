import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function colorToClasses(classesPath, colorsPath) {
  const classesJson = getJson(classesPath);
  const colorTokensJson = getJson(colorsPath);

  let css = "";

  for (const nomeClasse in classesJson) {
    const propriedades = classesJson[nomeClasse];
    const prefixoClasse = camelToKebab(nomeClasse);

    for (const chaveCor in colorTokensJson.color.semantic) {
      const valoresCor = colorTokensJson.color.semantic[chaveCor];

      for (const valor in valoresCor) {
        const nomeVariavel = `--${camelToKebab(chaveCor)}-${camelToKebab(valor)}`;

        for (const propriedade of propriedades) {
          css += `.${prefixoClasse}-${camelToKebab(chaveCor)}-${camelToKebab(valor)} {\n`;
          css += `  ${propriedade}: var(${nomeVariavel});\n`;
          css += "}\n";
          css += "\n";
        }
      }
    }
  }

  return css;
}

const classesPath = './classes.json';
const colorsPath = '../../../tokens/color.tokens.json';
const classes = colorToClasses(classesPath, colorsPath);
// console.log(classes);
import fs from 'fs';
fs.writeFileSync('./tmp.css', classes, 'utf-8');
