import fs from 'fs';

/**
 * Reads a JSON file from the specified path and returns the parsed JSON object.
 *
 * @param {string} from - The path to the JSON file.
 * @returns {Object|null} - The parsed JSON object, or null if an error occurs.
 */
function getJson(from) {
  try {
    // Read the content of the file
    const file = fs.readFileSync(from, 'utf8');

    // Parse the JSON content
    const json = JSON.parse(file);

    return json;
  } catch (error) {
    // Handle error
    console.error(`Error reading JSON file ${from}: ${error.message}`);

    return null;
  }
}

export default getJson;
