import React, { Component } from 'react'
import { postUser, getUsers, updateUser } from '../../service/User'
import Form from './Form'
import List from './List'

export default class Home extends Component {
  state = {
    users: [],
  }

  componentWillMount() {
    this.getUsers()
  }

  getUsers = () => {
    getUsers().then(users => {
      console.log('fetched users: ', users)
      this.setState({ users })
    }).catch(e => {
      console.log('failed fetch users', e)
    })
  }

  postUser = (name, age) => {
    postUser(name, age).then(res => {
      console.log('post success: ', res)
      this.getUsers()
    }).catch(e => {
      console.log('post failed', e)
    })
  }

  updateUser = (id, age) => {
    updateUser(id, age).then(users => {
      console.log('update user: ', users)
      this.setState({ users })
    }).catch(e => {
      console.log('failed update user', e)
    })
  }

  render() {
    const { users } = this.state
    return (
      <div style={styles.container}>
        <Form onClickSubmit={this.postUser} />
        <List users={users} onClickAge={this.updateUser}/>
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