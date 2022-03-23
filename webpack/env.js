const withDefault = (value, defaultValue) => ([null, undefined].includes(value) ? defaultValue : value);

const NODE_ENV = withDefault(process.env.NODE_ENV, 'production');

const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const VERSION = JSON.stringify(process.env.npm_package_version);

module.exports = { NODE_ENV, IS_DEV, IS_PROD, VERSION };
