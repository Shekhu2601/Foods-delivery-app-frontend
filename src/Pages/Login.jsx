
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import styles from './Login.module.css'
import loginimg from "./loginpage.png"
import logo from "./LOGO1.png"
import Footer from './Footer';

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('email and password are required')
        }
        try {
            
            const response = await fetch(`https://foods-app-backend-v44y.onrender.com/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home')
                }, 1000)
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    }

    return ( 
        <>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt="" />
                <div className={styles.wel}>
                <h1>Welcome Back  👋</h1>
                <p>Today is a new day. It's your day. You shape it. <br />
                Sign up to start ordering.</p>
                </div>
            <form  onSubmit={handleLogin}>
                
              
                <div  className={styles.infi}>
                    <label htmlFor='email'>Email</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={loginInfo.email}
                    />
                </div>
                <div  className={styles.infi}>
                <label htmlFor='password'>Password</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='At least 8 characters'
                        value={loginInfo.password}
                    />
                </div >
                <button className={styles.loginbtn} type='submit'> Sign in</button> <br />
                <span className={styles.subH}>Does't have an account ?
                    <Link className={styles.links} to="/signup"> Sign in</Link>
                </span>
            </form>
            <ToastContainer /></div>
            <div className={styles.right}>
<img className={styles.imgs} src={loginimg} alt="img" />
            </div>
        </div>
        
        <Footer/>
         </>
    )
}
