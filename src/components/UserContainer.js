import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

export const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h1>All Users</h1>
      <div className="details">
          {
            userData.users.map(user => (
              <a href={'#' + user.id} key={user.id}>
                  <h3>User ID- {user.id} your name is {user.name},  and with username {user.username}</h3>
              </a>
            ))
          }
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
