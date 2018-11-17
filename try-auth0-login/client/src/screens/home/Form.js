import React, { Component } from 'react'
import { Button, Input } from '../../components'

export default class Form extends Component {
  state = {
    name: '',
    password: '',
    errors: {},
  }

  validate = () => {
    var errors = {}
    var isError = false

    Object.keys(this.state).forEach(key => {
      if (this.state[key].length === 0) {
        isError = true
        errors[key] = 'This field is mandatory'
      }
    })

    this.setState({ errors })
    return isError
  }

  handleInputChange = (event) => {
    const { value, name } = event.target
    const { errors } = this.state
    errors[name] = null
    this.setState({ [name]: value, errors })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const error = this.validate()
    if (!error) {
      const { name, password } = this.state
      this.props.onClickSubmit(name, password)
    }
  }

  render() {
    const { name, password, errors } = this.state
    return (
      <div style={styles.container}>
        <h1>login</h1>
        <Input
          title="Name"
          value={name}
          type="text"
          name="name"
          placeholder=""
          onChange={this.handleInputChange}
          error={errors.name ? errors.name : ''}
        />
        <Input
          title="Password"
          value={password}
          type="password"
          name="password"
          placeholder=""
          onChange={this.handleInputChange}
          error={errors.password ? errors.password : ''}
        />
        <Button
          title="Submit"
          style={styles.button}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: '2% 10%',
  },
  button: {
    height: 60,
    color: 'white',
    background: '#25a6b3',
    margin: '50px 0 0',
  },
}