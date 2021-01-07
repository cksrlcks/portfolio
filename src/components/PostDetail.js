import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faPen, faStickyNote, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/Post_detail.css'

const postShowUp = {
    hidden: { opacity: 0, y: 30 },
    show: {opacity: 1,y: 0, transition:{
        staggerChildren:0.08,
        delayChildren:0.2,
        duration:0.6
    }}
};

const PostDetail = (props) => {
    window.scrollTo({
        top:0,
        behavior : 'smooth'
    });
    const [post_title, setTitle] = useState([]);
    const [post_content, setContent] = useState([]);
    const [post_date, setDate] = useState([]);
    const [post_author, setAuthor] = useState([]);

    useEffect(()=>{
        fetch(`/wp/wp-json/wp/v2/posts/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            setTitle(data.title.rendered);
            setContent(data.content.rendered);
            setDate(data.x_date);
            setAuthor(data.x_author);
        })

    },[props.match.params.id]);

    return (
        <motion.div className="post_container" exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <button className="back_btn" onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft} className="post_icon_back"/>List</button>
            <motion.div className="post_body" variants={postShowUp} initial={'hidden'} animate={'show'} exit={{ opacity: 0 }}>
                <motion.h4 className="title" variants={postShowUp}>{post_title}</motion.h4>
                <motion.div className="post_meta" variants={postShowUp}>
                    <ul>
                        <li><FontAwesomeIcon icon={faCalendar} className="post_icon"/>{post_date}</li>
                        <li><FontAwesomeIcon icon={faPen} className="post_icon"/>{post_author}</li>
                    </ul>
                </motion.div>
                <motion.div className="post_content" dangerouslySetInnerHTML={{__html: post_content}} variants={postShowUp}></motion.div> 
                
            </motion.div>
        </motion.div>
    );
};

export default PostDetail;