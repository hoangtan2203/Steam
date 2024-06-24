import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './routes/Routes';


function App() {

  
  return (
    <BrowserRouter basename='/'>
           <RouterCustom/>
    </BrowserRouter>  
  );
}

export default App;
