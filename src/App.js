// import logo from './logo.svg';
// import Nav from './Nav';

import { Button, Container, Row, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';

// import { BrowserRouter as Router, Switch, Route, useParams, } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
// import Home from './MainContainer';
import Home from './Home';
import MainContainer from './MainContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
	<div className="App">
	  {/* <header className="App-header"> */}
		{/* <img src={logo} className="App-logo" alt="logo" />
		<p>
		  Edit <code>src/App.js</code> and save to reload.
		</p>
		<a
		  className="App-link"
		  href="https://reactjs.org"
		  target="_blank"
		  rel="noopener noreferrer">
		  Hello World
		</a> */}
	  {/* </header> */} 
	  {/* <LinkContainer to="/MainContainer">
              <Button>Users</Button>
	</LinkContainer> */}
	
		<Navbar bg="light" expand="lg">
			  <Navbar.Brand to="#home">React-Bootstrap 2</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
				  <Nav className="mr-auto">
					  <Nav.Link href="/frontendpgs">Home</Nav.Link>
					  <Nav.Link href="/frontendpgs/MainContainer">Link</Nav.Link>
				  </Nav>
			  </Navbar.Collapse>
		  </Navbar>
	<Router basename='/frontendpgs'>
	  	<Switch>
			<Route exact path="/frontendpgs">
				<Home />
			</Route>
			<Route exact path="/frontendpgs/MainContainer">
				<MainContainer />
			</Route>
		</Switch>
	</Router>
	  <Container>
		<Row>
			<div className="col-sm-12 col-md-6">1 of 1</div>
			<div className="col-sm-12 col-md-6">1 of 1</div>
			<div className="col-sm-12 col-md-6">1 of 1</div>
		</Row>
	  </Container>

	  {/* <img src={logo} className="App-logo" alt="logo" /> */}
	  {/* <Home /> */}
	  {/* <MainContainer /> */}
	</div>
  );
}

export default App;
