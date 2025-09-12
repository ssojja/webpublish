import { useState, useRef } from "react";

export function UserInfo() {
    const refs = {
        nameRef:useRef(null),
        ageRef:useRef(null),
        addressRef:useRef(null)
    }

    const initForm = {
        name:"",
        age:"",
        address:""
    }
    
    const [form, setForm] = useState(initForm);
    
    const handleFormChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]:value});   // property는 대괄호로 묶어줌!        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(refs.nameRef.current.value === ""){
            alert('이름을 입력해주세요.');
            refs.nameRef.current.focus();
        } else if(refs.ageRef.current.value === ""){
            alert('나이를 입력해주세요.');
            refs.ageRef.current.focus();
        } else if(refs.addressRef.current.value === ""){
            alert('주소를 입력해주세요.');
            refs.addressRef.current.focus();
        } else {
            console.log(`전송데이터 --> `, form);
        }

    }

    const handleFormReset = () => {
        setForm(initForm);
    }

    // console.log(form);
    
    return (
        <>
            <h1>UserInfo</h1>
            <form name="userInfo" onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>이름</label>
                        <input type="text"
                                name="name"
                                value={form.name}
                                ref={refs.nameRef}
                                onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label>나이</label>
                        <input type="text"
                                name="age"
                                value={form.age}
                                ref={refs.ageRef}
                                onChange={handleFormChange}/>
                    </li>
                    <li>
                        <label>주소</label>
                        <input type="text"
                                name="address"
                                value={form.address}
                                ref={refs.addressRef}
                                onChange={handleFormChange}/>
                    </li>
                    <li>
                        <button type="submit">전송</button>
                        <button type="button" onClick={handleFormReset}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </>
    );
}