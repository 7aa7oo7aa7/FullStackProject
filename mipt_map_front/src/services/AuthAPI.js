import {baseURL} from './BaseURL';

export const login = (data)=>{
    return fetch(baseURL + 'auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(data=>data.json());
};

export const register = (data)=>{
    return fetch(baseURL + 'auth/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
        .then(data=>data.json());
};

export const refresh = (token)=>{
    return fetch(baseURL + 'auth/refresh/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(token)
    })
        .then(data=>data.json());
}

export const userQuery = (id, token)=>{
    return fetch(baseURL + `user/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(data=>data.json());
}
