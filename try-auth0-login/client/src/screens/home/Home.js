import React, { Component } from 'react'
import Form from './Form'

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Form onClickSubmit={this.postUser} />
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
}