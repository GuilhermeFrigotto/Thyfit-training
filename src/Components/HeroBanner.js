import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material';
import '../Components/Style/HeroBanner.css';

import HeroBannerImagem from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt:{  lg:'180px', xs: '70px'  },
      ml:{ sm: '50px'}    
      }}position="relative" p="20px"> 
      <Typography 
      fontWeight="600"
      fontSize="1.5rem"
      mb="1.3rem"
      className='text-fitness'>
        Fitness 
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg:'50px', xs:'46px'}
      }}
      mt="30px"
      >
       SHAPE
      </Typography>
      <Typography fontWeight={700}
      sx={{ fontSize: { lg:'50px', xs:'46px'}
      }}
      className='banner_stroke'mb="30px" >
        YOUR IDEAL BODY
      </Typography>
      <Typography fontSize="1.2rem" lineHeight="35px">
        Freedom to challenge oneself at every moment, anywhere
      </Typography>
      <Stack mt="64px" bgcolor="#363d42" borderRadius="64px" width="fit-content" padding="20px 13px" textTransform="capitalize" 
        color="var(--text)" position="relative" display="flex" alignItems="center" justifyContent="flex-start">
        the best fitness club in the town
      </Stack>
      <Typography 
        sx={{
          opacity:0.1,
          display: { lg: 'block', xs: 'none'}
        }}
        fontWeight="600"
        fontSize="200px"
        marginLeft="60px"
        color="var(--orange)"
        className='exercise'>
        Exercise
      </Typography>
      <img src={HeroBannerImagem} alt='banner'      
      className='hero-banner-img img-banner'/>
    </Box>
  )
}

export default HeroBanner