'use strict';

const e = React.createElement;

const Header = () => {
    return e('div', { class: 'header' },
            e('h2',null, 'React Pomodoro Clock'),
            );
};

const Footer = () => {
    return e('div', { class: 'footer' }, 
        [ String.fromCharCode(169), // copyright symbol &#169;
          ' 2019 ' ,
          e('a', {href: 'http://cleoaguiar.github.io'}, 'Cleo Aguiar'), 
          '. All rights reserved.']
        );
};

class TimerLengthControl extends React.Component
{
  render()
  {
    return e('div', {class: 'length-control'}, 
            [e('div', {id: this.props.titleID}, this.props.title),
             e('button', {id: this.props.dec, onClick: this.props.onClick, value: '-'}, e('i', {class: 'material-icons md-36'}, 'keyboard_arrow_up')),
             e('div', {id: this.props.lengthID}, this.props.length),
             e('button', {id: this.props.inc, onClick: this.props.onClick, value: '+'},  e('i', {class: 'material-icons md-36'}, 'keyboard_arrow_down'))]);
  }
};

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timeType: 'Session',
      timer: 1500
    }

    this.clock = this.clock.bind(this);
    this.reset = this.reset.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
  }

  clock()
  {
    let min = Math.floor(this.state.timer / 60);
    let sec = this.state.timer - min * 60;
    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;

    return min + ':' + sec;
  }

  reset()
  {
    this.setState ({
      breakLength: 5,
      sessionLength: 25,
      timeType: 'Session',
      timer: 1500
    });
  }

  setBreakLength(event)
  {
    event.currentTarget.value == '-' ?
      this.state.breakLength >= 1 ?
        this.setState({ breakLength : this.state.breakLength - 1 })
        : this.setState({ breakLength : 0 })
    : this.state.breakLength < 60 ?
        this.setState({ breakLength: this.state.breakLength + 1 })
        : this.setState({ breakLength: 60 })
  }

  setSessionLength(event)
  {
    event.currentTarget.value == '-' ?
      this.state.sessionLength >= 1 ?
        this.setState({ sessionLength : this.state.sessionLength - 1 })
        : this.setState({ sessionLength : 0 })
    : this.state.sessionLength < 60 ?
        this.setState({ sessionLength: this.state.sessionLength + 1 })
        : this.setState({ sessionLength: 60 })
  }

	render()
	{
		return [e(Header), 
            e(TimerLengthControl, {titleID: 'break-label', title: 'Break Length', dec: 'break-decrement', inc: 'break-increment', lengthID: 'break-length' , length: this.state.breakLength, onClick: this.setBreakLength }),
            e(TimerLengthControl, {titleID: 'session-label', title: 'Session Length', dec: 'session-decrement', inc: 'session-increment', lengthID: 'session-length', length: this.state.sessionLength, onClick: this.setSessionLength }),
            e('div', {class: 'timer'},
              [e('div', {class: 'timer-label'}, this.state.timeType),
               e('div', {class: 'time-left'}, this.clock()),
               e('div', {class: 'time-control'}, 
                [e('button', {class: 'start_stop'}, e('i', {class: 'material-icons'}, 'play_circle_outline')),
                 e('button', {class: 'reset', onClick: this.reset }, e('i', {class: 'material-icons'}, 'loop'))
                ])
              ]),
            e(Footer)];
	}
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);