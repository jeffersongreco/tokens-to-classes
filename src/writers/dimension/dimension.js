import camelToKebab from '../../utils/camel-to-kebab.js'

function dimensionClasses(tokensJson, classesJson) {
  let classes = [];

  function processObject(tokensJson, classesJson, path = "") {
    for (let classKey in classesJson) {
      let prefix = `.${classKey}`;
      let properties = classesJson[classKey];

      for (let tokenKey in tokensJson) {
        let className = `${prefix}${path}-${camelToKebab(tokenKey)}`;
        let variableName = `--uai-dimension${path}-${camelToKebab(tokenKey)}`;
        let value = tokensJson[tokenKey];

        if (typeof value === "object") {
          processObject(value, properties, `${path}-${camelToKebab(tokenKey)}`);
        } else {
          classes.push(`${className} {`);

          for (let property in properties) {
            classes.push(`  ${property}: var(${variableName});`);
          }

          classes.push(`}`);
        }
      }
    }
  }

  processObject(tokensJson.dimension, classesJson);

  return classes.join("\n");
}

export default dimensionClasses;

import fs from 'fs';
import getJson from '../../utils/get-json.js';

const tokensPath = '../../../tokens/dimension.tokens.json';
const tokensJson = getJson(tokensPath);
const classesPath = './classes.json';
const classesJson = getJson(classesPath);

const result = dimensionClasses(tokensJson, classesJson);

console.log(result);
// fs.writeFileSync('./tmp.css', result, 'utf-8');
