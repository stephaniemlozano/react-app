import React from 'react'
import './styles.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const Header = () => {
  return (
    <Navbar sticky='top' className='nav-custom' bg='light' variant='light'>
      <Navbar.Brand href='#home'>S T E P H A N I E</Navbar.Brand>

      <Nav className='mr-auto nav-content '>
        <Nav.Link href='#home'>My Story</Nav.Link>
        <Nav.Link href='#features'>Projects</Nav.Link>
        <Nav.Link href='#pricing'>Connect</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header
