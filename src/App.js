import { Route, Routes } from 'react-router-dom';
import * as React from 'react'
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'; 
import './App.css';
import Clubes from './components/Clubes/Clubes';
import FAQs from './components/FAQs/FAQs';
import Jugadores from './components/Jugadores/Jugadores';
import { HashLink as Link} from 'react-router-hash-link';


function App() {
  return (
    <Layout >
        <Link to='#/' element={<Home/>}/>
        <Link to='#clubes' element={<Clubes/>} smooth />
        <Link to='#jugadores' element={<Jugadores/>} smooth />
        <Link to='#faqs' element={<FAQs/>} smooth />

    </Layout>
  );
}

export default App;
