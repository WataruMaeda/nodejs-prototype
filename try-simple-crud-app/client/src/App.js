import React, { Component } from 'react'
import { Button, Input } from './components'
import { postUser, getUsers } from './Service'
import userImg from './assets/user.svg'

export default class App extends Component {
  state = {
    name: '',
    age: '',
    errors: {},
    users: [],
  }

  componentWillMount() {
    this.fetchUsers()
  }

  fetchUsers = () => {
    getUsers().then(users => {
      console.log('fetched users: ', users)
      this.setState({ users })
    }).catch(e => {
      console.log('failed fetch users', e)
    })
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
      // post request
      const { name, age } = this.state
      postUser(name, age).then(res => {
        console.log('post success: ', res)
        this.fetchUsers()
      }).catch(e => {
        console.log('post failed', e)
      })
    }
  }

  renderUser = ({ name, age }) => {
    return (
      <div style={styles.userContainer}>
        <img src={userImg} style={styles.profImg}/>
        <div>{name}</div>
        <div>{age}</div>
      </div>
    )
  }

  render() {
    const { name, age, errors, users } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.contentsContainer}>
          <Input
            title="Nick Name"
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
        <div style={styles.contentsContainer}>
          {users.map(user => this.renderUser(user))}
        </div>
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
  contentsContainer: {
    flex: 1,
    padding: '10% 10%',
    borderLeft: `1px solid lightGray`,
  },
  userContainer: {
    margin: '0 10%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 60,
    color: 'white',
    background: '#0984e3',
    margin: '50px 0 0',
  },
  profImg: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 30,
    margin: 10,
    width: 60,
    height: 60,
  }
}