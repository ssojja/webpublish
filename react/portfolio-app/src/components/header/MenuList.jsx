import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function MenuList({menus}) {
    const [active, setActive] = useState('Home');
    const handleClick = (name) => { // 자식에게 전송하는 props 이벤트 핸들러 함수
        setActive(name);
    }

    // console.log(`active --> `, active);

    return (
        <nav>
            <ul className="header-menu">
                {menus && menus.map((menu, index) =>
                    <li key={index}>
                        <Menu href={menu.href}
                                name={menu.name} 
                                click={handleClick}
                                style={active === menu.name ? 
                                    "header-menu-item active" : "header-menu-item"} 
                        />
                    </li>
                )}
            </ul>
        </nav>
    );
}