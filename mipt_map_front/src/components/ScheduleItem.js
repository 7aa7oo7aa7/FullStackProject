import React from 'react';
import {Link} from 'react-router-dom';  // v6
import {drop} from '../services/ScheduleAPI';
import GetData from '../components/GetData';
import '../style/schedule_item.css'

function ScheduleItem({data}) {

    const getWeekDayAndTime = (week_day_number, pair_number)=>{
        const week_day = GetData('week_day')[Number(week_day_number)].value;
        const pair_time = GetData('pair_number')[Number(pair_number)].value;
        return week_day + ', пара №' + pair_time;
    };

    const getClassroom = (building_id, floor_id, classroom_id)=>{
        const building = GetData('building_short')[Number(building_id)].value;
        const floor = GetData('floor')[Number(building_id)][Number(floor_id)].value;
        const classroom = GetData('classroom')[Number(building_id)][Number(floor_id)][Number(classroom_id)].value;
        return classroom + ' ' + building + ' (' + floor + ' этаж)';
    }

    const map_state = {
        building_id: data['building_id'], 
        floor_id: data['floor_id'], 
        classroom_id: data['classroom_id']
    };

    const deleteClickHandler = e=>{
        e.preventDefault();
        drop(data.id)
            .then(()=>{window.location.reload()});
    }

    return (
        <div>
            <div className='schedule_item'>
                <Link to={'/'} state={map_state}>
                    <p className='schedule_item_header'>{data['subject_name']}</p>
                </Link>
                <p className='schedule_item_text'>{getWeekDayAndTime(data['week_day'], data['pair_number'])}</p>
                <p className='schedule_item_text'>{getClassroom(data['building_id'], data['floor_id'], data['classroom_id'])}</p>
                <button className='delete_button' onClick={deleteClickHandler}>Удалить</button>
            </div>
        </div>
    );
}

export default ScheduleItem;