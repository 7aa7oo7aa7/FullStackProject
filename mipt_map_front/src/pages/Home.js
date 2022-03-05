import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';  // v6
import Header from '../components/Header';
import ChooseItem from '../components/ChooseItem';
import DescriptionBox from '../components/DescriptionBox';
import MapElement from '../components/MapElement';
import GetData from '../components/GetData';

function Home() {

    let initial_state = null;
    const default_state = {building_id: "0", floor_id: "0", classroom_id: "0"};

    const location = useLocation();
    if (location.state === null) {
        initial_state = default_state;
    } else {
        initial_state = {...location.state};
    }

    const [state, setState] = useState(initial_state);

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
    let classroom_id = Number(state['classroom_id']);

    return (
        <div>
            <Header buttons={['schedule', 'profile']} />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <ChooseItem id='choose_building' items={GetData('building')} index={'building_id'} updateState={updateState} default_item={building_id} />
                    <ChooseItem id='choose_floor' items={GetData('floor')[building_id]} index={'floor_id'} updateState={updateState} default_item={floor_id} />
                    <ChooseItem id='choose_classroom' items={GetData('classroom')[building_id][floor_id]} index={'classroom_id'} updateState={updateState} default_item={classroom_id} />
                </div>
                <DescriptionBox classroom={GetData('classroom')[building_id][floor_id][classroom_id]} />
            </div>
            <MapElement state={state} />
        </div>
    );
}

export default Home;
