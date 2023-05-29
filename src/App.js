import { Route, Routes } from 'react-router-dom';
import * as React from 'react'
import './App.css';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact={true} element={<App/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
