import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyPart ===item ?
            {borderTop:  '4px solid var(--orange)', width:'190px',height:'190px'} :
            {width: '270px', height: '282px', cursor: 'pointer', gap: '47px' 
        }}
        onClick={() => {
          setBodyPart(item);
          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt='dumbbell' style={{width: '60px', height:'60px'}} className='img-icon'/>
        <Typography fontSize="17px" fontWeight="bold" color="var(--text)" textTransform="capitalize" >{item}</Typography>
    </Stack>    
  )
}

export default BodyPart