import React, { Component } from 'react';
import styles from './Component.module.css';


class Timer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         timeLeft: this.props.time,
         running: this.props.autostart,
      };
      this.timer = null;
   }

   componentDidMount() {
      if (this.state.running) {
         this.startTimer();
      }
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   toggleTimer = () => {
      if (this.state.running) {
         clearInterval(this.timer);
      } else {
         this.startTimer();
      }
      this.setState((prevState) => ({ running: !prevState.running }));
   };

   startTimer = () => {
      this.props.onTimeStart && this.props.onTimeStart(this.state.timeLeft);
      this.timer = setInterval(this.tick, this.props.step * 1000);
   };

   tick = () => {
      if (this.state.timeLeft <= 0) {
         this.pauseTimer();
         this.props.onTimeEnd && this.props.onTimeEnd();
      } else {
         this.setState(
            (prevState) => ({ timeLeft: prevState.timeLeft - this.props.step }),
            () => this.props.onTick && this.props.onTick(this.state.timeLeft)
         );
      }
   };

   pauseTimer = () => {
      clearInterval(this.timer);
      this.props.onTimePause && this.props.onTimePause(this.state.timeLeft);
   };

   render() {
      return (
         <div className={styles.container} >
            <div className={styles.timer} >{this.state.timeLeft}</div>
            <button  onClick={this.toggleTimer}>
               {this.state.running ? 'Pause' : 'Start'}
            </button>
         </div>
      );
   }
}

export default Timer;