import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function CategoryButtons(props) {
  const { classes } = props;
  return (
    <div className="button-container">
      <Button variant="raised" size="large" color={props.searchCategory==="shopping"?"secondary":"primary"} className={classes.button} 
       onClick={() => props.clickHandler("shopping")}
       >
        Shopping
      </Button>
      <Button variant="raised" size="large" color={props.searchCategory==="food"?"secondary":"primary"}  className={classes.button}
       onClick={() => props.clickHandler("food")}
       >
        Food
      </Button>
      <Button variant="raised" size="large" color={props.searchCategory==="funPlaces"?"secondary":"primary"}  className={classes.button} 
       onClick={() => props.clickHandler("funPlaces")}
       >
        Fun Places
      </Button>
      <Button variant="raised" size="large" color={props.searchCategory==="services"?"secondary":"primary"}  className={classes.button} 
       onClick={() => props.clickHandler("services")}
       >
        Services
      </Button>
    </div>
  );
}

CategoryButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CategoryButtons);
