import dimensionToVariables from './dimension.js';

/**
 * Converts a nested JSON object representing dimensions (in pixels)
 * into CSS rules for setting root-level CSS variables.
 *
 * @param {object} json - The JSON object containing dimension values in pixels.
 * @returns {string[]} - An array containing CSS rules for setting root-level CSS variables.
 */
function dimensionToCSS(json) {
  // Get CSS variable declarations for dimensions
  const dimensionVariables = dimensionToVariables(json.dimension);

  // Array to store the complete set of CSS variable declarations
  const dimensionCSS = [];

  // Add dimension variables to the array
  dimensionCSS.push(`:root {\n`);
  dimensionCSS.push(dimensionVariables);
  dimensionCSS.push(`}\n`);

  // Return the array of CSS variable declarations
  return dimensionCSS.join('\n');
}

// Export the function as the default export of the module
export default dimensionToCSS;
