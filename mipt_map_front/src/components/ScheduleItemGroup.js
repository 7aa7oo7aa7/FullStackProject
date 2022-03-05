import React from 'react';
import ScheduleItem from '../components/ScheduleItem';
import '../style/schedule_item.css'

function ScheduleItemGroup({items}) {

    return (
        <div>
            <p className='schedule_header'>Расписание</p>
            <div className='schedule_item_group'>
                {items.map(item=>{
                    return <ScheduleItem key={item.id} data={item} />
                })}
            </div>
        </div>
    );
}

export default ScheduleItemGroup;