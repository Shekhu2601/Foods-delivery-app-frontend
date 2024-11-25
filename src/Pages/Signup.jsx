
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import styles from './Signup.module.css'
import loginimg from "./loginpage.png"
import logo from "./LOGO1.png"
import Footer from './Footer';

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        phoneNumber:"",
        password: ''
    })

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email,phoneNumber, password } = signupInfo;
        if (!name || !email || !phoneNumber|| !password) {
            return handleError('name, email,phoneNumber and password are required')
        }
        try {
           
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login')
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
                <h1>Welcome  👋</h1>
                <p>Today is a new day. It's your day. You shape it. <br />
                Sign up to start ordering.</p>
                </div>
            <form onSubmit={handleSignup}>
                <div className={styles.infi} >
                    <label htmlFor='name'>Name</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder='Enter your name...'
                        value={signupInfo.name}
                    />
                </div>
                <div  className={styles.infi}>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter your 10 digit mobile number'
                        value={signupInfo.phoneNumber}
                    />
                </div >
                <div  className={styles.infi}>
                    <label htmlFor='email'>Email</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder='Enter your email...'
                        value={signupInfo.email}
                    />
                </div>
                <div  className={styles.infi}>
                    <label htmlFor='password'>Password</label>
                    <input className={styles.inputs}
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder='At least 8 characters'
                        value={signupInfo.password}
                    />
                </div >
                <button className={styles.Signupbtn} type='submit'>Continue</button> <br />
                <span className={styles.subH}>Already have an account ?
                    <Link className={styles.links} to="/login"> Login</Link>
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
