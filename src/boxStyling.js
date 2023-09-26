// boxStyling.js
import React from 'react';
import './boxStyling.css';

const StylingComponent = ({ children }) => {
    return <div className="ff7-box">{children}</div>;
};

export default StylingComponent;
