import familyWeightLeadingToVariables from './core/family-weight-leading/family-weight-leading.js';
import trackingToVariables from './core/tracking/tracking.js';

function typographyToCSS(json) {
  const family = familyWeightLeadingToVariables(json.typography.core.family, 'typography-core-family');
  const weight = familyWeightLeadingToVariables(json.typography.core.weight, 'typography-core-weight');
  const tracking = trackingToVariables(json.typography.core.tracking, 'typography-core-tracking');
  const leading = familyWeightLeadingToVariables(json.typography.core.leading, 'typography-core-leading');

  const typographyCSS = [];

  typographyCSS.push(`:root {\n`);
  typographyCSS.push(family);
  typographyCSS.push(weight);
  typographyCSS.push(tracking);
  typographyCSS.push(leading);
  typographyCSS.push(`}\n`);

  return typographyCSS.join('\n');
}

export default typographyToCSS;
