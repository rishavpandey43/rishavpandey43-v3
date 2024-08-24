const propertyFilter = {
  // you can expand this regex as you find more cases that you want to allow
  regex: '^(__typename)$',
  match: false,
};

module.exports = [
  'error',
  {
    selector: 'property',
    format: ['camelCase'],
    filter: propertyFilter,
  },
  {
    selector: 'variable',
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
    prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'disable', 'enable'],
    filter: {
      regex: '^(loading|replace|paused|.*Loading)$',
      // `loading, .*Loading` - special case for `apollo-client` generated hooks
      // `replace` - special case for `react-router` navigation
      match: false,
    },
  },
  {
    selector: 'memberLike',
    modifiers: ['private'],
    format: ['camelCase'],
    leadingUnderscore: 'require',
  },
  {
    selector: 'function',
    format: ['PascalCase', 'camelCase'],
  },
  {
    selector: 'parameter',
    format: ['PascalCase', 'camelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'objectLiteralProperty',
    format: null,
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'typeProperty',
    format: ['snake_case', 'camelCase'],
    filter: propertyFilter,
  },
  {
    selector: 'enumMember',
    format: ['PascalCase'],
  },
  {
    selector: 'typeParameter',
    format: ['PascalCase'],
  },
  {
    selector: 'interface',
    format: ['PascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: false,
    },
  },
];
