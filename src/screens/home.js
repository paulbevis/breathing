import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
      }}>
        <Fragment>
          <Button variant={'contained'} component={Link} to={'/breathe-up'}>Breathe Up</Button>
          <Button variant={'contained'} component={Link} to={'/co2-tables'}>Co² Tables</Button>
          <Button variant={'contained'} component={Link} to={'/o2-tables'}>o² Tables</Button>
        </Fragment>
      </div>

    )
  }
}

export default Home
