export function MyButton({name, type, style}) {   // props = {name:"회원가입"}
    return (
        <button type={type}
                className={style}>{name} 버튼을 클릭해 주세요!!</button>
    );
}