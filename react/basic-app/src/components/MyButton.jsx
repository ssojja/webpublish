export function MyButton({name, type, style, handleProps}) {   // props = {name:"회원가입"}
    const handleClick = () => {
        console.log(`(자식)버튼 클릭! -----> ${name}`);
        handleProps(`버튼 클릭! -----> ${name}`);
    }

    return (
        <button type={type}
                className={style}
                onClick={handleClick}
                >{name}</button>
    );
}