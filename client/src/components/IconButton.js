import React from "react";
import './IconButton.css';

// Import individual SVG icons
import questionCircle from '../icons/question-circle.svg';
import barChart from '../icons/bar-chart.svg';
import gear from '../icons/gear.svg';
import list from '../icons/list.svg';
import personCircle from '../icons/person-circle.svg';

const IconButton = ({ icon, variant, handleClick }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'question-circle':
        return <img src={questionCircle} alt="Question Circle" className="icon-img" width={16} height={16} />;
      case 'bar-chart':
        return <img src={barChart} alt="Bar Chart" className="icon-img" width={16} height={16} />;
      case 'gear':
        return <img src={gear} alt="Gear" className="icon-img" width={16} height={16} />;
      case 'list':
        return <img src={list} alt="List" className="icon-img" width={16} height={16} />;
      case 'person-circle':
        return <img src={personCircle} alt="Person Circle" className="icon-img" width={16} height={16} />;
      default:
        return null;
    }
  };

  return (
    <button className={`btn btn-${variant}`} onClick={handleClick}>
        {renderIcon()}
    </button>
  );
};

export default IconButton;
