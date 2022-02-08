import React from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { ThemeProvider } from "@mui/material/styles";
import { Typography, Button } from '@mui/material';
let firstRun = true;
export default (props) => {
    let [transitionDelay, setTransitionDelay] = React.useState(.5);
    let [returnQuery, setReturnQuery] = React.useState({
        price: null,
        connections: null,
        leaves: null,
        returns: null,
        link: null
    })
    function dateConverter(date) {
        let year = date.slice(0, 4);
        let month = date.slice(5, 7);
        let day = date.slice(8, 10);
        return `${day}/${month}/${year}`;
    }
    console.log(props.searchState)
    async function postData() {
        const response = await fetch('/search', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.searchState)
        })
        return response.json();
    }
    if (firstRun) {
        postData().then((data) => {
            console.log(`data returned ${data.link}`)
            setReturnQuery({
                price: data.price,
                connections: data.connections,
                leaves: data.leaves,
                returns: data.returns,
                link: data.link
            })
            setTimeout(() => console.log(returnQuery), 5000)
        })
        firstRun = false
    }
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
                    Price: {returnQuery.price}<br />
                    Connection: {returnQuery.connections}<br />
                    Leaves: {returnQuery.leaves ? dateConverter(returnQuery.leaves) : null}<br />
                    Returns: {returnQuery.returns ? dateConverter(returnQuery.returns) : null}
                </Typography>
                <Button
                    variant="outlined"
                    href={returnQuery.link}
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