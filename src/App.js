// import logo from './logo.svg';
// import Nav from './Nav';

// import { Button, Container, Row, Navbar, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';


// import { BrowserRouter as Router, Switch, Route, useParams, } from "react-router-dom";
// import { HashRouter as Router, Route } from "react-router-dom";

import MainApp from './MainApp';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const browserHistory = useRouterHistory(createHistory)({
// 		basename: '/frontendpgs'
// });

function App() {


  return (
	<div className="App">
		
		
		<MainApp/>



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
	
		
	  {/* <Container>
		<Row>
			<div className="col-sm-12 col-md-6">1 of 1</div>
			<div className="col-sm-12 col-md-6">1 of 1</div>
			<div className="col-sm-12 col-md-6">1 of 1</div>
		</Row>
	  </Container> */}

	  {/* <img src={logo} className="App-logo" alt="logo" /> */}
	  {/* <Home /> */}
	  {/* <MainContainer /> */}
	</div>
  );
}

export default App;
