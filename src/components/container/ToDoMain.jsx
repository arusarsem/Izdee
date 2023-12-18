import React, { useState, useEffect } from 'react';
import ToDo from '../container/ToDo/ToDo';
import { Provider } from 'react-redux';
import store from './Store/store';
const ToDoMain = () => {
  
  


  return (
    <div>
      
      <Provider store ={store}>
      <ToDo />
      </Provider>
    </div>
  );
};

export default ToDoMain;