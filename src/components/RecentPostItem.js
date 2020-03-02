import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RecentPostItem = ({item}) => {
    const [post] = useState(item);
    const [imgUrl, setImgUrl] = useState([]);
    useEffect(() => {

        fetch(`https://batdog.kr/wp-json/wp/v2/media/${post.featured_media}`)
        .then(res => res.json())
        .then(data => setImgUrl(data.media_details.sizes.full.source_url))

    },[post.featured_media])
    return (
            
                <Link to={`/post/${post.id}`} style ={ { backgroundImage: "url("+imgUrl+")" } } post={post}>
                    <div className="meta">
                        <div className="meta_container">
                            <h3 className="title">{post.title.rendered}</h3>
                            <p className="date">{post.date.slice(0,10)}</p>
                        </div>
                    </div>
                </Link>
    );
};

export default RecentPostItem;