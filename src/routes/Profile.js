import React from 'react';
import {motion} from 'framer-motion';
import '../css/content.css'
const Profile = () => {
    return (
        <motion.div className="content-wrap"  exit={{opacity:0}} animate={{opacity:1}}  initial={{opacity:0}}>
            <p className="empty_center">프로필</p>
        </motion.div>
    );
};

export default Profile;