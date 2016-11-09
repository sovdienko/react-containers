import React, { Component } from 'react';
import UserProfile from '../views/user-profile';
import * as userApi from '../../api/user-api';

import { connect } from 'react-redux';

class UserProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.params.userId
    userApi.getProfile(userId);
  }

  render() {
    return (
      <UserProfile {...this.props.profile} />
    );
  }

}


const mapStateToProps = function(store) {
  return {
    profile: store.userState.userProfile
  };
};

export default connect(mapStateToProps)(UserProfileContainer);
