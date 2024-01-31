import fs from 'fs';
import getJson from '../utils/get-json.js';
import colorToCSS from './color/index.js';
import dimensionToCSS from './dimension/index.js';
import typographyToCSS from './typography/index.js';

/**
 * Reads JSON files for color and dimension tokens, converts them to CSS,
 *
 * @function
 * @returns {string} The combined CSS generated from color and dimension tokens.
 */
function tokensToCSS() {
  // Read color tokens from a JSON file
  const colorJson = getJson('../../tokens/color.tokens.json');

  // Read dimension tokens from a JSON file
  const dimensionJson = getJson('../../tokens/dimension.tokens.json');

  const typographyJson = getJson('../../tokens/typography.tokens.json');

  // Convert color tokens to CSS
  const color = colorToCSS(colorJson);

  // Convert dimension tokens to CSS
  const dimension = dimensionToCSS(dimensionJson);

  const typography = typographyToCSS(typographyJson);

  // Combine color and dimension CSS and join them with newlines
  const CSS = [
    color,
    dimension,
    typography
  ].join('\n');

  // Return the combined CSS
  return CSS;
}

/**
 * Generate CSS from tokens.
 *
 * @constant {string}
 */
const css = tokensToCSS();

/**
 * Write the generated CSS to a file.
 *
 * @function
 * @param {string} path - The path where the CSS file will be written.
 * @param {string} data - The CSS data to be written to the file.
 * @param {string} encoding - The encoding for the file (default is 'utf-8').
 */
fs.writeFileSync('../../dist/variables.css', css, 'utf-8');
