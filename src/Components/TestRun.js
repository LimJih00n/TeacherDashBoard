import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';  // Ensure Axios is imported if you're using it

function TestRun() {
  const { stage, dev } = useParams(); // Retrieve parameters from the URL
  const [iframeSrc, setIframeSrc] = useState('');

  const ENDPOINT = "http://localhost:4000";

  function onRunClick() {
    Axios.post(
      `${ENDPOINT}/compile/${stage}/${dev}`,
      { initcode: "#initCode", loopcode: "#loopCode" } // Make sure initCode and loopCode are defined
    ).then(res => {
      console.log(res);
      setIframeSrc(res.data); // Assuming the response has the URL in res.data
    }).catch(err => {
      console.error('Error:', err);
    });
  }

  return (
    <div>
      <button onClick={onRunClick}>Load Iframe</button>
      <iframe
        title="Server Content"
        src={iframeSrc}
        width="100%"
        height="500px"
      >
        Your browser does not support iframes.
      </iframe>
    </div>
  );
}

export default TestRun;
