import React, { Component } from 'react'
import { postUser, getUsers } from '../../service/User'
import userImg from '../../assets/user.svg'
import Form from './Form'
import List from './List'

export default class Home extends Component {
  state = {
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

  render() {
    const { users } = this.state
    return (
      <div style={styles.container}>
        <Form onClickSubmit={(name, age) => {
          postUser(name, age).then(res => {
            console.log('post success: ', res)
            this.fetchUsers()
          }).catch(e => {
            console.log('post failed', e)
          })
        }}/>
        <List users={users} />
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
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profImg: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 30,
    margin: 10,
    width: 60,
    height: 60,
  },
  user: {
    fontSize: 18,
    color: '#556180',
  }
}