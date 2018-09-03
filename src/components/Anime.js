import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  // Cards
  card: {
    width: 330,
    marginTop: 10,
    marginBottom: 10,
  },
  empty: {
    width: 330,
    height: 0,
    margin: 0,
    padding: 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  
  // Avatar Icons
  avatar: {
    margin: 10,
  },
  twitterAvatar: {
    margin: 10,
    backgroundColor: '#1da1f2',
  },
  wwwAvatar: {
    margin: 10,
    backgroundColor: '#6c1df2',
    padding: 7,
    boxSizing: 'border-box',
  },
  row: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

function Anime(props) {
  const { empty, title, title_short1, title_short2, twitter_hash_tag, twitter_account, public_url, classes } = props;

  if (empty === "true") {
    return (
      <Card className={classes.empty}>
      </Card>
    );
  } else {
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {title}
          </Typography>
          {title_short1 !== '' &&
            <Typography className={classes.title} color="textSecondary">
              {title_short1}
            </Typography>
          }
          {title_short2 !== '' &&
            <Typography className={classes.title} color="textSecondary">
              {title_short2}
            </Typography>
          }
          {twitter_hash_tag !== '' &&
            <Typography className={classes.title} color="textSecondary">
              <a href={'https://twitter.com/search?q=%23'+twitter_hash_tag} target="_blank" rel="noopener noreferrer">
                #{twitter_hash_tag}
              </a>
            </Typography>
          }
        </CardContent>
        <CardActions>
          <div className={classes.row}>
            {twitter_account !== '' &&
              <a href={'https://twitter.com/'+twitter_account} target="_blank" rel="noopener noreferrer">
                <Avatar className={classes.twitterAvatar} src="/images/twitter.svg"/>
              </a>
            }
            {public_url !== '' &&
              <a href={public_url} target="_blank" rel="noopener noreferrer">
                <Avatar className={classes.wwwAvatar} src="/images/www.svg"/>
              </a>
            }
          </div>
        </CardActions>
      </Card>
    );
  }
}

Anime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Anime);