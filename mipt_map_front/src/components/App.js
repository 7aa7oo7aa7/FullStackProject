import React from 'react';
import {Route, Routes} from 'react-router-dom';  // v6
import {useCookies} from 'react-cookie';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Schedule from '../pages/Schedule'
import NotFound from '../pages/NotFound'

function App() {
    
    const [user, setUser] = useCookies(["user"]);
    if (user['user'] === undefined) {
        setUser("user", null, {path: '/'});
        window.location.reload();
    }

    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} />} />
                <Route path='/register' element={<Register user={user} setUser={setUser} />} />
                <Route path='/profile' element={<Profile user={user} setUser={setUser} />} />
                <Route path='/schedule' element={<Schedule user={user} setUser={setUser} />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
