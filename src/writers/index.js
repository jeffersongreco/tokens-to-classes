import typographyToClasses from './typography/typography.js'
import shadowToClasses from './shadow/shadow.js'
import dimensionToClasses from './dimension/dimension.js'
import colorToClasses from './color/color.js'
import fs from 'fs'

function writeClasses() {
  let classes = '';

  const color = colorToClasses('./color/config.json', '../../tokens/color.tokens.json')
  const dimension = dimensionToClasses('./dimension/config.json', '../../tokens/dimension.tokens.json')
  const shadow = shadowToClasses('../../tokens/shadow.tokens.json')
  const typography = typographyToClasses('../../tokens/typography.tokens.json')

  classes += `@import url("./variables.css");\n`
  classes += `\n`
  classes += `${color}\n`;
  classes += `${dimension}\n`;
  classes += `${shadow}\n`;
  classes += `${typography}\n`;

  return classes
}

const classes = writeClasses();
fs.writeFileSync('../../dist/css/classes.css', classes, 'utf-8');
