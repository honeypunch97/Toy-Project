import React from 'react';

const ContentNews = ({ news }) => {
   return (
      <div className="news-container">
         <ul>
            {news.map(item => (
               <li key={item.id}>
                  <a href={item.url} target="_blank">
                     <strong>{item.title}</strong>
                     <em>{item.date}</em>
                     <img src={item.img} alt={item.title} loading="lazy" />
                     <p>{item.desc}</p>
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ContentNews;
