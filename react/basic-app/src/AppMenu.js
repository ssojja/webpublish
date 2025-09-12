import './css/Menu.css';
import { MenuList } from './components/menus/MenuList.jsx';
import { useState, useEffect } from 'react';
import { fetchData } from './util/commonData.js';
import { Logo } from './components/commons/Logo.jsx';

export default function App() {

    const [menus, setMenus] = useState([]);
    
        useEffect(() => {
            const fetch = async () => {
                const data = await fetchData("/data/menus.json");
                setMenus(data);
            }
            
            fetch();
        }, [])

    return (
        <div>
            <div style={{display:"flex", 
                        justifyContent:"space-between",
                        borderBottom:"1px solid #888",
                        paddingBottom:"20px"}}>
                <MenuList menus={menus.headerLeft} />
                <Logo img="/images/logoRed.png" alt="header-logo" w="150px" />
                <MenuList menus={menus.headerRight} />
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.headerCenter} />
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <MenuList menus={menus.footerTop} />
            </div>
        </div>
    );
}