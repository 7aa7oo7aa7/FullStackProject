import React from 'react';
import '../style/map_element.css'
import map_0_0_0 from '../maps/map_0_0_0.png'
import map_1_2_0 from '../maps/map_1_2_0.png'
import map_2_2_0 from '../maps/map_2_2_0.png'
import map_2_2_1 from '../maps/map_2_2_1.png'
import map_2_2_2 from '../maps/map_2_2_2.png'
import map_2_2_3 from '../maps/map_2_2_3.png'
import map_2_2_4 from '../maps/map_2_2_4.png'
import map_2_2_5 from '../maps/map_2_2_5.png'
import map_2_2_6 from '../maps/map_2_2_6.png'
import map_2_2_7 from '../maps/map_2_2_7.png'
import map_2_2_8 from '../maps/map_2_2_8.png'
import map_2_2_9 from '../maps/map_2_2_9.png'
import map_2_2_10 from '../maps/map_2_2_10.png'
import map_2_2_11 from '../maps/map_2_2_11.png'
import map_2_2_12 from '../maps/map_2_2_12.png'
import map_2_2_13 from '../maps/map_2_2_13.png'
import map_2_2_14 from '../maps/map_2_2_14.png'
import map_2_2_15 from '../maps/map_2_2_15.png'
import map_2_2_16 from '../maps/map_2_2_16.png'
import map_2_2_17 from '../maps/map_2_2_17.png'
import map_2_2_18 from '../maps/map_2_2_18.png'
import map_2_2_19 from '../maps/map_2_2_19.png'
import map_2_2_20 from '../maps/map_2_2_20.png'
import map_2_3_0 from '../maps/map_2_3_0.png'
import map_2_4_0 from '../maps/map_2_4_0.png'
import map_5_2_0 from '../maps/map_5_2_0.png'

function MapElement({state}) {

    const map_names = {
        'map_0_0_0': map_0_0_0,
        'map_1_2_0': map_1_2_0,
        'map_2_2_0': map_2_2_0,
        'map_2_2_1': map_2_2_1,
        'map_2_2_2': map_2_2_2,
        'map_2_2_3': map_2_2_3,
        'map_2_2_4': map_2_2_4,
        'map_2_2_5': map_2_2_5,
        'map_2_2_6': map_2_2_6,
        'map_2_2_7': map_2_2_7,
        'map_2_2_8': map_2_2_8,
        'map_2_2_9': map_2_2_9,
        'map_2_2_10': map_2_2_10,
        'map_2_2_11': map_2_2_11,
        'map_2_2_12': map_2_2_12,
        'map_2_2_13': map_2_2_13,
        'map_2_2_14': map_2_2_14,
        'map_2_2_15': map_2_2_15,
        'map_2_2_16': map_2_2_16,
        'map_2_2_17': map_2_2_17,
        'map_2_2_18': map_2_2_18,
        'map_2_2_19': map_2_2_19,
        'map_2_2_20': map_2_2_20,
        'map_2_3_0': map_2_3_0,
        'map_2_4_0': map_2_4_0,
        'map_5_2_0': map_5_2_0
    };

    let map_name = 'map_' + state['building_id'] + '_' + state['floor_id'] + '_' + state['classroom_id'];

    if (!map_names[map_name]) {
        return null;
    }

    return (
        <img className='map_element' src={map_names[map_name]} alt={'Карта'} />
    );
}

export default MapElement;
