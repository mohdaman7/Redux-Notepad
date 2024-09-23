import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateNote from './components/CreateNote';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<CreateNote/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
