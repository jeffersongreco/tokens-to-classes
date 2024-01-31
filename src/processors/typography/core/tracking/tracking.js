import camelToKebab from '../../../../utils/camel-to-kebab.js';

function trackingToVariables(json, typePrefix) {
  function processObject(obj, path) {
    for (let key in obj) {
      const baseFontSize = 16;
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        processObject(variableValue, `${path}-${camelToKebab(key)}`);
      } else {
        variables.push(`${variableName}: ${variableValue / baseFontSize}rem;`);
      }
    }
  }

  let variables = [];

  processObject(json, "");

  return variables.join("\n");
}

export default trackingToVariables;
