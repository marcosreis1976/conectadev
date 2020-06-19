import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Routes, Route, Router} from 'react-router-dom';

import GuestRoute from './routes/GuestRoute';
import SignIn from './pages/Signin';
import Home from './pages/Home';
import theme from './theme';

import './mock';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <GuestRoute path="/sign-in" element={<SignIn/>} />
          <Route path="*" element={<h1>Not found 404!</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
