import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// Components
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container">
                    <Routes>
                        <Route exact path="/" element={ <HomeScreen /> }/>
                        <Route exact path="/login" element={ <LoginScreen /> }/>
                        <Route exact path="/about" element={ <AboutScreen /> }/>
                        <Route path="*" element={ <Navigate replace to="/" /> }/>
                    </Routes>
                </div>

            </div>
        </Router>
    )
}
