export const getCorrectRules = (errors, hasValue, rules) => {
  if (!errors && hasValue) {
    return rules
  }
  const normalizeErrors = errors || rules
  return rules.filter(item => normalizeErrors.indexOf(item) === -1)
}
