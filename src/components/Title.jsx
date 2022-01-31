import React from "react";
import AirIcon from '@mui/icons-material/Air';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export default () => {
    return <p id="title" className='text-4xl md:text-6xl'><AirIcon style={{ fontSize: "50" }} /> Air Briel <AirplaneTicketIcon style={{ fontSize: "50" }} id="titleIcon" className='text-sm md:text-2xl' /></p>
}