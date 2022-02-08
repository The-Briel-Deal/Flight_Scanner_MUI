import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

let MySearches = () => {
    const [airportTo, setAirportTo] = React.useState("TPA");
    const [airportFrom, setAirportFrom] = React.useState("JFK");
    const [price, setPrice] = React.useState(100);
    let handleChangeTo = (event) => {
        setAirportTo(event.target.value);
    }
    let handleChangeFrom = (event) => {
        setAirportFrom(event.target.value);
    }
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}>
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <Title />
                <div>
                    <p id='title' className='text-2xl text-center'>On a budget?<br /> Set a max price! </p>
                </div>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-to">To?</InputLabel>
                        <Select
                            labelId="select-to"
                            id="select-to"
                            value={airportTo}
                            label="select-to"
                            onChange={handleChangeTo}
                        >
                            <MenuItem value={"JFK"}>JFK - New York, NY</MenuItem>
                            <MenuItem value={"LAX"}>LAX - Los Angelas, CA</MenuItem>
                            <MenuItem value={"TPA"}>TPA - Tampa, FL</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="select-from">From?</InputLabel>
                        <Select
                            labelId="select-from"
                            id="select-from"
                            value={airportFrom}
                            label="select-from"
                            onChange={handleChangeFrom}
                        >
                            <MenuItem value={"JFK"}>JFK - New York, NY</MenuItem>
                            <MenuItem value={"LAX"}>LAX - Los Angelas, CA</MenuItem>
                            <MenuItem value={"TPA"}>TPA - Tampa, FL</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <TextField id="outlined-basic" value={price} label="Max Price" variant="outlined" />
                <Box sx={{ width: 200 }}>
                    <Slider value={price} onChange={
                        (event) => {
                            setPrice(event.target.value);
                        }
                    } aria-label="Default" valueLabelDisplay="auto" />
                </Box>
            </div>
        </motion.div>
    )
}
export default MySearches