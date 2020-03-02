import React from 'react';
import '../css/content.css'
import {motion} from 'framer-motion';
import RecentPost from '../components/RecentPost';
const titleShowUp = {
    hidden: { opacity: 0 , x:-20},
    show: {opacity: 1, x:0, transition:{
        delay:0.5,
        duration:1

    }}
};
const Home = () => {

    return (
        
        <motion.div className="content-wrap"  exit={{opacity:0, y:'-20px'}} animate={{opacity:1, y:'0px'}}  initial={{opacity:0, y:'-20px'}} transition={{ease:"easeInOut", default: { duration: 1.2 },}}>
            <div className="hero">
                <motion.h2 className="hero_title" exit={{opacity:0, y:'-20px'}} animate={{opacity:1, y:'0px'}}  initial={{opacity:0, y:'-20px'}} transition={{ease:"easeInOut", default: { duration: 0.8 },}}>
                    Whatever you do,<br></br>make it pay
                </motion.h2>
                <motion.p className="hero_sub" exit={{opacity:0, y:'20px'}} animate={{opacity:1, y:'0px'}}  initial={{opacity:0, y:'20px'}} transition={{ease:"easeInOut", default: { duration: 0.8 },}}>I'm webdesigner based in Busan, Republic of Korea</motion.p>
            </div>
            <div className="recent_list">
                <motion.h3 className="sec_title" variants={titleShowUp} initial={'hidden'} animate={'show'}>Recent Work</motion.h3>
                <RecentPost/>
            </div>
        </motion.div>
    );
};

export default Home;