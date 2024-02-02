import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function dimensionToClasses(classesJsonPath, dimensionTokensJsonPath) {
  const classesJson = getJson(classesJsonPath);
  const dimensionTokensJson = getJson(dimensionTokensJsonPath);

  let css = "";

  for (const nomeClasse in classesJson) {
    const propriedades = classesJson[nomeClasse];

    for (const scaleType of Object.keys(dimensionTokensJson.dimension)) {
      const scale = dimensionTokensJson.dimension[scaleType];

      for (const key of Object.keys(scale)) {
        const className = `${nomeClasse}-${camelToKebab(scaleType)}-${camelToKebab(key)}`;
        const variableName = `--uai-dimension-${camelToKebab(scaleType)}-${camelToKebab(key)}`;
        const value = scale[key];

        css += `.${className} {\n`;
        propriedades.forEach((propriedade) => {
          css += `  ${propriedade}: var(${variableName});\n`;
        });
        css += "}\n";
        css += "\n";
      }
    }
  }

  return css;
}

const classesCss = dimensionToClasses('./classes.json', '../../../tokens/dimension.tokens.json');
// console.log(classesCss);
import fs from 'fs';
fs.writeFileSync('./tmp.css', classesCss, 'utf-8');
