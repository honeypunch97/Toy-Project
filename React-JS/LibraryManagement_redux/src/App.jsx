import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContainer, Wrap } from './components/styled/BookStyle';
import Header from './components/Header';
import BookHome from './components/BookHome';
import BookAdd from './components/BookAdd';
import Login from './components/Login';
import Logout from './components/Logout';
import Footer from './components/Footer';
import BookEdit from './components/BookEdit';

const App = () => {
   return (
      <Wrap>
         <HashRouter>
            <Header />
            <MainContainer>
               <Routes>
                  <Route path="/" element={<BookHome />} />
                  <Route path="/add" element={<BookAdd />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/edit">
                     <Route path=":editID" element={<BookEdit />} />
                  </Route>
               </Routes>
            </MainContainer>
            <Footer />
         </HashRouter>
      </Wrap>
   );
};

export default App;
