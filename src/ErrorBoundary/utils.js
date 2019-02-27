export const isDebuggingEnabled = () => {
  let search = window.location.search;
  return search
    .substring(1)
    .split('&')
    .includes('debug=true');
};
export const noop = () => null;
