import Nav from '../components/Nav';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import React from "react";
import ReactDom from 'react-dom';
import { animate, AnimatePresence, motion } from "framer-motion";
import Title from "../components/Title"
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';

export default (props) => {
    let handleSubmit = () => {
        if (valueFrom && valueTo) {
            props.setSearchState((prev) => {
                prev.DateFrom = valueFrom;
                prev.DateTo = valueTo;
                return {
                    APFrom: prev.APFrom,
                    APTo: prev.APTo,
                    DateFrom: prev.DateFrom,
                    DateTo: prev.DateTo
                }
            })
            props.setCurrentPage(3);
        } else {
            ReactDom.render(
                <h3 className='text-red-500'>Please choose dates</h3>,
                document.getElementById("errorTextArea")
            );
        }
    }
    let [transitionDelay, setTransitionDelay] = React.useState(.5);
    let handleChangeTo = (event) => {
        setValueTo(event.target.value)
    }
    let handleChangeFrom = (event) => {
        setValueFrom(event.target.value)
    }
    const [valueTo, setValueTo] = React.useState(null);
    const [valueFrom, setValueFrom] = React.useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ delay: transitionDelay }}>
            {delete setTimeout(() => { setTransitionDelay(0) }, 1000)}
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <Title />
                <ThemeProvider theme={props.theme}>
                    <div className='flex flex-col justify-center items-center space-y-5 py-5'>
                        <div>
                            <p id='title' className='text-2xl'>When are you thinking?</p>
                        </div>
                    </div>
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
                    <div>
                        <Button onClick={handleSubmit} variant="outlined" className="content-center">Lets go!</Button>
                    </div>
                    <div id='errorTextArea' />
                </ThemeProvider>
            </div>
        </motion.div>
    )
}