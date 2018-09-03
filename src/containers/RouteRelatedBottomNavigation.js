import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// Material-UIアイコン取得
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

// Route関連
import { Link, withRouter } from 'react-router-dom';


// スタイル
const styles = theme => ({
  wrapper:{
    display: 'block',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    zIndex: 1000,
    textAlign: 'center',
  },
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  button: {
    maxWidth: '100%', // ボタンが横一杯に広がって欲しくない時はコメントアウト
  },
});




class RouteRelatedBottomNavigation extends React.Component {
  buttons_info = [
    { label: 'トップページ', icon: <HomeIcon />, link_to: '/'},
    { label: 'Animelとは', icon: <InfoIcon />, link_to: '/info'},
  ];
  
  buttons = this.buttons_info.map( (button_info, index) => {
      return (
        <BottomNavigationAction
          value={button_info.link_to}
          label={button_info.label}
          className={this.props.classes.button}
          icon={button_info.icon}
          component={Link}
          to={button_info.link_to}
        />
      );
    })
  
  render() {
    // Material-ui関連
    const { classes } = this.props;
    
    return (
      <div className={classes.wrapper}>
        <BottomNavigation
          value={this.props.location.pathname}
          showLabels
          className={classes.root}
          children={this.buttons}
        />
      </div>
    );
  }
}

// Material-ui関連
RouteRelatedBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定＋Redux設定＋React-Router情報取得
export default withRouter(
  withStyles(styles, { withTheme: true })(RouteRelatedBottomNavigation)
);