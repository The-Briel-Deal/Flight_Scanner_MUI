import { ThemeProvider } from '@mui/system';
import React from "react";
import { motion } from "framer-motion";
import Title from "./Title"
import { Typography, Button } from '@mui/material';
export default (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ delay: .5 }}>
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
                <Title />
                <ThemeProvider theme={props.theme}>
                    <Typography variant='h5'>
                        Your selections are as follows:
                    </Typography>
                    <Typography variant='subtitle1'>
                        Airport From: {props.searchState.APFrom} <br />
                        Airport To: {props.searchState.APTo} <br />
                        Date From: {props.searchState.DateFrom} <br />
                        Date To:{props.searchState.DateTo}
                    </Typography>
                    <Typography variant='h6'>
                        Is this ok?
                    </Typography>
                    <Button variant="outlined">Yes!</Button>
                    <Button variant="outlined">No, take me back!</Button>
                </ThemeProvider>
            </div>
        </motion.div>
    )
}