import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button'
import { DatePicker } from '@mui/lab';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { on } from 'nodemon';

let MySearches = (props) => {
    const [airportTo, setAirportTo] = React.useState("TPA");
    const [airportFrom, setAirportFrom] = React.useState("JFK");
    const [price, setPrice] = React.useState(100);
    const [valueTo, setValueTo] = React.useState(null);
    const [valueFrom, setValueFrom] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    let handleChangePhone = (event) => {
        setPhone(event.target.value)
    }
    let handleChangeTo = (event) => {
        setAirportTo(event.target.value);
    }
    let handleChangeFrom = (event) => {
        setAirportFrom(event.target.value);
    }
    let handleChangePrice = (event) => {
        setPrice(event.target.value);
    }


    // Posting to DB on submit
    let onFormSubmit = () => {
        let formContents = {
            airportTo: airportTo,
            airportFrom: airportFrom,
            maxPrice: price,
            dateTo: valueTo,
            dateFrom: valueFrom
        }
        axios.post("/new_flight_notification", { formContents });
        setPrice(100);
        setValueTo(null);
        setValueFrom(null);

    }
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}>
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <ThemeProvider theme={props.theme}>
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
                    <TextField id="outlined-basic"
                        onChange={handleChangePrice}
                        value={price} label="Max Price" variant="outlined" />
                    <Box sx={{ width: 200 }}>
                        <Slider value={price} onChange={
                            handleChangePrice
                        }
                            aria-label="Default"
                            valueLabelDisplay="auto" max={1000} />
                    </Box>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="From When?"
                                value={valueFrom}
                                onChange={(newValue) => {
                                    setValueFrom(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                error
                                label="To When?"
                                value={valueTo}
                                onChange={(newValue) => {
                                    setValueTo(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        value={phone}
                        onChange={handleChangePhone} />
                    <Button variant="outlined"
                        onSubmit={onFormSubmit}>Sign me up!</Button>
                </ThemeProvider>
            </div>
        </motion.div>
    )
}
export default MySearches