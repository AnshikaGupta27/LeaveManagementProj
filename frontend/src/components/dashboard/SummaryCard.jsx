import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({icon, text, number, color}) => {
    return (
        <div className="summary-card">
            <div className={`summary-icon ${color}`}>
                {icon}
            </div>
            <div className="summary-content">
                <p className="summary-text">{text}</p>
                <p className="summary-number">{number}</p>
            </div>
        </div>
    );
};

export default SummaryCard;
