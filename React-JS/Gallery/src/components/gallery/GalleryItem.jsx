import React from 'react';
import { GalleryItemBox } from '../styled/GalleryStyle';

const GalleryItem = ({ item }) => {
   const { id, largeImageURL, views, downloads, likes, tags } = item;
   return (
      <GalleryItemBox>
         <img src={largeImageURL} alt={id} loading="lazy" />
         <h2>{id}</h2>
         <ul>
            <li>조회수 : {views}</li>
            <li>다운로드 : {downloads}</li>
            <li>좋아요 : {likes}</li>
         </ul>
         <p>
            {tags.split(', ').map((item, idx) => (
               <span key={idx}>#{item}</span>
            ))}
         </p>
      </GalleryItemBox>
   );
};

export default GalleryItem;
