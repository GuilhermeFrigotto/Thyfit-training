import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search) ||
                   item.target.toLowerCase().includes(search) ||
                   item.equipment.toLowerCase().includes(search) ||
                   item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      className="stack"
    >
      <Stack className="blur-2"></Stack>
      <Typography
        sx={{ fontSize: { lg: '49px', sx: '30px' } }}
        className="exercise-text"
      >
        Awesome Exercise You
      </Typography>
      <Typography
        sx={{ fontSize: { lg: '49px', sx: '30px' } }}
        fontWeight="600"
        mb="50px"
        textAlign="center"
        className="banner_stroke "
      >
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '600',
              border: 'none',
              borderRadius: '4px',
              color: 'var(--text)',
            },
            width: { lg: '700px', sx: '350px' },
            backgroundColor: 'rgba(242,242,242,0.40)',
            borderRadius: '10px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyDown={handleKeyPress} // Adicionando o evento de teclado
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            background: 'var(--planCard)',
            color: 'var(--text)',
            textTransform: 'none',
            width: { lg: '100px', ms: '80px' },
            fontSize: { lg: '18px', ms: '14px' },
            height: '56px',
            position: 'absolute',
            borderRadius: '0 10px 10px 0',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodypart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
