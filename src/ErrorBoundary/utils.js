export const isDebuggingEnabled = () =>
  location.search
    .subString(1)
    .split('&')
    .includes('debug=true');
export const noop = () => null;
