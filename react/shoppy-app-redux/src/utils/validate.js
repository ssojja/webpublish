/**
 *  Shoppy 로그인 폼 체크
 */
export const validateFormCheck = ({idRef, pwdRef, errors, setErrors}) => {
    if(idRef.current.value === ""){
        // alert("아이디를 입력해주세요.");
        setErrors({...errors, id:"아이디를 입력해주세요."});
        idRef.current.focus();
        return false;
    } else if(pwdRef.current.value === ""){
        // alert("패스워드를 입력해주세요.");
        setErrors({...errors, pwd:"패스워드를 입력해주세요."});
        pwdRef.current.focus();
        return false;
    }
    return true;
}

/**
 *  로그인 폼 체크
 */
export function validateLoginCheck(refs, setMsg) {
    // validation check (유효성 체크)
    if(refs.idref.current.value === ""){
        // alert('아이디를 입력해주세요.');     // 방법1
        setMsg({id:'아이디를 입력해주세요.'});    // 방법2
        // refs.msgIdRef.current.innerText = ('아이디를 입력해주세요.');    // 방법3
        refs.idref.current.focus();
        return false;
    } else if(refs.passref.current.value === ""){
        // alert('패스워드를 입력해주세요.');
        setMsg({pass:'패스워드를 입력해주세요.'});    // 방법2
        // refs.msgPassRef.current.innerText = ('패스워드를 입력해주세요.');
        refs.passref.current.focus();
        return false;
    }
    return true;
}