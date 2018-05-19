import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function RaisedButtons(props) {
  const { classes } = props;
  return (
    <div className="button-container">
      <Button variant="raised" size="large" color="primary" className={classes.button} 
       onClick={() => props.clickHandler("shopping")}
       >
        Shopping
      </Button>
      <Button variant="raised" size="large" color="primary" className={classes.button}
       onClick={() => props.clickHandler("food")}
       >
        Food
      </Button>
      <Button variant="raised" size="large" color="primary" className={classes.button} 
       onClick={() => props.clickHandler("funPlaces")}
       >
        Fun Places
      </Button>
      <Button variant="raised" size="large" color="primary" className={classes.button} 
       onClick={() => props.clickHandler("services")}
       >
        Services
      </Button>
    </div>
  );
}

RaisedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RaisedButtons);
