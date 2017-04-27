import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasicComponent from '../components/BasicComponent';
import { incrementNumber, decrementNumber } from '../actions/counter';

class App extends React.Component {
  componentWillReceiveProps() {
    console.log('Receiving props!');
  }

  increment = (number) => {
    this.props.dispatch(incrementNumber(number)); // eslint-disable-line react/prop-types
  }

  decrement = (number) => {
    this.props.dispatch(decrementNumber(number)); // eslint-disable-line react/prop-types
  }

  render() {
    return (
      <div>
        <BasicComponent
          number={this.props.number}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

App.propTypes = {
  dipatch: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  number: PropTypes.number,
};

function mapStateToProps(state) {
  return {
    number: state.basicReducer.number,
  };
}

export default connect(mapStateToProps)(App);
