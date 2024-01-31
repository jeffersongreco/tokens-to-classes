import camelToKebab from '../../../../utils/camel-to-kebab.js';

function familyWeightLeadingToVariables(json, typePrefix) {
  function processObject(obj, path) {
    for (let key in obj) {
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;
      let variableValue = obj[key];

      if (typeof variableValue === "object") {
        processObject(variableValue, `${path}-${camelToKebab(key)}`);
      } else {
        variables.push(`${variableName}: ${variableValue};`);
      }
    }
  }

  let variables = [];

  processObject(json, "");

  return variables.join("\n");
}

export default familyWeightLeadingToVariables;
