import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box borderTop="2.5px solid var(--orange)" sx={{ marginTop: { lg:'100px', xs: '20px' }}} p="20px">
      <Typography variant="h5" mb="30px">Exercises that  target the same muscle group </Typography>
      <Stack direction="row" sx={{ p:'2', position:'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar  data={targetMuscleExercises}/>
        : <Loader/> }
      </Stack>
      <Typography variant="h5" mb="30px">Exercise  that use the same equipament</Typography>
      <Stack direction="row" sx={{ p:'2', position:'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar  data={equipmentExercises}/>
        : <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises