import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './content/header';
import {Main} from './content/main' ;

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Main/>
			</div>
		)
	}
}

ReactDOM.render(
	<Homepage/>,
	document.getElementById('app')
)