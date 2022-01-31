import Nav from '../components/Nav';
import { Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import AirIcon from '@mui/icons-material/Air';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import React from "react";

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
        console.log("submited");
    }


    let [textField, setTextField] = React.useState("");
    let handleChange = (event) => {
        setTextField(event.target.value)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <p id="title" className='text-4xl md:text-6xl'><AirIcon style={{ fontSize: "50" }} /> Air Briel <AirplaneTicketIcon style={{ fontSize: "50" }} id="titleIcon" className='text-sm md:text-2xl' /></p>
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
            </div>
        </ThemeProvider>
    )
}
