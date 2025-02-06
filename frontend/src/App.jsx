import { useState } from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage,SignupPage } from './routes/Routes' 

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
}

export default App;
