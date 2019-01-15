import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const styles = {
  root: {
    "margin": '2.8em 0px 0px 5em',
    "position": "absolute",
    "transform": "translate(-50%)",
    "left": "20%",
    "width": "27%",
    'z-index': 10,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class LocationSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
  }

  render() {
  const { classes } = this.props;
    return (
        <Paper className={classes.root} elevation={1}>
          <IconButton className={classes.iconButton} aria-label="Menu">
          </IconButton>

        {/* this is the input portion */}
          <InputBase className={classes.input} placeholder="Search OurNYC" />

          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} />
          <IconButton color="primary" className={classes.iconButton} aria-label="Directions">
            <DirectionsIcon />
          </IconButton>
        </Paper>
    );
  }
}

LocationSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationSearch);
