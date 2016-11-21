import React                     from 'react';
import FlatButton                from 'material-ui/FlatButton';
import SvgIcon                   from 'material-ui/SvgIcon';
import MenuIcon                  from 'material-ui/svg-icons/navigation/menu';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import styles                    from './styles.css';
import * as stylesjs             from './styles.js';

export default class AppBar extends React.Component {
  constructor (props) {
    super(props);
    this.logInOut = this.logInOut.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  handleClick (url) {
    this.props.router.push(url);
  }

  logoutUser () {
    let { logoutUser } = this.props;

    return new Promise( (fulfill, reject) => {
      this.props.router.push('/');
      fulfill(true);
    }).then(() => {
      logoutUser();
    });
  }

  logInOut () {
    let { auth, logoutUser } = this.props;

    if (auth.user) {
      return <FlatButton label="Logout" onTouchTap={this.logoutUser} />;
    } else {
      return <FlatButton label="Login" onTouchTap={this.handleClick.bind(this, '/login')} />;
    }
  }

  render () {
    let { title, onLeftIconButtonTouchTap } = this.props;

    return (
      <div>
        <Toolbar style={stylesjs.menuButton}>
          <ToolbarGroup firstChild={true}>
            <FlatButton
              className={styles['menu-button']}
              onTouchTap={onLeftIconButtonTouchTap}
              icon={<MenuIcon />}
            />
          </ToolbarGroup>
          <ToolbarGroup lastChild={true}>
            <FlatButton label="Home" onTouchTap={this.handleClick.bind(this, '/')} />
            <FlatButton label="Links" onTouchTap={this.handleClick.bind(this, '/links')} />
            <FlatButton label="About" onTouchTap={this.handleClick.bind(this, '/about')} />
            <FlatButton label="Secret" onTouchTap={this.handleClick.bind(this, '/secret')} />
            {this.logInOut()}
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}
