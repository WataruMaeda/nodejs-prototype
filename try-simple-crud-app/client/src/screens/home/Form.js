import React, { Component } from 'react'
import { Button, Input } from '../../components'
import { postUser, getUsers } from '../../service/User'
import userImg from '../../assets/user.svg'

export default class Form extends Component {
  state = {
    name: '',
    age: '',
    errors: {},
  }

  validate = () => {
    var errors = {}
    var isError = false

    Object.keys(this.state).forEach(key => {

      if (key === 'name' && this.state[key].length === 0) {
        isError = true
        errors[key] = 'Please input your name'
      }

      if (key === 'age' && this.state[key] === '') {
        isError = true
        errors[key] = 'Please input your age'
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
      const { name, age } = this.state
      this.props.onClickSubmit(name, age)
    }
  }

  render() {
    const { name, age, errors } = this.state
    return (
      <div style={styles.container}>
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
          title="Age"
          value={age}
          type="number"
          name="age"
          placeholder=""
          onChange={this.handleInputChange}
          error={errors.age ? errors.age : ''}
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
    padding: '10% 10%',
    borderLeft: `1px solid lightGray`,
  },
  button: {
    height: 60,
    color: 'white',
    background: '#0984e3',
    margin: '50px 0 0',
  },
}