import React from 'react';

export default class Link extends React.Component {
  render () {
    let { text, href } = this.props;

    return (
      <li>
        <a href={href}>{text}</a>
      </li>
    );
  }
}
