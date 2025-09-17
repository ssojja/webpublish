import { useState } from "react";

export function Category({style, name, count}) {
    return (
        <button className={style}>{name}<span className="category-count">{count}</span></button>
    );
}
export function Categories({categories}) {
    const [name, setName] = useState('All');

    return (
        <ul className="categories">
            {categories && categories.map((category, index) => 
                <li key={index}>
                    <Category style={name === category.name ? "category selected": "category"} name={category.name} count={category.count}/>
                </li>
            )}
        </ul>
    );
}