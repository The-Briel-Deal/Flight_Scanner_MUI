import Nav from '../components/Nav';
import { Button, TextField } from '@mui/material';
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
            <div className="flex flex-col justify-center items-center space-y-5 py-5">
                <p id="title" className='text-4xl md:text-6xl'><AirIcon style={{ fontSize: "50" }} /> Air Briel <AirplaneTicketIcon style={{ fontSize: "50" }} id="titleIcon" className='text-sm md:text-2xl' /></p>
                <div>
                    <TextField value={textField} onChange={handleChange} className="" id="filled-basic" label="PFP Link" variant="filled" />
                </div>
                <div>

                    <Button onClick={handleSubmit} variant="outlined" className="content-center">Change your PFP</Button>
                </div>
            </div>
        </ThemeProvider>
    )
}
