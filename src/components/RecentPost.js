import React, {useState, useEffect} from 'react';
import RecentPostItem from './RecentPostItem';
import {motion} from 'framer-motion';
const postShowUp = {
    hidden: { opacity: 0 },
    show: {opacity: 1, transition:{
        staggerChildren:10,
        delayChildren:10,
        delay:0.9,

    }}
};
const RecentPost = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://batdog.kr/wp-json/wp/v2/posts/?categories=2&per_page=4&embed')
        .then(res => res.json())
        .then(response => {setPost(response);})
        .catch(err => {console.log(err)});
    
    },[])
    return (
        <motion.ul
            className="recent_post_list"
            variants={postShowUp} initial={'hidden'} animate={'show'}
        >
            {post.map((item, index) => (
                <motion.li className="recent_post_item" variants={postShowUp} key={index}>
                    <RecentPostItem item={item} />
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default RecentPost;