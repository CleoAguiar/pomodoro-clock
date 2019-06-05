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

class App extends React.Component
{
	render()
	{
		return [e(Header), e(Footer)];
	}
};

const domContainer = document.querySelector('#app');

ReactDOM.render(
    e(App),
    domContainer
);