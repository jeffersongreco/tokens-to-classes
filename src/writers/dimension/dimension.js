import camelToKebab from '../../utils/camel-to-kebab.js'

function dimensionClasses(tokensJson, classesJson) {
  let classes = [];

  function processObject(tokens, classes, path = "") {
    for (let classKey in classes) {
      let prefix = classKey;
      let properties = classes[classKey];

      for (let tokenKey in tokens) {
        let className = `.${prefix}${path}-${camelToKebab(tokenKey)}`;
        let variableName = `--uai-dimension${path}-${camelToKebab(tokenKey)}`;
        let value = tokens[tokenKey];

        if (typeof value === "object") {
          processObject(value, properties, `${path}-${camelToKebab(tokenKey)}`);
        } else {
          classes.push(`${className} {`);
          console.log(className)

          for (let property of properties) {
            classes.push(`${property}: var(${variableName});`);
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
