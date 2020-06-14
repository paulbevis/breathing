import React from 'react'
import Typography from '@material-ui/core/es/Typography/Typography'
import { withStyles } from '@material-ui/core'

import prepBeep from '../assets/sounds/prep-beep.mp3'
import finalBeep from '../assets/sounds/final-beep.mp3'

const audioPrepBeep = new Audio(prepBeep)
const audioFinalBeep = new Audio(finalBeep)

const Activity = React.memo(({ classes, description, time, active }) => {

  console.log({ description, time })

  if (time <= 5 && time !== 0) {
    audioPrepBeep.play()
  }
  if (time === 0) {
    audioFinalBeep.play()
  }
  return (
    <div className={classes.row}>
      <Typography variant={'h6'}>{description}</Typography>
      <Typography variant={'subtitle1'}>{time}</Typography></div>)
})

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}


export default withStyles(styles)(Activity)