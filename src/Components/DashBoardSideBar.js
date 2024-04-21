import './DashBoardSideBar.css';
import { TfiAgenda } from "react-icons/tfi";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { BsDoorOpen } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBroom } from "react-icons/fa";


function DashBoardSideBar({setActiveComponent}){
    return (
        <div className="sidebar">    
            <div className="sidebarWrapper">
                <h6 className="sidebarTitle" >DASH</h6>
                
                <div className='sidebar-content' onClick={() => setActiveComponent('profile')}>
                    프로필
                    <div className="sidebarIcon" >
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 10, hide: 40 }}
                            overlay={<Tooltip id="agenda-tooltip">Class</Tooltip>}
                        >
                            <button style={{ background: "transparent", border: "none" }}>
                                <CgProfile size="25" color= "#00f224"/>
                            </button>
                        </OverlayTrigger>
                    </div>
                </div>

                <div className='sidebar-content' onClick={() => setActiveComponent('myClass')}>
                    나의 반
                    <div className="sidebarIcon" >
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 10, hide: 40 }}
                            overlay={<Tooltip id="settings-tooltip">Coding</Tooltip>}
                        >
                            <button style={{ background: "transparent", border: "none" }}>
                                <BsDoorOpen size="25" color= "#00f224"/>
                            </button>
                        </OverlayTrigger>
                    </div>
                </div>

                <div className='sidebar-content' onClick={() => setActiveComponent('checkLectureNote')}>
                    자료확인
                <div className="sidebarIcon" >
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 10, hide: 40 }}
                        overlay={<Tooltip id="settings-tooltip">Coding</Tooltip>}
                    >
                        <button style={{ background: "transparent", border: "none" }}>
                            <TfiAgenda size="25" color= "#00f224"/>
                        </button>
                    </OverlayTrigger>
                </div>
                </div>
                <div className='sidebar-content'  onClick={() => setActiveComponent('checkStage')}>
                    Stage 확인
                    <div className="sidebarIcon">
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 10, hide: 40 }}
                            overlay={<Tooltip id="settings-tooltip">Coding</Tooltip>}
                        >
                            <button style={{ background: "transparent", border: "none" }}>
                                <FaBroom size="25" color= "#00f224"/>
                            </button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoardSideBar