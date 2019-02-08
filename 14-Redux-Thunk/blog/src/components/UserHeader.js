import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render = () => {
    if (!this.props.user) {
      return (
        <div className="ui placeholder">
          <div className="header">
            <div className="short line" />
          </div>
        </div>
      );
    }
    return <div className="header">{this.props.user.name}</div>;
  };
}

const mapStateToProps = ({ users }, { userId }) => {
  const user = users.find(user => (user.id = userId));
  return { user };
};

export default connect(mapStateToProps)(UserHeader);
