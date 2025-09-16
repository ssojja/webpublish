import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Layout } from './components/router/Layout.jsx';
import { Login } from './components/form/Login.jsx';
import { Signup } from './components/form/Signup.jsx';
import { Home } from './components/router/Home.jsx';
import { About } from './components/router/About.jsx';
import { Support } from './components/router/Support.jsx';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="" element={레이아웃 컴포넌트}>*/}
                    <Route path="/" element={<Layout/>}>  
                        {/* <Route path="/" element={<Home/>} />            */}
                        <Route index element={<Home/>} />           
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />           
                        <Route path="/about" element={<About/>} />           
                        <Route path="/support" element={<Support/>} />           
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}