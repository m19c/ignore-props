function flatten(array) {
  return array.reduce((previous, current) => {
    var items = Array.isArray(current) ? flatten(current) : [current];
    return previous.concat(items);
  }, []);
}

export default (props, ...ignore) => {
  let key;

  props = Object.assign({}, props);
  ignore = flatten(ignore);

  for (key in props) {
    if (ignore.indexOf(key) === -1) {
      continue;
    }

    delete props[key];
  }

  return props;
};
