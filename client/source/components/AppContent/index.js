import React  from 'react';
import styles from './styles.css';

export default class AppContent extends React.Component {
  render () {
    let { children } = this.props;

    return (
      <div className={styles['content-wrapper']}>
        {children}
      </div>
    );
  }
}
