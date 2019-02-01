import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Fib } from "./Fib";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header >
						{/* <img src={logo} className="App-logo" alt="logo" /> */}
						<h3>Welcome</h3>
					</header>
          <div>
            <Route exact path="/" component={Fib} />
          </div>
				</div>
			</Router>
		);
	}
}

export default App;
