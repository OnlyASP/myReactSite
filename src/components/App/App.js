import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from '../Navbar/Navigation';
import ErrorBoundry from '../Pages/ErrorPage/ErrorComponents/error-boundry/error-boundry';
import About from '../Pages/About/About';
import Gallery from '../Pages/Gallery/Gallery';
import ContactPage from '../Pages/ContactPage/ContactPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';


class App extends Component {	

	constructor(props) {
        super(props);
        
        this.state = {
            openMenu: false,
            closed: false,
            activation: '',
			widthLeft: 240,
        }
	}

	toggleClosed = () => {
        this.setState({
            closed: !this.state.closed,
            openMenu: !this.state.openMenu,
        })

        this.state.closed ? this.setState({activation: '', widthLeft: 240}) : this.setState({activation: 'closed', widthLeft: 60,})
	}
	
	render() {

		const { widthLeft, openMenu, activation } = this.state;

		const hideBtn = !openMenu;

        const btn = hideBtn ? 
            <button className='hide-btn nav-btn' onClick={this.toggleClosed}>«</button>:
            <button className='open-btn nav-btn' onClick={this.toggleClosed}>»</button>;	


		return (
			<ErrorBoundry>
			<BrowserRouter>
			<div className="App">
				<Navigation btn={btn} widthLeft={widthLeft} active={activation}/>
				<div className='sub-page' style={{width: `calc(100% - ${widthLeft}px)`, left: `${widthLeft}px`}}>
					<Switch>			
						<Route path="/about/" render={() => <About/>} exact/>
						<Route path="/gallery/" render={() => <Gallery />} />
						<Route path="/contacts/" render={() => <ContactPage />} />
						<Route path="/error-message/" render={() => <ErrorPage />} />
					</Switch>
				</div>
			</div>
			</BrowserRouter>
			</ErrorBoundry>
		);
	}
}

export default App;
