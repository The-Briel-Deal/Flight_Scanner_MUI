import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { ThemeProvider } from "@mui/system";
import { Typography, Button } from '@mui/material';
export default (props) => {
    let [transitionDelay, setTransitionDelay] = React.useState(.5);
    console.log(props.searchState)
    fetch('/search', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(props.searchState)
    })
    return <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ delay: transitionDelay }}>
        {delete setTimeout(() => { setTransitionDelay(0) }, 1000)}
        <div className="flex flex-col justify-center items-center space-y-5 py-10">
            <Title />
            <ThemeProvider theme={props.theme}>
                <Typography variant='h5'>
                    The cheapest flight is here!
                </Typography>
                <Typography variant='subtitle1'>
                    Price:<br />
                    Connection:<br />
                    Leaves:<br />
                    Returns
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => {
                        props.setCurrentPage(4);
                    }}
                >Take me!</Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        props.setCurrentPage(1);
                    }}>New search!</Button>
            </ThemeProvider>
        </div>
    </motion.div>
}