import React, { Component } from 'react';
import Timer from './Component/Timer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer
          time={60}
          step={1}
          autostart
          onTick={(timeLeft) => ( timeLeft)}
          onTimeStart={() => console.log('Timer started')}
          onTimePause={() => console.log('Timer paused')}
          onTimeEnd={() => console.log('Time ended!')}
        />
      </div>
    );
  }
}

export default App;


