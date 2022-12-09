import React from 'react'
import './home.css'
import img0 from "../assets/images/logo.gif"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark"> */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src={img0} alt="logo" style={{height:"52px"}}/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </div>
      {/* </nav> */}
      </Navbar>
    </header>
  )
}
