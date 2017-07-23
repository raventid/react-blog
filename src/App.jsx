import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import MainLayout from './layouts/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes />
    </MainLayout>
  </BrowserRouter>
);

export default App;
