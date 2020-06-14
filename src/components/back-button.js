import React from 'react'
import BackIcon from '@material-ui/icons/KeyboardBackspace'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const BackButton = ({ classes }) => <IconButton variant={'contained'} component={Link}
                                                to={'/'}
                                                className={classes.button}>
  <BackIcon />
</IconButton>

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})


export default withStyles(styles)(BackButton)
