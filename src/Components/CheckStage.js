import React, { useState } from 'react';
import './CheckStage.css';
import {Link} from 'react-router-dom';

function CheckStage() {
    const [expandedStages, setExpandedStages] = useState({});

    const toggleStage = (stage) => {
        setExpandedStages(prev => ({
            ...prev,
            [stage]: !prev[stage]
        }));
    };

    return (
        <div className="container">
            {Array.from({ length: 4 }, (_, i) => (
                <div key={i}>
                    <button className="stage-toggle" onClick={() => toggleStage(`stage${i+1}`)}>
                        Stage {i + 1}
                    </button>
                    {expandedStages[`stage${i+1}`] && (
                        <ul>
                            {Array.from({ length: 6 }, (_, j) => (
                                // In CheckStage.js inside the render map:
                                <Link to={`/compiler/${i+1}/${j+1}`}><li key={j}>Dev {j + 1}</li></Link>

                                
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

export default CheckStage;
