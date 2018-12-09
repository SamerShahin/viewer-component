import React from 'react';
import s from './App.st.css';

class App extends React.Component {



  render() {
    console.log(this.props);

    // const styleId = this.props.styleId;


    return (
      <div className={s.text}>Hello {this.props.name}</div>
    );
  }
}

export default {
  component: App,
  style: s.$skin
};
