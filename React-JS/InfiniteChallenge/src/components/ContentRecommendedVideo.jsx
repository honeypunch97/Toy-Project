import React from 'react';

const ContentRecommendedVideo = ({ recommendedVideo, select, onSelect }) => {
   const onToggle = e => {
      e.currentTarget.classList.toggle('on');
   };
   return (
      <div className="recommendedVideo-container">
         <ul>
            {recommendedVideo.map(item => (
               <li key={item.id} onClick={onToggle}>
                  <span>
                     <i className="xi-angle-left"></i>
                  </span>
                  <p>{item.title}</p>
                  <div>
                     <iframe
                        width="1000"
                        height="562"
                        loading="lazy"
                        src={item.url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ContentRecommendedVideo;
