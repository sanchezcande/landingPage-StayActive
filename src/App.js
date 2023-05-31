import { Route, Routes } from 'react-router-dom';
import * as React from 'react'
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'; 
import './App.css';


function App() {
  return (
    <Layout >
      <Routes >
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/" exact={true} element={<Home/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
