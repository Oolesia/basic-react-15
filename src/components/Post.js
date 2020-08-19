import React from 'react'; 
import './post.css'

function Post(props){
    return(
        <div className='post'>
            <div className='avatar'>
                <img src={props.author.photo} alt='author_photo'></img>
            </div>
            <div className='body-post'>
                <div className='main-info'>
                    <h3>{props.author.name}</h3>
                    <p>{props.author.nickname}</p>
                    <p> • </p>
                    <p>{props.date}</p>
                </div>
                <p className='content'>{props.content}</p>
                <img src={props.image} alt='post_image'></img>
            </div>
        </div>
    );
}

export default Post; 