import React from 'react'

import { Link } from 'react-router-dom';
import { Box, Stack} from '@mui/material'

import Github from '../assets/images/github.png'
import Instagram from '../assets/images/instagram.png'
import Linkdin from '../assets/images/linkedin.png'
import Logo from '..//assets/images/Thify-logo.png'

const Footers = () => {
  return (
    <Box borderTop="2px solid var(--orange)" mt="80px">
      <Stack padding="8px 32px" height="400px">
        <Stack direction="row" gap="48px" justifyContent="center" px="40px" pt="24px">
        <Link to="https://github.com/GuilhermeFrigotto">
          <a href="https://github.com/GuilhermeFrigotto" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt='Github' width="37px"/>
          </a>
        </Link>
          <Link to="/">
            <img src={Instagram} alt='Instagram' width="37px" />
          </Link>
          <Link to="https://www.linkedin.com/in/guilherme-frigotto-5291168b/">
            <a href="https://www.linkedin.com/in/guilherme-frigotto-5291168b/" target="_blank" rel="noopener noreferrer"> 
            <img src={Linkdin} alt='Linkdin' width="37px" />
            </a>
          </Link>
        </Stack>
        <Stack gap="40px" alignItems="center" px="40px" pt="24px">
          <Link to="/">
            <img src={Logo} alt='Logo' width="240px" />
          </Link>
        </Stack>
        <Stack className='blur'></Stack>
      </Stack>
    </Box>
  )
}

export default Footers