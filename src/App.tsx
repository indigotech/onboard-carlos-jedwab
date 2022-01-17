import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from './pages/login-page';
import { FrontPage } from './pages/front-page';
import { UserDetailsPage } from 'pages/user-details-page';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/front_page' element={<FrontPage />} />
        <Route path='/user_details/:id' element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
