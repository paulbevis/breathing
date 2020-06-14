import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/es/Typography'
import Activity from '../components/activity'
import { withStyles } from '@material-ui/core'
import BackButton from '../components/back-button'
import * as R from 'ramda'

const finishedBreating = R.propEq('breatheTime', 0)
const finishedHolding = R.propEq('holdTime', 0)
const setFinished = R.allPass([finishedBreating, finishedHolding])
const allSetsFinished = R.all(setFinished)

class Co2Tables extends Component {
  state = {
    sets: [
      {
        breatheTime: 90,
        holdTime: 60,
      },
      {
        breatheTime: 90,
        holdTime: 75,
      },
      {
        breatheTime: 90,
        holdTime: 90,
      }, {
        breatheTime: 90,
        holdTime: 105,
      }, {
        breatheTime: 90,
        holdTime: 120,
      }, {
        breatheTime: 90,
        holdTime: 135,
      }, {
        breatheTime: 90,
        holdTime: 150,
      }, {
        breatheTime: 90,
        holdTime: 165,
      },
    ],
    currentSet: 0,
    totalSets: 2,
    completed: false,
  }


  incrementor = () => {
    if (!this.state.completed) {
      this.setState(prevState => {
        const breatheDecrementValue = prevState.sets[prevState.currentSet].breatheTime !== 0 ? 1 : 0
        const holdDecrementValue = (!breatheDecrementValue && prevState.sets[prevState.currentSet].holdTime !== 0) ? 1 : 0
        const currentSet = (breatheDecrementValue === 0 && holdDecrementValue === 0) ? prevState.currentSet + 1 : prevState.currentSet

        if (allSetsFinished(this.state.sets)) {
          return { completed: true }
        }

        const newSets = [
          ...prevState.sets.slice(0, currentSet),
          Object.assign({}, {
            breatheTime: prevState.sets[currentSet].breatheTime - breatheDecrementValue,
            holdTime: prevState.sets[currentSet].holdTime - holdDecrementValue
          }),
          ...prevState.sets.slice(currentSet + 1)]
        return { sets: newSets, currentSet }
      })
    }
  }

  componentDidMount() {
    this.incrementor()

  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.timerId = setTimeout(this.incrementor, 1000)
  }

  render() {
    const { classes } = this.props

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: '300px',
        height: '100vh',
      }}>

        <BackButton back={this.props.back} />
        <div className={classes.wrapper}>

          <Typography variant={'h4'}>O² Tables</Typography>
          {
            this.state.completed ? <Typography variant={'h3'}>Completed!</Typography> :
              <Fragment>
                {this.state.sets.map((set, index) => this.activityPair(classes, index + 1,
                  this.state.sets[index].breatheTime, this.state.sets[index].holdTime))}
              </Fragment>
          }
        </div>
      </div>
    )
  }

  activityPair(classes, number, breatheTime, holdTime) {
    return <div key={number} className={classes.pairing}>
      <Typography className={classes.number} variant={'caption'}>{`${number}.`}</Typography>
      <div className={classes.activity}>
        <Activity description={'Breathe'} time={breatheTime} />
        <Activity description={'Hold'} time={holdTime} />
      </div>
    </div>
  }
}

const styles = (theme) => ({
  activity: {
    minWidth: '200px'
  },
  pairing: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing.unit * 0.5,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center'
  },
  number: {
    paddingTop: theme.spacing.unit * 0.5,
  }
})


export default withStyles(styles)(Co2Tables)
