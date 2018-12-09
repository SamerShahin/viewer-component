import React from 'react';

class App extends React.Component {

  render() {

    return (
      <div style={{fontSize: '20px'}}>Hello {this.props.name}</div>
    );
  }
}

export default {
  component: App
};
