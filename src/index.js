
import React from 'react';
import { createRoot } from 'react-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import SecondsCounter from './SecondsCounter';
import './index.css';

const root = document.getElementById('root');
const rootElement = createRoot(root); 

rootElement.render(
  <React.StrictMode>
    <SecondsCounter seconds={0} />
  </React.StrictMode>
);


