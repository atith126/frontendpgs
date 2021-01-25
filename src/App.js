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
			  <Navbar.Brand to="#home">React-Bootstrap</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
				  <Nav className="mr-auto">
					  <Nav.Link href="/">Home</Nav.Link>
					  <Nav.Link href="/MainContainer">Link</Nav.Link>
					  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					  </NavDropdown>
				  </Nav>
				  <Form inline>
					  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
					  <Button variant="outline-success">Search</Button>
				  </Form>
			  </Navbar.Collapse>
		  </Navbar>
	<Router basename='/'>
	  	{/* <Switch> */}
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/MainContainer">
				<MainContainer />
			</Route>
		{/* </Switch> */}
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
