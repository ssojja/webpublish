import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * 화면 출력 형식
 * @returns 
 */
export function Layout() {
    return (
        <div>
            <Header> {/* 자식컴포넌트를 Header컴포넌트의 props로 받는 경우 {children}사용 */}
                <Link to="/" style={{padding:"10px", color:"white"}}>Home</Link>
                <Link to="/login" style={{padding:"10px", color:"white"}}>로그인</Link>
                <Link to="/signup" style={{padding:"10px", color:"white"}}>회원가입</Link>
                <Link to="/about" style={{padding:"10px", color:"white"}}>About</Link>
                <Link to="/support" style={{padding:"10px", color:"white"}}>Support</Link>
            </Header>
            <div style={{height:"700px"}}>
                <Outlet />
            </div>
            {/* <footer style={{backgroundColor:"lightGray"}}>
                <p>footer</p>
            </footer> */}
            <Footer />
        </div>
    );
}