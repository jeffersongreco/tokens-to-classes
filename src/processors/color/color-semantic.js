import camelToKebab from '../../utils/camel-to-kebab.js'

/**
 * Converts a nested JSON object representing semantic color values
 * into CSS variables. The variables are created with a specific naming
 * convention based on the typePrefix provided.
 *
 * @param {object} json - The nested JSON object containing semantic color values.
 * @param {string} typePrefix - The prefix to be used in naming the CSS variables.
 * @returns {string} - A string containing CSS variable declarations.
 */
function colorSemanticToVariables(json, typePrefix) {
  // An array to store the CSS variable declarations
  let variables = [];

  /**
   * Helper function to process nested objects recursively.
   *
   * @param {object} obj - The current object being processed.
   * @param {string} path - The current path in the JSON structure.
   */
  function processObject(obj, path) {
    // Iterate through each key in the object
    for (let key in obj) {
      // Construct the variable name using the provided typePrefix, path, and key
      let variableName = `--uai-${typePrefix}${path}-${camelToKebab(key)}`;

      // Retrieve the value associated with the current key
      let variableValue = obj[key];

      // Check if the value is an object (nested structure)
      if (typeof variableValue === "object") {
        // If it's an object, recursively process it with an updated path
        processObject(variableValue, `${path}-${camelToKebab(key)}`);
      } else {
        // If it's not an object, add a CSS variable declaration to the variables array
        // Use the semantic color value to reference a color core variable
        variables.push(`${variableName}: var(--uai-color-core-${variableValue});`);
      }
    }
  }

  // Start processing the input JSON object with an empty path
  processObject(json, "");

  // Combine all variable declarations into a single string separated by newlines
  return variables.join("\n");
}

// Export the function as the default export of the module
export default colorSemanticToVariables;
