import React, {useState} from 'react';
import {Link} from 'react-router-dom';  // v6
import Header from '../components/Header';
import {register, userQuery, refresh} from '../services/AuthAPI';

import '../style/login.css'

function Register({user, setUser}) {

    const [valid, setValid] = useState(false);
    if (user['user'] !== "null") {
        refresh({'refresh': user['user']['refresh']})
            .then(token=>{
                
                userQuery(user['user']['user'].id, token['access'])
                    .then(data=>{
                        setValid(data['username'] === user['user']['user'].username);
                    });

            });
    }

    if (valid) {

        const logout = e=>{
            e.preventDefault();
            setUser("user", null, {path: '/'});
            window.location.reload();
        };

        return (
            <div>
                <Header buttons={['back_arrow']} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to='/profile' className='login_button'>Профиль</Link>
                    <Link to='/schedule' className='login_button'>Расписание</Link>
                    <button className='auth_button' onClick={logout}>Выйти</button>
                </div>
            </div>
        );

    } else {

        const submitForm = e=>{
            e.preventDefault();
            const authData = new FormData(e.target);
            const formData = Object.fromEntries(authData);
            if (formData.email !== '' && formData.username !== '' && formData.password !== '') {
                register(formData);
            }
        }
    
        return (
            <div>
                <Header buttons={['back_arrow']} />
                <div className='login_box'>
                    <form onSubmit={submitForm}>
                        <p className='login_box_header'>Регистрация</p>
                        <p className='login_box_text'>Логин</p>
                        <input name='username' className='login_input' />
                        <p className='login_box_text'>Почта</p>
                        <input name='email' className='login_input' />
                        <p className='login_box_text'>Пароль</p>
                        <input name='password' className='login_input' type='password' />
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className='login_button'>Регистрация</button>
                            <Link to='/login' className='login_button'>Войти</Link>
                        </div>
                    </form>
                </div>
            </div>
        );

    }

}

export default Register;
