import React, { Component } from 'react'
import { Button, Input } from './components'

export default class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    error: {}
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    const { errors } = this.state
    errors[name] = null
    this.setState({ [name]: value, errors })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    // TODO: validation
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentsContainer}>
          <Input
            title="First Name"
            value={''}
            type="text"
            name="firstName"
            placeholder=""
            onChange={this.handleInputChange}
            error={''}
          />
          <Input
            title="Last Name"
            value={''}
            type="text"
            name="lastName"
            placeholder=""
            onChange={this.handleInputChange}
            error={''}
          />
          <Button
            title="Submit"
            style={styles.button}
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: '100vh',
  },
  contentsContainer: {
    margin: '10% 33%',
  },
  button: {
    height: 60,
    color: 'white',
    background: 'orange',
    margin: '50px 0 0',
  }
}