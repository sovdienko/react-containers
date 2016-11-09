import React, { Component } from 'react';
import UserList from '../views/user-list';
import * as userApi from '../../api/user-api';

import { connect } from 'react-redux';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

class UserListContainer extends Component {

  componentDidMount() {
    userApi.getUsers();
    store.dispatch(loadSearchLayout('users', 'Users Results'));
  }


  render() {
    return (
      <UserList users={this.props.users} deleteUser={userApi.deleteUser} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

export default connect(mapStateToProps)(UserListContainer);
