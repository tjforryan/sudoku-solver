import React from 'react';
import PropTypes from 'prop-types';

class SudokuContainer extends React.Component {
  render() {
    return (
      <div>
        The number is {this.props.number}
      </div>
    );
  }
}

SudokuContainer.propTypes = {
  number: PropTypes.number,
};

module.exports = SudokuContainer;
