import styled from 'styled-components';
const mainColor = '#402978';
const darkColor = '#332160';
// MegaBox
export const MegaBoxContainer = styled.div`
   width: 1100px;
   position: relative;
   margin: auto;
   box-sizing: border-box;
   padding: 50px 0;
   h1 {
      text-align: center;
      margin-bottom: 30px;
   }
`;

// MegaBoxForm
export const MegaBoxFormContainer = styled.div`
   margin-bottom: 50px;
   position: relative;
   form {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      input {
         width: 500px;
         height: 40px;
         padding: 5px 20px;
         border: 1px solid #dcdcdc;
         box-sizing: border-box;
         transition: 0.3s;
         border-radius: 15px 0 0 15px;
         outline: none;
         &:focus {
            border-color: ${mainColor};
         }
      }
      button {
         padding: 0;
         width: 100px;
         height: 40px;
         border: 1px solid #dcdcdc;
         border-radius: 0 15px 15px 0;
         transition: 0.3s;

         cursor: pointer;
         &:hover {
            background: ${mainColor};
            color: #fff;
            border-color: ${mainColor};
         }
      }
   }
   .filter-box {
      p {
         button {
            width: 75px;
            height: 35px;
            background: ${mainColor};
            color: #fff;
            border: none;
            border-radius: 5px;
            margin-right: 5px;
            cursor: pointer;
            &:hover {
               background: ${darkColor};
            }
            &:last-child {
               margin-right: 0;
            }
         }
      }
   }
   .log-box {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 40px;
      border: 1px solid #dcdcdc;
      z-index: 10;
      box-sizing: border-box;
      li {
         width: 580px;
         background: #fff;
         position: relative;
         transition: 0.1s;
         &:nth-child(even) {
            background: #dcdcdc;
         }
         &:hover {
            background: ${mainColor};
            span {
               color: #fff;
            }
            button {
               color: #fff;
            }
         }
         span {
            display: inline-block;
            text-indent: 10px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
               text-decoration: underline;
            }
         }
         button {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 10px;
            border: none;
            background: transparent;
            cursor: pointer;
         }
      }
   }
`;

// MegaBoxList
export const MegaBoxListContainer = styled.ul`
   display: flex;
   flex-wrap: wrap;
   li {
      width: 230px;
      margin-right: 60px;
      margin-bottom: 60px;
      position: relative;
      cursor: pointer;
      border-radius: 30px 0 0 0;
      overflow: hidden;
      &:nth-child(4n) {
         margin-right: 0;
      }
      &:hover {
         &::after {
            left: -40px;
         }
         &::before {
            left: -40px;
         }
      }
      &::before {
         content: attr(data-rank);
         position: absolute;
         display: block;
         left: 10px;
         top: 5px;
         font-size: 20px;
         z-index: 10;
         transition: 0.3s;
         color: #fff;
      }
      &::after {
         content: '';
         position: absolute;
         display: block;
         text-align: right;
         left: 0;
         top: 0;
         width: 0;
         height: 0;
         border-top: 30px solid ${mainColor};
         border-right: 30px solid transparent;
         border-left: 30px solid ${mainColor};
         border-bottom: 30px solid transparent;
         transition: 0.3s;
      }
      .img-box {
         width: 100%;
         border-radius: 30px;
         overflow: hidden;
         position: relative;
         &:hover {
            img {
               scale: 1.05;
            }
            .desc-box {
               transform: translateX(0);
            }
         }
         img {
            display: block;
            width: 100%;
            transition: 0.3s;
         }
         .desc-box {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            padding: 0 20px;
            box-sizing: border-box;
            color: #fff;
            left: 0;
            top: 0;
            transition: 0.3s;
            transform: translateX(-100%);
            display: flex;
            justify-content: center;
            align-items: center;
         }
      }
      .title-box {
         margin-top: 10px;
         display: flex;
         width: 100%;
         align-items: center;
         img {
            display: block;
            width: 23px;
            height: 23px;
            margin-right: 5px;
         }
         strong {
            display: block;
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         }
      }
      .info-box {
         font-size: 15px;
         display: flex;
         justify-content: space-between;
         span {
            display: block;
            &:first-child {
               position: relative;
               &::after {
                  content: '';
                  display: block;
                  width: 1px;
                  height: 12px;
                  background: #dcdcdc;
                  position: absolute;
                  right: -8px;
                  top: 50%;
                  transform: translateY(-50%);
               }
            }
         }
      }
      .btn-box {
         display: flex;
         justify-content: space-between;
         margin-top: 5px;
         button {
            width: 74px;
            height: 36px;
            border: none;
            background: ${mainColor};
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            font-size: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            &:hover {
               background: ${darkColor};
            }
         }
      }
   }
`;

// MegaBoxModal
export const MegaBoxModalContainer = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 100vw;
   height: 100vh;
   z-index: 100;
   .bg {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
   }
   .content-box {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      width: 1000px;
      height: 500px;
      display: flex;
      border-radius: 30px;
      overflow: hidden;
      button {
         position: absolute;
         right: 20px;
         top: 20px;
         background: transparent;
         border: none;
         cursor: pointer;
         font-size: 24px;
         transition: 0.3s;
         &:hover {
            color: ${mainColor};
         }
      }
      .img-box {
         width: 40%;
         height: 500px;
         img {
            display: block;
            width: 100%;
            height: 500px;
            object-fit: cover;
         }
      }
      .text-box {
         width: 60%;
         padding: 20px;
         box-sizing: border-box;
         display: flex;
         flex-direction: column;
         h2 {
            padding-bottom: 5px;
            box-sizing: border-box;
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 20px;
            border-bottom: 1px solid #dcdcdc;
         }
         span {
            font-size: 13px;
            position: relative;
            transition: 0.3s;
            padding-left: 10px;
            &::after {
               content: '';
               display: block;
               width: 3px;
               height: 3px;
               background: #dcdcdc;
               border-radius: 50%;
               position: absolute;
               left: 0;
               top: 50%;
               transform: translateY(-50%);
               transition: 0.1s;
               margin-bottom: 2px;
            }
            &:hover {
               color: ${mainColor};
               &::after {
                  width: 5px;
                  height: 5px;
                  background: ${mainColor};
               }
            }
         }
      }
   }
`;
