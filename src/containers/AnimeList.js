import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux関連
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

// コンポーネントの準備
import Anime from '../components/Anime'

// スタイル
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

class AnimeList extends React.Component {

  render() {
    // redux関連
    const { AnimeListReducer } = this.props;
    
    // Material-ui関連
    const { classes } = this.props;
    
    // Anime関連
    const animeItems = AnimeListReducer.items;
    let renderCards = [];
    let animeCards =[];
    let emptyCards =[];
    const animeItemsLength = animeItems.length;
    
    for (let index=0; index<animeItemsLength; index++){
      animeCards.push(<Anime key={index} {...animeItems[index]}/>);
      emptyCards.push(<Anime key={animeItemsLength + index} empty="true"/>);
    }
    renderCards.push(animeCards);
    renderCards.push(emptyCards);

    
    // 読み込み中はロード画面にする
    if (AnimeListReducer.isFetching === true){
      return (
        <div>
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    
    // カードを表示
    } else {
      return (
        <div className={classes.root}>
          {renderCards}
        </div>
      );
    }
  }
}

// Material-ui関連
AnimeList.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Redux関連
const mapState = (state, ownProps) => ({
  AnimeListReducer: state.AnimeListReducer,
});
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

// Material-uiのテーマ設定＋Redux設定
export default connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(AnimeList)
);