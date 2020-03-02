import React from 'react';
import { motion } from 'framer-motion';
import '../css/content.css'
const Notfound = () => {
    return (
        <>
            <motion.div className="content-wrap"  exit={{opacity:0}} animate={{opacity:1}}  initial={{opacity:0}}>
                <p class="empty_center">존재하지 않는 페이지입니다.</p>
            </motion.div>
            
        </>
    );
};

export default Notfound;