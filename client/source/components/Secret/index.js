import React from 'react';

export default class Secret extends React.Component {
  render () {
    let { auth } = this.props;

    return (
      <div>
        {'This page is not visible for non-loged in users.'}<br /><br />

        {`Your email is: ${auth.user.email}`}
      </div>
    );
  }
}
