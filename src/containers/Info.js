import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// スタイル
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textLeft: {
    textAlign: 'left',
  },
  paragraph: {
    marginTop: 10,
    marginBottom: 10,
  },
});


class Info extends React.Component {

  render() {

    // Material-ui関連
    const { classes } = this.props;

    return (
      <div>
        <h2>Animelについて</h2>
        <div className={classes.textLeft}>
        
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              Animelとは
            </Typography>
            <Typography component="p">
              今期のアニメから過去のアニメまで、情報を一覧表示するアプリ。各クールのアニメのタイトル・サブタイトル・ハッシュタグ・Twitter・公式サイトを一覧に表示します。2014年以降のアニメに対応しております。
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              構成要素
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              本アプリでは下記技術を用いており、各サービスの仕様変更ならびに障害発生時には、本アプリの提供・公開を中断する場合もございます。予めご了承下さい。
            </Typography>
            <Typography component="div" className={classes.paragraph}>
              <ul>
                <li>Firebase Hosting</li>
                <li>ShangriLa Anime API V1</li>
                <li>React・Redux・Material-UI</li>
              </ul>
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              本アプリの目的
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              このアプリは、SPAアプリ作成入門者が、React・Redux・Material-UI等を使ってアプリを作るためのHowTo用途で作成しています。
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              コードも公開しているのでこんな感じのアプリを作りたい方は下記記事などを参考にしてみて下さい。ただ、私自身も初学者のためあくまで参考程度にご利用下さい。（ご指摘・質問など大歓迎）
            </Typography>
          </Paper>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              ソース・説明など
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              ソース：
              <a href="https://github.com/ykawase1011/animel" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              説明：
              <a href="https://blog.f-arts.work/archives/791" target="_blank" rel="noopener noreferrer">
                こちらで作り方解説
              </a>
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              自己紹介
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              <a href="https://twitter.com/y_kawase" target="_blank" rel="noopener noreferrer">
                @y_kawase
              </a>
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              フリーランスで働き方改革＆模索中。モノを作る事が好き。プログラミングの講師業もやってます。 
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              PHP、Ruby on Railsあたりを好んでおりますが基本雑食。フロントエンド～サーバーサイドまでやれる、なんちゃってフルスタックエンジニアを目指しています。
              <a href="https://blog.f-arts.work/" target="_blank" rel="noopener noreferrer">
                ブログ
              </a> 
              でWordPressやRoR系のネタで記事投稿してますので是非遊びにいらして下さい。
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              ご指摘・ご質問などは、
              <a href="https://twitter.com/y_kawase" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              もしくは
              <a href="https://blog.f-arts.work/" target="_blank" rel="noopener noreferrer">
                当方ブログお問い合わせ
              </a>
              よりご連絡下さい。
            </Typography>
          </Paper>
          
          <Paper className={classes.root} elevation={1}>
            <Typography variant="headline" component="h3">
              謝辞
            </Typography>
            <Typography component="p" className={classes.paragraph}>
              <a href="https://qiita.com/AKB428/items/64938febfd4dcf6ea698" target="_blank" rel="noopener noreferrer">
                @AKB428さんの「ShangriLa Anime API V1」
              </a>
              をお借り致しました。素晴らしいAPIを生み出して頂き、ありがとうございます。
            </Typography>
          </Paper>
        
        </div>
      </div>
    );
  }
}

// Material-ui関連
Info.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


// Material-uiのテーマ設定
export default withStyles(styles, { withTheme: true })(Info);