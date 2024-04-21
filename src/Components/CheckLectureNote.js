import React from 'react';
import './CheckLectureNote.css';

function CheckLectureNote() {
  
  const handleBoxClick = (index) => {
    // You can handle the click event here
    // For example, you might want to navigate to a new page, or open a modal, etc.
    console.log(`Box ${index + 1} clicked!`);
  };

  return (
    <div className="lecture-notes-container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div 
          key={index} 
          className="note-box"
          onClick={() => handleBoxClick(index)} // Attaching the click handler
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
}

export default CheckLectureNote;
