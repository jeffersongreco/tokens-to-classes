import getJson from '../../utils/get-json.js';
import camelToKebab from '../../utils/camel-to-kebab.js';

function dimensionToClasses(configPath, tokensPath) {
  const configJson = getJson(configPath);
  const dimensionTokensJson = getJson(tokensPath);

  let css = "";

  for (const nomeClasse in configJson) {
    const propriedades = configJson[nomeClasse];

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

export default dimensionToClasses;

// Test
// const classesCss = dimensionToClasses('../../../tokens/dimension.tokens.json');
// console.log(classesCss);
// import fs from 'fs';
// fs.writeFileSync('./tmp.css', classesCss, 'utf-8');
