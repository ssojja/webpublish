import { useState, useRef } from 'react';
import { validateLoginCheck } from '../../util/validate.js';

export function Login2() {
    const refs = {
        idref : useRef(null),
        passref : useRef(null),
        msgIdRef : useRef(null),
        msgPassRef : useRef(null)
    }

    const [form, setForm] = useState({id:'', pass:''}); // 폼의 입력데이터 저장
    const [msg, setMsg] = useState({id:'', pass:''});

    const handleChangeForm = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]:value});
        // refs.msgIdRef.current.innerText = "";
        // refs.msgPassRef.current.innerText = "";
        setMsg({id:'', pass:''});
    }

    const handleFormReset = () => {
        setForm({id:'', pass:''});
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // 브라우저(DOM객체) 이벤트 정지

        if(validateLoginCheck(refs, setMsg)){
            console.log("submit ==> ", form);
        }
    }

    // console.log(form);

    return (
        <>
            <h1>Login2</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>아이디</label>
                        <input type="text"
                                name="id"
                                value={form.id}
                                // placeholder="아이디를 입력해주세요"
                                ref={refs.idref}
                                onChange={handleChangeForm}/>
                        <span ref={refs.msgIdRef}>{msg.id}</span>
                    </li>
                    <li>
                        <label>패스워드</label>
                        <input type="password"
                                name="pass"
                                value={form.pass}
                                // placeholder="패스워드를 입력해주세요"
                                ref={refs.passref}
                                onChange={handleChangeForm}/>
                        <span ref={refs.msgPassRef}>{msg.pass}</span>
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