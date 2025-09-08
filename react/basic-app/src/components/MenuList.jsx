import { Menu } from './Menu.jsx';
/**
 * 메뉴 리스트
 */
export function MenuList({menus}) {
    return (
        <ul className="menu-list">
            { menus.map((item) => 
                <li>
                        <Menu title={item.title}
                            color={item.color}
                            bg={item.bg}
                            href={item.href} /> 
                </li>
            )}
        </ul>
    );
}