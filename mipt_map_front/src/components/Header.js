import React from 'react';
import {Link} from 'react-router-dom';  // v6

import '../style/header.css'
import miptlogo from '../icons/miptlogo.png'
import schedule from '../icons/schedule.png'
import profile from '../icons/profile.png'
import back_arrow from '../icons/back_arrow.png'

function Header({buttons}) {

    const img_names = {
        'schedule': schedule,
        'profile': profile,
        'back_arrow': back_arrow
    };

    const btn_text = {
        'schedule': 'Расписание',
        'profile': 'Профиль',
        'back_arrow': 'На главную'
    };

    const btn_links = {
        'schedule': '/schedule',
        'profile': '/profile',
        'back_arrow': '/'
    }

    return (
        <div className='header'>
            <Link to='/' style={{display: 'flex'}}>
                <img src={miptlogo} className='header_miptlogo' alt='Физтех.Карта' />
                <h1 className='header_text'>Физтех.Карта</h1>
            </Link>
            
            <p className='header_right_invisible'></p>
            
            {buttons.map(btn=>[
                <Link to={btn_links[btn]} style={{display: 'flex'}}>
                    <img className='header_right_img' src={img_names[btn]} alt={btn_text[btn]} />,
                    <p className='header_right_text'>{btn_text[btn]}</p>
                </Link>
            ]
            )}
        </div>
    );
}

export default Header;
