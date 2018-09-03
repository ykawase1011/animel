import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// スタイル
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});


class Settings extends React.Component {
  
  // Reduxを使うまでもないので状態はここで管理します
  state = {
    checked: [],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };
  
  
  // このSettingsがアップデートされた時にrender前に呼ばれる。state変更はNGなので注意。
  componentDidUpdate(prevProps, prevState) {
    // redux関連
    const { actions } = this.props;
    
    // もしNotificationがONになったら
    if (prevState.checked.indexOf('notification') === -1 && this.state.checked.indexOf('notification') !== -1) {
      actions.setNotification('info', 'Notification');
    }
  }
  
  render() {

    // Material-ui関連
    const { classes } = this.props;
    
    // やる気スイッチアイコン
    const yarukiSwitchIcon = this.state.checked.indexOf('yaruki') !== -1 ? <SentimentVerySatisfiedIcon />  :<SentimentDissatisfiedIcon />;

    return (
      <div>
        <h2>設定</h2>
        <p>のようなもの</p>
        <div className={classes.root}>
          <List>
            <ListItem>
              <ListItemIcon>
                <NotificationsActiveIcon/>
              </ListItemIcon>
              <ListItemText primary="Notificationで出すぞ" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={this.handleToggle('notification')}
                  checked={this.state.checked.indexOf('notification') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {yarukiSwitchIcon}
              </ListItemIcon>
              <ListItemText primary="ただのやる気スイッチ" />
              <ListItemSecondaryAction>
                <Switch
                  onChange={this.handleToggle('yaruki')}
                  checked={this.state.checked.indexOf('yaruki') !== -1}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

// Material-ui関連
Settings.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(Settings)
);