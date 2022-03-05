import React from 'react';
import ChooseItem from '../components/ChooseItem';
import GetData from '../components/GetData';
import '../style/add_schedule_item.css';

function AddScheduleItem({building_id, floor_id, updateState, submitForm}) {
    return (
        <div className='add_schedule_item_box'>
            <p className='add_schedule_item_box_header'>Добавить предмет</p>
            <form onSubmit={submitForm}>
                <div>
                    <p className='add_schedule_item_box_text'>Название предмета</p>
                    <input name='subject_name' className='add_schedule_item_input' />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <ChooseItem id='choose_week_day' items={GetData('week_day')} index={'week_day'} updateState={updateState} />
                        <ChooseItem id='choose_pair_number' items={GetData('pair_number')} index={'pair_number'} updateState={updateState} />
                        <ChooseItem id='choose_building' items={GetData('building')} index={'building_id'} updateState={updateState} />
                        <ChooseItem id='choose_floor' items={GetData('floor')[building_id]} index={'floor_id'} updateState={updateState} />
                        <ChooseItem id='choose_classroom' items={GetData('classroom')[building_id][floor_id]} index={'classroom_id'} updateState={updateState} />
                    </div>
                </div>
                <button className='add_schedule_item_button'>Добавить</button>
            </form>
        </div>
    );
}

export default AddScheduleItem;
