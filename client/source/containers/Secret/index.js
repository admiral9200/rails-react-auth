import React                  from 'react';
import Secret                 from 'components/Secret';
import { connect }            from 'react-redux';

class SecretContainer extends React.Component {
  componentWillReceiveProps () {
    let { auth } = this.props;
    console.log('auth', auth);

    if (!auth.user) {
      // this.props.router.push('/login');
    }
  }

  render () {
    let { auth } = this.props;

    return (
      <div>
        <Secret {...this.props} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  null
)(SecretContainer);
