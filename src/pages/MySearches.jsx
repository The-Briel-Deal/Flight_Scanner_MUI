import React, { useState } from 'react';
import { motion } from 'framer-motion';
let MySearches = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}>
            <div className="flex flex-col justify-center items-center space-y-5 py-10">
            </div>
        </motion.div>
    )
}
export default MySearches