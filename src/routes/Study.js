import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PostList from '../components/PostList'
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../css/content.css'

const titleShowUp={
    hidden: { opacity: 0 },
    show: {opacity: 1, transition:{
        staggerChildren:0.08,
        delayChildren:0.2,
        duration:0.6
    }}
}
const postShowUp = {
    hidden: { opacity: 0, y: 30 },
    show: {opacity: 1,y: 0, transition:{
        staggerChildren:0.08,
        delayChildren:0.2,
        duration:0.6
    }},
    hover: { scale: 0.95 , transition:{
        duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96]
    }}
};
const Study = () => {
    const [nowPage,setNowPage] = useState(1);
    const [nextPage, setNextPage] = useState(2)
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const loadMoreBtn = document.querySelector('.load_more_btn');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/wp/wp-json/wp/v2/posts/?categories=4&per_page=6&page=${nowPage}`);
            const totalCount = parseInt(response.headers.get('x-wp-total'));
            const totalPages = parseInt(response.headers.get('x-wp-totalpages'));
            const post = await response.json();
            setPost(post);
            setIsLoading(true);
            setTotalCount(totalCount);
            setTotalPages(totalPages);
            setNextPage(nowPage+1);

        }
        fetchData();   

    }, []);

    useEffect(() => {
        setNowPage(nextPage);
        setNextPage(nowPage+1);
    },[post])

    const loadMore = () => {
        if (nowPage === totalPages || nowPage > totalPages) {
            loadMoreBtn.innerHTML = "마지막 포스트입니다."
        } else{
            const fetchData = async () => {
                const response = await fetch(`/wp/wp-json/wp/v2/posts/?categories=4&per_page=6&page=${nextPage}`);
                const totalCount = parseInt(response.headers.get('x-wp-total'));
                const totalPages = parseInt(response.headers.get('x-wp-totalpages'));
                const nextPost = await response.json();
                setPost([...post, ...nextPost]);
                
            }
            fetchData();  
        }            
        
    }

    if (isLoading) {
        return (
            <motion.div className="content-wrap" exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >

                <div className="recent_list post study">
                    <motion.p variants={titleShowUp} initial={'hidden'} animate={'show'} className="post_total"><FontAwesomeIcon icon={faStickyNote} className="post_icon"/>Posts : {totalCount}</motion.p>
                    <motion.ul className="post_list" variants={postShowUp} initial={'hidden'} animate={'show'}>                        
                        {post.map((item, index) => (
                            <motion.li variants={postShowUp} whileHover="hover" key={index} >
                                <PostList item={item} index={index} />
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <button className="load_more_btn" onClick={loadMore}>Load More</button>
            </motion.div>

        );
    } else {
        return (
            <div className="post_loader">Loading...</div>
        )
    }

};

export default Study;