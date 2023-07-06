import { styled } from 'styled-components';

const mainColor = '#02343F';
const subColor = '#F0EDCC';

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
               background-color: #fff;
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
               background-color: #fff;
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
                  color: #fff;
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
   min-height: 70vh;
   margin: auto;
   padding: 50px;
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
         display: block;
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
`;
export const TableContainer = styled.table`
   width: 100%;
   colgroup {
      .w1 {
         width: 25%;
      }
      .w2 {
         width: 25%;
      }
      .w3 {
         width: auto;
      }
      .w4 {
         width: 20%;
      }
   }
   th,
   td {
      text-align: center;
      font-size: 18px;
      padding: 5px;
   }
   th {
      background-color: ${mainColor};
      color: ${subColor};
      font-weight: 600;
   }
   td {
      color: ${mainColor};
      border-bottom: 1px solid ${mainColor};
      button {
         width: 45px;
         height: 25px;
         margin-right: 10px;
      }
   }
`;
export const FormContainer = styled.form`
   width: 100%;
   label {
      display: block;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${mainColor};
   }
   input {
      width: 100%;
      font-size: 20px;
      padding: 10px 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border: none;
      border-bottom: 2px solid ${mainColor};
      color: ${mainColor};
      outline: none;
      transition: 0.3s;
      background-color: ${subColor};
      &:focus {
         font-weight: 600;
      }
   }
   button {
      display: block;
      width: 300px;
      height: 40px;
      font-size: 18px;
      font-weight: 600;
      margin: auto;
   }
   .info-box {
      text-align: center;
      strong {
         display: block;
         margin-bottom: 20px;
      }
   }
`;
export const LogoutContainer = styled.div`
   p {
      margin-bottom: 10px;
   }
   .info-box {
      background-color: ${subColor};
      padding: 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${mainColor};
      strong {
         font-size: 20px;
         font-weight: 600;
         margin-bottom: 20px;
      }
      button {
         margin-right: 10px;
         width: 80px;
         height: 30px;
      }
   }
`;
export const FooterContainer = styled.footer`
   height: 15vh;
   background-color: ${mainColor};
   display: flex;
   justify-content: center;
   align-items: center;
   h2 {
      a {
         color: ${subColor};
         font-size: 24px;
      }
   }
`;
