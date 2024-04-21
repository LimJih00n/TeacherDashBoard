import React, { useState, useEffect } from 'react';
import './MainBoard.css';
import Container from 'react-bootstrap/Container';
import DashBoardSideBar from './DashBoardSideBar'
import DashBoardNavBar from './DashBoardNavBar'
import DashBoardMainFrame from './DashBoardMainFrame'

function MainBoard() {

    const [activeComponent, setActiveComponent] = useState('profile');

    return(
        <div className='main-board'>
            <Container>
                <div className='nav'>
                    <DashBoardNavBar/>
                </div>
                <div className='body'>
                    <div className='left-container'>
                        <DashBoardSideBar setActiveComponent={setActiveComponent}/>
                    </div>
                    <div className='right-container'>
                        <DashBoardMainFrame activeComponent={activeComponent}/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default MainBoard;