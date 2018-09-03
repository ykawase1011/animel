import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// スクロールバー設定
import { Scrollbars } from 'react-custom-scrollbars';

// Google Analystics関連
import WithTracker from '../components/WithTracker'

// Google Adsense関連
import AdSense from 'react-adsense';

// スタイル
const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },
  footer: {
    marginTop: 'auto',
  },
});

const WrapMainContent = (WrappedComponent, options = {}) => {

  const HOC = class extends React.Component {
    
    render() {
    
      // Material-ui関連
      const { classes, ...other_props } = this.props;
    
      return (
        <Scrollbars>
          
          {/* classNameでwrapperとfooterを指定することで、footer（今回はAdsense）をページ下部に貼り付けることが出来る（見た目用途） */}
          <div className={classes.wrapper}>
          
          
            <WrappedComponent {...other_props} />
            
            {/* Google Adsense設定。詳細はこちら：https://github.com/hustcc/react-adsense */}
            {/* clientやstlotは私の設定なので実際は各自の値を利用すること */}
            <div className={classes.footer}>
              <AdSense.Google
                client='ca-pub-3774224802378126'
                slot='5432750074'
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
              />
            </div>
          </div>
        </Scrollbars>
      );
    }
  };

  return (
    WithTracker( //Google Analystics用Wrapper
      withStyles(styles, { withTheme: true })(HOC)
    )
  );
};

export default WrapMainContent;