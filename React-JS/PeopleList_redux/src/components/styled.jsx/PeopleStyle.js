import { styled } from 'styled-components';

const mainColor = '#A4193D';
const subColor = '#FFDFB9';
export const Wrap = styled.div`
   width: 100%;
   position: relative;
   background-color: ${subColor};
`;
export const HeaderContainer = styled.header`
   height: 15vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 50px 0;
   box-sizing: border-box;
   background-color: ${mainColor};

   h1 {
      margin-bottom: 30px;
      a {
         font-size: 30px;
         font-weight: 600;
         color: ${subColor};
      }
   }
   nav {
      ul {
         display: flex;
         li {
            margin-right: 30px;
            position: relative;
            padding: 3px 10px;
            &:last-child {
               margin-right: 0;
            }
            &::before {
               content: '';
               position: absolute;
               left: 0px;
               top: 0;
               width: 7px;
               height: 7px;
               border-radius: 50%;
               background-color: yellow;
               transition: 0.3s;
               transform: scale(0);
            }
            &.on {
               &::before {
                  transform: scale(1);
               }
            }

            &::after {
               content: '';
               width: 100%;
               height: 1px;
               background-color: yellow;
               position: absolute;
               left: 0;
               bottom: 0;
               transform: scaleX(0);
               transition: 0.3s;
            }
            &:hover {
               &::after {
                  transform: scaleX(1);
               }
               a {
                  color: yellow;
               }
            }
            a {
               color: ${subColor};
            }
         }
      }
   }
`;
export const MainContainer = styled.div`
   width: 1200px;
   min-height: 85vh;
   margin: auto;
   padding: 50px 0;
   box-sizing: border-box;
   h2 {
      font-size: 24px;
      font-weight: 600;
      color: ${mainColor};
      margin-bottom: 20px;
   }
   .btn-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
         &:last-child {
            margin-right: 0;
         }
      }
   }
   button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      cursor: pointer;
      border: 1px solid ${mainColor};
      border-radius: 1000px;
      background-color: ${subColor};
      color: ${mainColor};
      transition: 0.3s;
      a {
         color: ${mainColor};
         display: flex;
         justify-content: center;
         align-items: center;
         width: 100%;
         height: 100%;
      }
      &:hover {
         background-color: ${mainColor};
         color: ${subColor};
         a {
            color: ${subColor};
         }
      }
   }
   .info-box {
      width: 100%;
      padding: 50px;
      border: 2px solid ${mainColor};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      strong {
         display: block;
         font-size: 24px;
         margin-bottom: 30px;
      }
   }
`;
export const ListContainer = styled.ul`
   li {
      position: relative;
      width: 100%;
      height: 200px;
      display: flex;
      margin-bottom: 30px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid ${mainColor};
      box-sizing: border-box;
      .img-box {
         width: 200px;
         height: 100%;
         overflow: hidden;
         margin-right: 50px;
         background-color: ${mainColor};
         img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            scale: 1;
            transition: 0.3s;
            &:hover {
               scale: 1.1;
            }
         }
      }
      .text-box {
         height: 100%;
         font-size: 18px;
         font-weight: 600;
         display: flex;
         flex-direction: column;
         justify-content: space-around;
         margin-right: 50px;
         p {
            color: ${mainColor};
            letter-spacing: 2px;
            &:first-child {
               font-size: 24px;
            }
         }
      }
      .btn-box {
         position: absolute;
         right: 0;
         top: 0;
         height: 100%;
         display: flex;
         align-items: center;
         margin-right: 50px;
         button {
            display: block;
            width: 150px;
            height: 50px;
            margin-right: 10px;
            &:last-child {
               margin-right: 0;
            }
            i {
               font-size: 24px;
            }
         }
      }
   }
`;

export const FormContainer = styled.form`
   width: 100%;
   font-size: 20px;
   label {
      display: block;
      color: ${mainColor};
      font-weight: 600;
   }
   input {
      display: block;
      padding: 15px;
      box-sizing: border-box;
      background-color: ${subColor};
      border: none;
      border-bottom: 2px solid ${mainColor};
      transition: 0.3s;
      outline: none;
      font-size: 20px;
      &:focus {
         background-color: ${mainColor};
         color: ${subColor};
         border-radius: 5px;
         font-weight: 600;
      }
   }
   &.add-form {
      width: 60%;
      input {
         width: 100%;
         margin-bottom: 20px;
      }
      button {
         width: 50%;
         font-size: 20px;
         font-weight: 600;
         height: 40px;
      }
   }
`;
export const AddContainer = styled.div`
   .add-box {
      display: flex;
      ul {
         width: 40%;
         padding: 0 30px;
         box-sizing: border-box;
         li {
            display: flex;
            margin-bottom: 10px;
            &:last-child {
               margin-bottom: 0;
            }
            img {
               width: 150px;
               height: 150px;
               margin-right: 10px;
            }
            p {
               word-break: break-all;
            }
         }
      }
   }
`;
export const EditContainer = styled.div`
   .edit-box {
      display: flex;
      ul {
         width: 40%;
         padding: 0 30px;
         box-sizing: border-box;
         li {
            display: flex;
            margin-bottom: 10px;
            &:last-child {
               margin-bottom: 0;
            }
            img {
               width: 150px;
               height: 150px;
               margin-right: 10px;
            }
            p {
               word-break: break-all;
            }
         }
      }
   }
`;
export const LoginContainer = styled.div`
   form {
      input {
         width: 100%;
         margin-bottom: 30px;
         &:last-of-type {
            margin-bottom: 50px;
         }
      }
      button {
         width: 50%;
         height: 40px;
      }
   }
`;
export const LogoutContainer = styled.div`
   p {
      font-size: 20px;
      margin-bottom: 50px;
      span {
         font-weight: 600;
         font-size: 22px;
      }
   }
   .info-box {
      button {
         width: 200px;
         height: 40px;
         margin-right: 10px;
         font-size: 17px;
         a {
            font-size: 17px;
         }
         &:last-child {
            margin-right: 0;
         }
      }
   }
`;
