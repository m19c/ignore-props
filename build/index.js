const ignoreProps = (props, ...ignore) => {
  console.log(props, ignore);
};

console.log(ignoreProps({ id: 1, className: 'some value', anotherProps: true }, 'id'));