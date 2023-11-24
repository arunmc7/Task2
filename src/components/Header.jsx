import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';


function Header() {

  const navigate=useNavigate()

  const signinNavigate=()=>{

    navigate('/login');

  }




  return (
    <div className='header'>
          <Navbar className="nv ">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:"none",color:'red'}}>   
           <span style={{textDecoration:'none',fontSize:'50px'}}>MOVIEFLIX</span>
            </Link>
          
           <button onClick={signinNavigate} className='navbtn'>sign in</button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header