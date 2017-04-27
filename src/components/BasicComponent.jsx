import React from 'react';
import PropTypes from 'prop-types';

function BasicComponent(props) {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>I have been passed the number: {props.number}</div>
      <button onClick={() => props.decrement(5)}>- 5</button>
      <button onClick={() => props.decrement(1)}>- 1</button>
      <button onClick={() => props.increment(1)}>+ 1</button>
      <button onClick={() => props.increment(5)}>+ 5</button>
    </div>
  );
}

BasicComponent.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

module.exports = BasicComponent;
