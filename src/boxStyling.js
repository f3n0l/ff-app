// boxStyling.js
import React from 'react';
import './boxStyling.css'; // Import your CSS for styling here

const StylingComponent = ({ children }) => {
    return <div className="ff7-box">{children}</div>;
};

export default StylingComponent;
