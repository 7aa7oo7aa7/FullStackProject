import React, {useState} from 'react';
import {Link} from 'react-router-dom';  // v6
import Header from '../components/Header';
import {userQuery, refresh} from '../services/AuthAPI';
import '../style/profile.css';

function Profile({user, setUser}) {

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
        }
    
        return (
            <div>
                <Header buttons={['schedule', 'back_arrow']} />
                <div className='profile_box'>
                    <p className='profile_box_header'>Профиль</p>
                    <p className='profile_box_text'>{user['user']['user'].username}</p>
                    <p className='profile_box_text'>{user['user']['user'].email}</p>
                    <button className='auth_button' onClick={logout}>Выйти</button>
                </div>
            </div>
        );

    } else {

        return (
            <div>
                <Header buttons={['back_arrow']} />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Link to='/login' className='auth_button'>Войти</Link>
                </div>
            </div>
        );

    }

}

export default Profile;
