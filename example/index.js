import React from 'react';
import { render } from 'react-dom';
import ignoreProps from '../index';

const SomeComponent = (props) => {
  const { id } = props;

  return (<div { ...ignoreProps(props, 'id', ['test', 'me']) } uniqueId={ id }>SomeComponent</div>);
};

render(<SomeComponent id={ 1 } test={ true } />, document.getElementById('root'));
