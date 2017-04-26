import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import BasicComponent from './components/BasicComponent';

class App extends React.Component {
  componentWillReceiveProps() {
    console.log('I would receive props now... if I had any...');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <BasicComponent number={0} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<App />, document.getElementById('app'));
