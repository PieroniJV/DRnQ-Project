import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {Main} from './components/main';
import {List} from './components/list';
import {Add} from './components/add';
import {Edit} from './components/edit';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className='App'>
          <Navbar bg='dark' variant='dark'>
          <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/list">List</Nav.Link>
                <Nav.Link href="/add">Add</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<Main></Main>}></Route>
            <Route path='/list' element={<List></List>}></Route>
            <Route path='/add' element={<Add></Add>}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
