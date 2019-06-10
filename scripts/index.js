'use strict';

const e = React.createElement;

const Header = () => {
    return e('div', { class: 'header' },
            [e('h2',null, 'Welcome to my React Pomodoro Clock!'),
            e('p', null, 'This page is my Fifth Front End Project FreeCodeCamp using React')]
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
             e('button', {id: this.props.dec, oncliCk: this.props.oncliCk}, '-'),
             e('div', {id: this.props.lengthID}, this.props.length),
             e('button', {id: this.props.inc, oncliCk: this.props.oncliCk}, '+')]);
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
    }
  }

	render()
	{
		return [e(Header), 
            e(TimerLengthControl, {titleID: 'break-label', title: 'Break Length', dec: 'break-decrement', inc: 'break-increment', lengthID: 'break-length' , length: this.state.breakLength}),
            e(TimerLengthControl, {titleID: 'session-label', title: 'Session Length', dec: 'session-decrement', inc: 'session-increment', lengthID: 'session-length', length: this.state.sessionLength}),
            e(Footer)];
	}
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);