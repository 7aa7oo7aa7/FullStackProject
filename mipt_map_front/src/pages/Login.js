import React, {useState} from 'react';
import {Link} from 'react-router-dom';  // v6
import Header from '../components/Header';
import {login, userQuery, refresh} from '../services/AuthAPI';

import '../style/login.css'

function Login({user, setUser}) {

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
            if (formData.email !== '' && formData.password !== '') {
                login(formData)
                    .then(data=>{
                        setUser("user", data, {path: '/'});
                    });
            }
        };
    
        return (
            <div>
                <Header buttons={['back_arrow']} />
                <div className='login_box'>
                    <form onSubmit={submitForm}>
                        <p className='login_box_header'>Вход</p>
                        <p className='login_box_text'>Почта</p>
                        <input name='email' className='login_input' />
                        <p className='login_box_text'>Пароль</p>
                        <input name='password' className='login_input' type='password' />
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <button className='login_button'>Войти</button>
                            <Link to='/register' className='login_button'>Регистрация</Link>
                        </div>
                    </form>
                </div>
            </div>
        );

    }

}

export default Login;
