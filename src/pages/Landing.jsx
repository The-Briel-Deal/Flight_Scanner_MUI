import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import FlightSelectPageOne from "../components/FlightSelectPageOne";
import FlightSelectPageTwo from "../components/FlightSelectPageTwo"
import FlightSelectPageThree from '../components/FlightSelectPageThree';
import ShowFlights from '../components/ShowFlights';
import Authentication from './Authentication'

export default function Example(props) {

    let [currentPage, setCurrentPage] = React.useState(1);
    const [searchState, setSearchState] = React.useState({
        APFrom: "",
        APTo: "",
        DateFrom: "",
        DateTo: ""
    })
    return (
        <>
            <AnimatePresence>
                {(currentPage === 1) && <FlightSelectPageOne
                    theme={props.theme}
                    setSearchState={setSearchState}
                    setCurrentPage={setCurrentPage}
                    key="fsp1" />}
            </AnimatePresence>
            <AnimatePresence>
                {(currentPage === 2) && <FlightSelectPageTwo
                    theme={props.theme}
                    setSearchState={setSearchState}
                    setCurrentPage={setCurrentPage}
                    key="fsp2" />}
            </AnimatePresence>
            <AnimatePresence>
                {(currentPage === 3) && <FlightSelectPageThree
                    theme={props.theme}
                    searchState={searchState}
                    setCurrentPage={setCurrentPage}
                    key="fsp3" />}
            </AnimatePresence>
            <AnimatePresence>
                {(currentPage === 4) && <ShowFlights
                    theme={props.theme}
                    searchState={searchState}
                    setCurrentPage={setCurrentPage}
                    key="sf" />}
            </AnimatePresence>
        </>
    )
}
