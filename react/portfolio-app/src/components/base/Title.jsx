
export function Title({title}){
    return (
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({title}){
    return (
        <p className="description">{title}</p>
    );
}

export function Description({style}){
    return (
        <p className={style}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Tenetur, error exercitationem nostrum optio maiores ipsum tempora officiis dolores eaque odit quaerat deleniti sit.
                Neque fugiat labore dolore at repellat? Eius!</p>
    );
}

export function BottomDescription({description}){
    return (
        <p>{description}</p>
    );
}