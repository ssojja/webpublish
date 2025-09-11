
export function Menu({href, name, style, isIcon, icon}) {
    return (
        <a href={href}
            className="menu-item"
            style={{width:style.w, height:style.h, backgroundColor: style.bg, color:style.color}}>
                
        {/* {isIcon === "true" ? icon : ""} */}
        { isIcon ? icon : ""} {name}
        </a>
    );
}