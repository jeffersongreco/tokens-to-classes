import colorCoreToVariables from './color-core.js';
import colorSemanticToVariables from './color-semantic.js';

/**
 * Converts a JSON object representing color information into CSS variables
 * for both light and dark color schemes, including semantic color variables.
 *
 * @param {object} json - The JSON object containing color information.
 * @returns {string[]} - An array containing CSS variable declarations.
 */
function colorToCSS(json) {
  // Generate CSS variables for light color core
  const colorCoreLightVariables = colorCoreToVariables(json.color.core.light, 'color-core');

  // Generate CSS variables for dark color core
  const colorCoreDarkVariables = colorCoreToVariables(json.color.core.dark, 'color-core');

  // Generate CSS variables for semantic colors
  const colorSemanticVariables = colorSemanticToVariables(json.color.semantic, 'color-semantic');

  // Array to store the complete set of CSS variable declarations
  const colorCSS = [];

  // Add light color core variables to the array
  colorCSS.push(`:root {\n`);
  colorCSS.push(colorCoreLightVariables);
  colorCSS.push(`}\n`);

  // Add dark color core variables to the array within a dark mode media query
  colorCSS.push(`@media (prefers-color-scheme: dark) {\n`);
  colorCSS.push(`:root {\n`);
  colorCSS.push(colorCoreDarkVariables);
  colorCSS.push(`}\n`);
  colorCSS.push(`}\n`);

  // Add semantic color variables to the array
  colorCSS.push(`:root {\n`);
  colorCSS.push(colorSemanticVariables);
  colorCSS.push(`}\n`);

  // Return the array of CSS variable declarations
  return colorCSS.join('\n');
}

// Export the function as the default export of the module
export default colorToCSS;
