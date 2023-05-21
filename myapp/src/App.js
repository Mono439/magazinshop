import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Category from "./pages/categorys";
import './App.scss';


export default function App() {
  return (
    <div className="App">
       <div>
        <Layout>
          <Routes>
            <Route path='/' element={ <Home/>} />
            <Route path="/categorys" element={ <Category/>} />
          </Routes>
        </Layout>
       </div> 
    </div>
  )
};




