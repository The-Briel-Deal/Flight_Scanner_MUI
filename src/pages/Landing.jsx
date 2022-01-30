import Nav from '../components/Nav';
import { Button, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import React from "react";

let theme = createTheme({
    palette: {
        primary: {
            main: '#8E4162',
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
    let handleLinkChange = () => {
        props.userState[1]((prev) => {

            return {
                name: prev.name,
                email: prev.email,
                imageUrl: textField
            }
        }
        )
    }


    let [textField, setTextField] = React.useState("");
    let handleChange = (event) => {
        setTextField(event.target.value)
    }
    let handleSubmit = () => {
        props.userState[1]()
    }
    return (
        <>
            <Nav userState={props.userState} />
            <ThemeProvider theme={theme}>
                <div className="flex flex-col justify-center items-center space-y-5 py-5">
                    <p id="title">Air Briel</p>
                    <div>
                        <TextField value={textField} onChange={handleChange} className="" id="filled-basic" label="PFP Link" variant="filled" />
                    </div>
                    <div>

                        <Button onClick={handleSubmit} variant="outlined" className="content-center">Change your PFP</Button>
                    </div>
                </div>
            </ThemeProvider>

        </>
    )
}
