import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import QuestionComponent from './QuestionComponent';

function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/questions" element={<QuestionComponent />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default RouterComponent;