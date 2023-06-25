import { styled } from 'styled-components';

// Gallery
export const Container = styled.div`
   width: ${props => props.width};
   margin: auto;
`;

// GalleryList
export const GalleryListContainer = styled.div`
   .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      margin-left: -30px; /* gutter size offset */
      width: auto;
   }
   .my-masonry-grid_column {
      padding-left: 30px; /* gutter size */
      background-clip: padding-box;
   }

   /* Style your items */
   .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      background: grey;
      margin-bottom: 30px;
   }
`;

// GalleryItem
export const GalleryItemBox = styled.article`
   border: 2px solid #000;
   padding: 15px;
   box-sizing: border-box;
   border-radius: 25px;
   cursor: pointer;
   transition: 0.3s;
   margin-bottom: 30px;
   opacity: 0.9;
   &:hover {
      opacity: 1;
      transform: translateY(-10px);
   }
   img {
      width: 100%;
      border-radius: 25px;
   }
   h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
   }
   ul {
      margin-bottom: 10px;
      li {
         margin-bottom: 5px;
      }
   }
   p {
      margin-bottom: 20px;

      span {
         font-size: 14px;
         border: 1px solid #000;
         border-radius: 20px;
         margin-right: 5px;
         padding: 1px 7px;
         box-sizing: border-box;
         background: #dcdcdc;
         &:hover {
            background-color: tomato;
         }
      }
   }
`;

// GallerySearch
export const GallerySearchForm = styled.form`
   padding: 10px;
   box-sizing: border-box;
   margin: 50px 0;
   display: flex;
   justify-content: center;
   position: relative;
   input {
      border: 2px solid #000;
      display: block;
      padding: 5px 20px;
      width: 500px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 15px;
      transition: 0.3s;
      margin-right: 10px;
      &:focus {
         outline-color: tomato;
      }
   }
   button {
      display: block;
      padding: 0;
      width: 100px;
      height: 40px;
      background: #000;
      color: #fff;
      border: none;
      border-radius: 15px;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
         background: tomato;
      }
   }
   div {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 55px;
      z-index: 10;
      border: 1px solid #dcdcdc;
      border-radius: 25px;
      overflow: hidden;
      p {
         width: 610px;
         padding: 5px 10px;
         box-sizing: border-box;
         position: relative;
         cursor: pointer;
         &:hover {
            background-color: tomato;
         }
         &:nth-child(odd) {
            background: #fff;
         }
         &:nth-child(even) {
            background: #ededed;
         }
         &:first-child {
            border-radius: 10px 10px 0 0;
         }
         &:last-child {
            border-radius: 0 0 10px 10px;
         }
         button {
            width: 40px;
            height: 20px;
            color: #000;
            background: none;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            &:hover {
               background: none;
               color: tomato;
            }
         }
      }
   }
`;
