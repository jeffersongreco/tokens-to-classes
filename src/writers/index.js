import typographyToClasses from './typography/typography.js'
import shadowToClasses from './shadow/shadow.js'
import dimensionToClasses from './dimension/dimension.js'
import colorToClasses from './color/color.js'
import fs from 'fs'

function writeClasses() {
  const classes = '';

  const color = colorToClasses()
  const dimension = dimensionToClasses()
  const shadow = shadowToClasses()
  const typography = typographyToClasses()

  css += `${color}\n`;
  css += `${dimension}\n`;
  css += `${shadow}\n`;
  css += `${typography}\n`;

  return classes
}

const classes = writeClasses();
fs.writeFileSync('../dist/classes.css', classes, 'utf-8');
