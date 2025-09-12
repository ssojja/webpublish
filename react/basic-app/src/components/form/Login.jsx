import { useState, useRef } from 'react';

export function Login() {
    const idRef = useRef(null); // DOM 객체의 참조변수
    const passwordRef = useRef(null); // DOM 객체의 참조변수

    const initForm = {
        id:"", 
        password:""
    };

    const [form, setForm] = useState(initForm);

    const handleChangeForm = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});   // property는 대괄호로 묶어줌!       
    }

    // 전송하기(validation check)
    const handleSubmit = (event) => {
        event.preventDefault();

        if(idRef.current.value === "") {
            alert('아이디 입력해주세요.');
            idRef.current.focus();
        } else if(passwordRef.current.value === ""){
            alert('패스워드를 입력해주세요.');
            passwordRef.current.focus();
        } else{
            console.log(`전송데이터 --> `, form);
        }
    }

    const handleFormReset = () => { setForm(initForm); }

    // console.log(form);

    return (
        <>
            <h1>Login</h1>
            <form name="login-form" 
                    onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text"
                                name="id"
                                value={form.id}
                                ref={idRef}
                                placeholder="아이디를 입력해주세요"
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password"
                                name="password"
                                value={form.password}
                                ref={passwordRef}
                                placeholder="패스워드를 입력해주세요"
                                onChange={handleChangeForm}/>
                    </li>
                    <li>
                        <button type="submit">로그인</button>
                        <button type="reset" onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>

            </form>
        </>
    );
}