import React, { useEffect, useRef, useState } from 'react';
import GallerySearch from './GallerySearch';
import GalleryList from './GalleryList';
import axios from 'axios';
import { Container } from '../styled/GalleryStyle';

const Gallery = () => {
   //
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);
   const [text, setText] = useState('dog');

   const onSubmit = text => {
      setText(text);
   };

   useEffect(() => {
      const API_KEY = '36875424-7cfba015a0336f3d13628f396&';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`;
      axios
         .get(url)
         .then(res => {
            setData(res.data.hits);
            setLoading(true);
            setError(null);
         })
         .catch(error => {
            setData([]);
            setLoading(false);
            setError('api 주소를 확인하세요');
         });
   }, [text]);
   return (
      <Container width="1400px">
         <GallerySearch onSubmit={onSubmit} />
         <GalleryList data={data} />
      </Container>
   );
};

export default Gallery;
