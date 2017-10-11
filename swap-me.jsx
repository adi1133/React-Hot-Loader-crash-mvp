import React from 'react';

// To reproduce the bug uncomment line 5 and comment lines 7-15

// export default () => <span>A) This is a stateless component</span>;

export default class extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return <span>B) This is a stateful component</span>;
  }
}
