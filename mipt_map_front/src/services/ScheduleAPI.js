import {baseURL} from './BaseURL';

export const getSchedule = ()=>{
    return fetch(baseURL + 'get_all/')
        .then(data=>data.json());
};

export const create = (data)=>{
    return fetch(baseURL + 'create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
};

export const drop = id=>{
    return fetch(baseURL + `drop/${id}`, {method: 'DELETE'});
};
