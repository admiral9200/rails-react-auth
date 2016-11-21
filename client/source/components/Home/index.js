import React            from 'react';
import styles           from './styles.css';

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h1 className={styles.title}>{'Welcome to your App!'}</h1>
        <p>{'This is the root of your app'}</p>
      </div>
    );
  }
}
