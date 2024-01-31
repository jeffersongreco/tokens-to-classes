import camelToKebab from '../../utils/camel-to-kebab.js'

function dimensionToVariables(json) {
  function processObject(obj, path) {
    const baseFontSize = 16;
    for (let key in obj) {
      let variableName = `--uai-dimension${path}-${camelToKebab(key)}`;
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

export default dimensionToVariables;
