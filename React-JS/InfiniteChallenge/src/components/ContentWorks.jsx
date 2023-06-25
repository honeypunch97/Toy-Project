import React, { useState } from 'react';

const ContentWorks = ({ works, select, onSelect }) => {
   const { broadcasting, performance, album, song, book, movie, audio } = works;
   const { worksSel } = select;
   return (
      <div className="works-container">
         <ul className="works-category">
            {works.map(
               item =>
                  item.data.length > 0 && (
                     <li
                        key={item.id}
                        className={worksSel === item.id ? 'on' : ''}
                        data-id={item.id}
                        data-category="worksSel"
                        onClick={onSelect}>
                        {item.category}
                     </li>
                  ),
            )}
         </ul>
         <ul className="works-content-box">
            {works
               .find(item => item.id === worksSel)
               .data.map(item => (
                  <li key={item.id}>
                     <a href={item.url} target="_blank">
                        <img src={item.img} alt="" />
                        <div className="text-box">
                           <strong>{item.title}</strong>
                           {item.artist && <span>{item.artist}</span>}
                           {item.place && <span>{item.place}</span>}
                           {item.info && <span>{item.info}</span>}
                           {item.album && <span>{item.album}</span>}
                           {item.role && <span>{item.role}</span>}
                           {item.rating && <span>평점⭐ {item.rating}</span>}
                           {item.viewers && <span>관객 {item.viewers}</span>}
                           {item.publishing && <span>{item.publishing}</span>}
                           <span>{item.date}</span>
                        </div>
                     </a>
                  </li>
               ))}
         </ul>
      </div>
   );
};

export default ContentWorks;
