import React , { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/content.css'
const Blog = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {

        fetch('https://batdog.kr/wp-json/wp/v2/posts/?categories=3')
        .then(res => res.json())
        .then(response => setPost(response))
        .catch(err => console.log(err));

    },[])
    return (
        <motion.div className="content-wrap"  exit={{opacity:0}} animate={{opacity:1}}  initial={{opacity:0}}>
            <div className="recent_list">
                <ul className="post_list">
                    {post.map((item, index) => (
                        <li key={index}>
                            <Link to={`/post/${item.id}`} >
                                <p className="date">{item.date.slice(0,10)}</p>
                                <h3 className="title">{item.title.rendered}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

export default Blog;


