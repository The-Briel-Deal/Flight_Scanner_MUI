import { display } from '@mui/system';
import React from 'react';
import { motion } from 'framer-motion';

let AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}>
            <div style={{
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center"
            }}>
                <div style={{
                    "marginTop": "5%",
                    "display": "flex",
                    "flexDirection": 'column',
                    "width": "70%",
                    "alignItems": "center",
                    "justifyContent": "center"
                }}>
                    <div >
                        <h1 className='text-5xl font-medium'> 😄 Hey 👋 </h1>
                    </div>
                    <div className='mt-10'>
                        <p className='text-md text-center'>Thanks for being curious enough to check this out! It is awesome to me that I was able to make your flight search experience better!</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-md text-center'>My name is Gabriel Ford, I'm a software engineer and lover of learning. If you have any cool project ideas or if you have any suggestions on the website please contact me at gabe@fordltc.net. Thanks again!</p>
                    </div>
                    <div className='mt-5'>
                        <p className='text-center'>Have a great day!<br />
                            -Gabriel Ford
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default AboutUs