/**
 * 로그인, 회원가입 폼에 따른 클래스 정의 및 생성
 * - 공통적인 입력 값 : 아이디, 비밀번호는 멤버라는 부모 클래스로 정의
 * - 로그인, 회원가입 클래스는 멤버 클래스의 자식으로 정의
 */
// 멤버 클래스 정의
// 로그인 클래스 정의
class Member{
    #id; #pass;
    constructor(id, pass){
        this.#id = id;
        this.#pass = pass;
    }

    getId = () => this.#id;
    getPass = () => this.#pass;

    setId = (id) => this.#id = id;
    setPass = (pass) => this.#pass = pass;

    display = () => console.log(this.#id, this.#pass);
}

// 회원가입 클래스 정의
class JoinMember extends Member{
    constructor(id, pass, name, phone, emailname, emaildomain){
        super(id, pass);
        this.name = name;
        this.phone = phone;
        this.emailname = emailname;
        this.emaildomain = emaildomain;
    }
    
    getName = () => this.name;
    getPhone = () => this.phone;
    getEmailname = () => this.emailname;
    getEmaildomain = () => this.emaildomain;

    getName = (name) => this.name = name;
    getPhone = (phone) => this.phone = phone;
    getEmailname = (emailname) => this.emailname = emailname;
    getEmaildomain = (emaildomain) => this.emaildomain = emaildomain;


    display = () => console.log(this.getId(), this.getPass(), this.name, this.phone, this.emailname, this.emaildomain);
}

/**
 * 로그인 처리 함수
 */
function loginCheck(){
    const id = document.querySelector('#id');
    const pass = document.querySelector('#pwd');

    // 입력 폼에 대한 유효성 체크(validation check) 반드시 진행!
    if(id.value === ''){
        alert('아이디를 입력해주세요.');
        id.focus();
    } else if(pass.value === ''){
        alert('비밀번호를 입력해주세요.')
        pass.focus();
    } else {
        let login = new Member(id.value, pass.value);

        // 아이디, 패스워드를 서버에 전송 : Login 객체 전송
        const did = 'test';
        const dpass = '1234';

        if(did === login.getId() && dpass === login.getPass()){
            alert("로그인 성공!");
        } else{
            alert('로그인 실패!');
            id.value = '';
            pass.value = '';
            id.focus();
        }
    }
}

/**
 * 아이디 중복 확인 함수 정의
 */
function overlabCheck(){
    const id = document.querySelector('#id');
    const pass = document.querySelector('#pwd');
    const did = 'test';

    if(id.value === ''){
        alert("아이디를 입력해주세요.");
        id.focus();
    } else if(id.value === did){
        alert("사용할 수 없는 아이디입니다");
        id.focus();
    } else{
        alert("사용 가능한 아이디입니다");
        pass.focus();
    }
}

/**
 * 회원가입 처리 함수
 */
function signupCheck(){
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');

    if(id.value === ''){
        alert("아이디를 입력해주세요.");
        id.focus();
    } else if(pwd.value === ''){
        alert('비밀번호를 입력해주세요.');
        pwd.focus();
    } else if(cpwd.value === ''){
        alert('비밀번호 확인을 입력해주세요.');
        cpwd.focus();
    } else if(name.value === ''){
        alert('이름을 입력해주세요.');
        name.focus();
    } else if(phone.value === ''){
        alert('전화번호를 입력해주세요.');
        phone.focus();
    } else if(emailname.value === ''){
        alert('이메일 주소를 입력해주세요.');
        emailname.focus();
    } else if(emaildomain.value === 'default'){
        alert('이메일 도메인을 선택해주세요.');
        emaildomain.focus();
    } else if(pwd.value !== cpwd.value){
        alert('비밀번호와 비밀번호 확인 입력 내용이 다릅니다.');
        pwd.value = '';
        cpwd.value = '';
        pwd.focus();
    } else{
        let member = new JoinMember(id.value, pwd.value, name.value, phone.value, emailname.value, emaildomain.value);
        member.display();
    }
}