import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { faPen, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PostList = (props) => {

    const ImgRender = () => {
        if(props.item.x_featured_media_original){
            return <p><img className="img_frame" src={props.item.x_featured_media_original} alt={props.item.title.rendered}/></p>;
        }
    }

    return (
            <Link to={`/post/${props.item.id}`} >
                {ImgRender()}
                <div className="post_detail">           
                    <h3 className="title">{props.item.title.rendered}</h3>
                    <p className="summary" dangerouslySetInnerHTML={{__html: props.item.excerpt.rendered}}></p>
                    <ul className="meta_list">
                        <li><FontAwesomeIcon icon={faCalendar} className="post_icon"/>{props.item.x_date}</li>
                        <li><FontAwesomeIcon icon={faPen} className="post_icon"/>{props.item.x_author}</li>
                    </ul>
                </div>                
            </Link>
    );
};

export default PostList;