import React            from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar           from 'containers/AppBar';
import AppMenu          from 'components/AppMenu';
import AppContent       from 'components/AppContent';
import styles           from './styles.css';

// This is required by material-ui:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.handleMenuToggle = this.handleMenuToggle.bind(this);

    this.state = {
      menuOpen: false
    };
  }

  handleMenuToggle () {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render () {
    let { children } = this.props;

    return (
      <MuiThemeProvider>
        <div className={styles.app}>
          <AppBar
            title={'My Application'}
            onLeftIconButtonTouchTap={this.handleMenuToggle}
          />

          <AppMenu
            title={'Menu'}
            open={this.state.menuOpen}
            onLeftIconButtonTouchTap={this.handleMenuToggle}
          />

          <AppContent>
            { children }
          </AppContent>
        </div>
      </MuiThemeProvider>
    );
  }
}
