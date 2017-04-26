import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import BasicComponent from './components/BasicComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <BasicComponent number={0} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

ReactDOM.render(<App name="Tom" />, document.getElementById('app'));
