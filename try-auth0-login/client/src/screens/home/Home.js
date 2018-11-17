import React, { Component } from 'react'
import Form from './Form'
import Auth from '../../service/Auth'

export default class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Form onClickSubmit={(name, password) => {
          const auth = new Auth()
          auth.login()
        }}/>
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