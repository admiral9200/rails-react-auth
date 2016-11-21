import React                     from 'react';
import { connect }               from 'react-redux';
import { bindActionCreators }    from 'redux';
import { loginUser }             from 'actions/auth';
import styles                    from './styles.css';

// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/localStorage/components/Login.js
// https://github.com/auth0-blog/redux-auth/blob/master/components/Login.js
// https://www.sitepoint.com/introduction-to-using-jwt-in-rails/
// http://stackoverflow.com/questions/35381276/redux-async-requests-with-fetch-api

class LogIn extends React.Component {
  componentWillMount () {
    let { auth } = this.props;

    if (auth.user) {
      this.props.router.push('/');
    }
  }

  onLoginClick (creds) {
    this.props.loginUser(creds).then(()=> {
      this.props.router.push('/');
    });
  }

  handleClick (event) {
    const email = this.refs.email;
    const password = this.refs.password;
    const creds = { email: email.value.trim(), password: password.value.trim() };
    this.onLoginClick(creds);
  }

  render () {

    return (
      <div className={styles['email-wrapper']}>
        {'You can log in with these credentials'}

        <ul>
          <li>{'email: jhondoe@example.com'}</li>
          <li>{'password: test1234'}</li>
        </ul>

        <input type='text' ref='email' placeholder='Email' />
        <input type='password' ref='password' placeholder='Password' />
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary">
          {'Login'}
        </button>
      </div>
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
    loginUser: bindActionCreators(loginUser, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
