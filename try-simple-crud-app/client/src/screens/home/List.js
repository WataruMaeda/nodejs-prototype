import React, { Component } from 'react'
import userImg from '../../assets/user.svg'

export default class List extends Component {
  state = {
    users: this.props.users ? this.props.users : [],
  }

  componentWillReceiveProps() {
    const { users } = this.props
    if (users) this.setState({ users })
  }

  renderUser = ({ name, age }) => {
    return (
      <div style={styles.userContainer}>
        <img src={userImg} style={styles.profImg} alt="user"/>
        <div style={styles.user}>{`${name} (${age})`}</div>
      </div>
    )
  }

  render() {
    const { users } = this.state
    return (
      <div style={styles.container}>
        <h1>User List</h1>
        {users.map(user => this.renderUser(user))}
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    padding: '2% 10%',
    borderLeft: `1px solid lightGray`,
    overflowY: 'auto',
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