function camelToKebab(value) {
  if (/[A-Z]/.test(value)) {
    const kebabCase = value.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
    return kebabCase.startsWith('-') ? kebabCase.slice(1) : kebabCase;
  }

  return value;
};

export default camelToKebab;

// Test
// const camelCaseString = "exemploCamelCase";
// const kebabCaseResult = camelToKebab(camelCaseString);
// console.log(kebabCaseResult);