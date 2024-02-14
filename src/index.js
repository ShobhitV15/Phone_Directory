import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import reportWebVitals from './reportWebVitals';
import PhoneDirectory from './PhoneDirectory';
import './Common/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneDirectory/>
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     < />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
