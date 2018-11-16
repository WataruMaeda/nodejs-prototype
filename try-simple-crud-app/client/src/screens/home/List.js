import React, { Component } from 'react'
import userImg from '../../assets/user.svg'

export default class List extends Component {
  state = {
    users: this.props.users ? this.props.users : [],
  }

  renderUser = ({ name, age }) => {
    return (
      <div style={styles.userContainer}>
        <img src={userImg} style={styles.profImg}/>
        <div style={styles.user}>{`${name} (${age})`}</div>
      </div>
    )
  }

  render() {
    const { users } = this.state
    return (
      <div style={styles.container}>
        {users.map(user => this.renderUser(user))}
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