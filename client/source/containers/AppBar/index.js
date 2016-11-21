import React                     from 'react';
import { withRouter }            from 'react-router';
import { connect }               from 'react-redux';
import { bindActionCreators }    from 'redux';
import AppBar                    from 'components/AppBar';
import { logoutUser }            from 'actions/auth';

class AppBarContainer extends React.Component {
  render () {
    let { props } = this;

    return (
      <AppBar {...props} />
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps (dispatch) {
  return {
    logoutUser: bindActionCreators(logoutUser, dispatch)
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBarContainer));
