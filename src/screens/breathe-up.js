import React, { Component } from 'react'
import '../App.css'
import BackButton from '../components/back-button'
import Typography from '@material-ui/core/es/Typography/Typography'

const titles = {
  start: { title: 'Starting', subTitle: 'in' },
  in: { title: 'Breathe', subTitle: 'in' },
  hold: { title: 'Hold', subTitle: 'now' },
  out: { title: 'Breathe', subTitle: '0ut' }
}

const states = [{
  heading: titles.start,
  seconds: '3'
}, {
  heading: titles.start,
  seconds: '2'
}, {
  heading: titles.start,
  seconds: '1'
}, {
  heading: titles.in,
  seconds: '1'
}, {
  heading: titles.in,
  seconds: '2'
}, {
  heading: titles.in,
  seconds: '3'
}, {
  heading: titles.in,
  seconds: '4'
}, {
  heading: titles.in,
  seconds: '5'
}, {
  heading: titles.hold,
  seconds: ''
}, {
  heading: titles.hold,
  seconds: ''
}, {
  heading: titles.out,
  seconds: '1'
}, {
  heading: titles.out,
  seconds: '2'
}, {
  heading: titles.out,
  seconds: '3'
}, {
  heading: titles.out,
  seconds: '4'
}, {
  heading: titles.out,
  seconds: '5'
}, {
  heading: titles.out,
  seconds: '6'
}, {
  heading: titles.out,
  seconds: '7'
}, {
  heading: titles.out,
  seconds: '8'
}, {
  heading: titles.out,
  seconds: '9'
}, {
  heading: titles.out,
  seconds: '10'
},
]

class BreatheUp extends Component {
  state = {
    title: '',
    subTitle: '',
    counter: 0,
    seconds: '',
  }

  incrementor = () =>
    this.setState(prevState => {
        return {
          counter: prevState.counter < (states.length - 1) ? prevState.counter + 1 : 0,
          title: states[prevState.counter].heading.title,
          subTitle: states[prevState.counter].heading.subTitle,
          seconds: states[prevState.counter].seconds,
        }
      }
    )

  componentDidMount() {
    this.incrementor()
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.timerId=setTimeout(this.incrementor, 1000)
  }

  render() {
    const { title, seconds, subTitle } = this.state
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: '300px',
        height: '100vh',
      }}>
        <BackButton back={this.props.back} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Typography variant={'h4'}>Breathe Up</Typography>
          <h2>{title}</h2>
          <h2>{subTitle}</h2>
          <h2>{seconds}</h2>
        </div>
      </div>
    )
  }
}

export default BreatheUp
