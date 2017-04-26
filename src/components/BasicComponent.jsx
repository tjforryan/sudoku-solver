import React from 'react';
import PropTypes from 'prop-types';

function BasicComponent(props) {
  return (
    <div>
      I have been passed the number: {props.number}
    </div>
  );
}

BasicComponent.propTypes = {
  number: PropTypes.number,
};

module.exports = BasicComponent;
