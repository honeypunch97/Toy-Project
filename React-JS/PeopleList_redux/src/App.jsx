import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';
import { MainContainer, Wrap } from './components/styled.jsx/PeopleStyle';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {
   return (
      <Wrap>
         <HashRouter>
            <Header />
            <MainContainer>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/edit">
                     <Route path=":editID" element={<Edit />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </MainContainer>
         </HashRouter>
      </Wrap>
   );
};

export default App;
