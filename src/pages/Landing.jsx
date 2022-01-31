import Nav from '../components/Nav';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title"

let theme = createTheme({
    palette: {
        primary: {
            main: '#6366f1',
        }
    },
});

theme = createTheme(theme, {
    palette: {
        info: {
            main: theme.palette.primary.main,
        },
    },
});

export default function Example(props) {
    let handleSubmit = () => {
        setCurrentPage(2);
    }


    let [textField, setTextField] = React.useState("");
    let handleChange = (event) => {
        setTextField(event.target.value)
    }

    let [currentPage, setCurrentPage] = React.useState(1);
    let ReturnCurrentPage = () => {
        if (currentPage === 1) {
            return <motion.div
                key="silly-div1"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                <div className="flex flex-col justify-center items-center space-y-5 py-10">
                    <Title />
                    <ThemeProvider theme={theme}>


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
                                    value={"JFK"}
                                    label="select-to"
                                    onChange={handleChange}
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
                                    value={"JFK"}
                                    label="select-from"
                                    onChange={handleChange}
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
    }
    return (
        <div>
            <ReturnCurrentPage />
        </div>
    )
}
