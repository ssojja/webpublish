import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function ToggleButton() {
    return (
        <button id="menu-toggle" className="header-toggle"><FontAwesomeIcon icon={faBars} /></button>
    );
}