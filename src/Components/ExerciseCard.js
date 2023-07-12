import React from 'react';
import { Link } from 'react-router-dom' 
import { Button, Stack, Typography } from '@mui/material';

import '../Components/Style/ExerciseCard.css'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='card' to={`/exercise/${exercise.id}`}
      style={{background: "var(--planCard)"}}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" className='img-card'/>
      <Stack direction="row" mt="10px">
        <Button sx={{ ml: '21px', color: 'var(--text)', background: 'var(--orange)', fontSize: '14px', fontWeight:"600", borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: 'var(--darkGrey)', background: 'var(--text)', fontSize: '14px', fontWeight:"600", borderRadius: '20px', textTransform: 'capitalize' }}>
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml="21px" color="var(--darkGrey)" fontWeight="600" sx={{ fontSize: { lg: '18px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard