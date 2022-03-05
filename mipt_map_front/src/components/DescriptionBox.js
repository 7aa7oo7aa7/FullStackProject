import React from 'react';
import '../style/description_box.css'

function DescriptionBox({classroom}) {
    return (
        <div className='description_box'>
            <p className='description_box_header'>Описание</p>
            <p className='description_box_text'>{classroom.desc}</p>
        </div>
    );
}

export default DescriptionBox;
