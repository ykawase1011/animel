import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// Material-UIアイコン取得
import Search from '@material-ui/icons/Search';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// AnimeList取得
import AnimeList from '../containers/AnimeList';

// スタイル
const styles = theme => ({
  titleImage: {
    width: '100%',
    maxWidth: 700,
  },
  
  button: {
    marginTop: 30,
    marginBottom: 20,
    fontSize: 16,
    padding: 10,
    width: 250,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
  },

  // Form
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});


const current_year = (new Date()).getFullYear();
const current_cour = Math.ceil((new Date()).getMonth() / 3);

class Home extends React.Component {

  // ここだけでしか使わないのでRedux未使用;
  state = {
    year: current_year,
    cour: current_cour,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  

  render() {

    // redux関連
    const { actions } = this.props;
    
    // Material-ui関連
    const { classes } = this.props;
    
    // Year入力
    const years = [];
    for (var y = current_year; y >= 2014; y--) {
      years.push(<MenuItem key={y} value={y}>{y}年</MenuItem>);
    }
    // Cours入力
    const cours = [];
    const cours_detail = ['1期（冬期）', '2期（春期）', '3期（夏期）', '4期（秋期）'];
    const cours_detail_month = ['冬：1～3月', '春：4～6月', '夏：7～9月', '秋：10～12月'];
    for (var i = 0; i < cours_detail.length; i++) {
      cours.push(<MenuItem key={i+1} value={i+1}>{cours_detail[i]}</MenuItem>);
    }
              

    return (
      <div>
        <img src="/images/title.png" alt="title" className={classes.titleImage}/>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="year-helper">西暦</InputLabel>
            <Select
              value={this.state.year}
              onChange={this.handleChange}
              inputProps={{
                name: 'year',
                id: 'year-helper',
              }}
            >
            {years}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="cour-helper">クール</InputLabel>
            <Select
              value={this.state.cour}
              onChange={this.handleChange}
              inputProps={{
                name: 'cour',
                id: 'cour-helper',
              }}
            >
            {cours}
            </Select>
          </FormControl>
        </form>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => actions.getAnimes(this.state.year, this.state.cour)}
        >
          {this.state.year}年（{cours_detail_month[this.state.cour-1]}）<br/>のアニメを検索
          <Search className={classes.rightIcon}/>
        </Button>
        <AnimeList/>
      </div>
    );
  }
}

// Material-ui関連
Home.propTypes = {
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
  withStyles(styles, { withTheme: true })(Home)
);