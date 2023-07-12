import React from 'react';
import '../Components/Style/Navbar.css'

import { Link } from 'react-router-dom';
import { Stack, } from '@mui/material';

import Logo from '../assets/images/Thify-logo.png'


const Navbar = () => { 

  return (
    <Stack 
    direction="row"
      sx={{gap:{sm: "122px", xs:"40px"}, mt:{sm:"32px", sx:"20px"},justifyContent:"none  "}}px="25px">
      <Link to="/">
        <img src={Logo} alt='Logo' className='logo'/>
      </Link>
      <Stack 
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="center"
      className='nav'>
        <Link to="/" className='nav_home'>Home</Link>
        <Link to="/" className='nav_exercises'> Exercises</Link>
      </Stack>
    </Stack>
    
  )
}

export default Navbar