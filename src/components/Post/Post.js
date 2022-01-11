import React from 'react';
import './Post.css'

export default function Post(props) {
  return (
    <article className="post container" key={props.id}>
      <picture className="post__img">
        <source srcSet={props.imageWebp} type="image/webp" />
        <source srcSet={props.imageJpg} type="image/jpeg" />
        <img src={props.imageJpg} alt={props.title} />
      </picture>
        <div className="post__text">
          <div>
            {props.tags.map((key, index) => {
              return (
                <span key={key} className="post__text--tags">{props.tags[index]}</span>
              )
            })} 
          </div>
          <h1 className="post__text--title">{props.title}</h1>
          <span className="post__text--date">{props.date}</span>
          <p className='post__text--content fade'>{props.content}</p>
          <div
            href="/blog"
            className='post__text--btn'  
          >
            Read More
          </div> 
        </div>
    </article>
  )
}
