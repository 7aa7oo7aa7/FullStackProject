import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';  // v6
import Header from '../components/Header';
import {getSchedule, create} from '../services/ScheduleAPI';
import {userQuery, refresh} from '../services/AuthAPI';
import ScheduleItemGroup from '../components/ScheduleItemGroup';
import AddScheduleItem from '../components/AddScheduleItem';

function Schedule({user, setUser}) {

    const [state, setState] = useState({
        week_day: "0",
        pair_number: "0",
        building_id: "0",
        floor_id: "0",
        classroom_id: "0"
    });

    const [schedule, setSchedule] = useState({items: []});
    
    useEffect(()=>{
        getSchedule().then(data=>{
            data.sort((a, b)=>{
                if (a.week_day === b.week_day) {
                    return a.pair_number - b.pair_number;
                }
                return a.week_day - b.week_day;
            });
            setSchedule({items: data});
        });
    }, []);

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

        const updateState = (index, new_value)=>{
            let new_state = {...state};
            new_state[index] = new_value;
            if (index === 'building_id') {
                new_state['floor_id'] = '0';
                new_state['classroom_id'] = '0';
                document.getElementById('choose_floor').value = 0;
                document.getElementById('choose_classroom').value = 0;
            } else if (index === 'floor_id') {
                new_state['classroom_id'] = 0;
                document.getElementById('choose_classroom').value = 0;
            }
            setState(()=>new_state);
        };
    
        let building_id = Number(state['building_id']);
        let floor_id = Number(state['floor_id']);
    
        const submitForm = e=>{
            e.preventDefault();
            const subjectName = new FormData(e.target);
            const formData = Object.assign({}, Object.fromEntries(subjectName), state);
            if (formData.week_day > '0' && formData.pair_number > '0' 
                && formData.building_id > '0' && formData.floor_id > '0' && formData.classroom_id > '0') {
                create(formData)
                    .then(()=>{window.location.reload()});
            }
        }
    
        return (
            <div>
                <Header buttons={['profile', 'back_arrow']} />
                <ScheduleItemGroup items={schedule.items} />
                <AddScheduleItem building_id={building_id} floor_id={floor_id} updateState={updateState} submitForm={submitForm} />
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

export default Schedule;
