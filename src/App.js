import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './page/ExerciseDetail';
import Home from './page/Home';
import Navbar from './Components/Navbar';
import Footers from './Components/Footers';


const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: '1448px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footers/>
    </Box>
    
  )
}

export default App