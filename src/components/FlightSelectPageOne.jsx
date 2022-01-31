import Nav from '../components/Nav';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Title from "../components/Title"

export default (props) => {
    let handleSubmit = () => {
        props.setSearchState((prev) => {
            prev.APFrom = airportFrom;
            prev.APTo = airportTo;
            return {
                APFrom: prev.APFrom,
                APTo: prev.APTo,
                DateFrom: prev.DateFrom,
                DateTo: prev.DateTo
            }
        })
        props.setCurrentPage(2);
    }
    let handleChangeTo = (event) => {
        setAirportTo(event.target.value);
    }
    let handleChangeFrom = (event) => {
        setAirportFrom(event.target.value);
    }
    const [airportTo, setAirportTo] = React.useState("TPA");
    const [airportFrom, setAirportFrom] = React.useState("JFK");
    return <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}>
        <div className="flex flex-col justify-center items-center space-y-5 py-10">
            <Title />
            <ThemeProvider theme={props.theme}>


                <div className='flex flex-col justify-center items-center space-y-5 py-5'>
                    <div>
                        <p id='title' className='text-2xl'>Looking to go on a trip?</p>
                    </div>
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
                    <Button onClick={handleSubmit} variant="outlined" className="content-center">Lets go!</Button>
                </div>
            </ThemeProvider>
        </div>
    </motion.div>
}