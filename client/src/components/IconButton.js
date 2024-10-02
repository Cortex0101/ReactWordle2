import React from "react";
import './IconButton.css';

// Import individual SVG icons
import { ReactComponent as QuestionCircle } from '../icons/question-circle.svg';
import { ReactComponent as BarChart } from '../icons/bar-chart.svg';
import { ReactComponent as Gear } from '../icons/gear.svg';
import { ReactComponent as List } from '../icons/list.svg';
import { ReactComponent as PersonCircle } from '../icons/person-circle.svg';

const IconButton = ({ icon, variant, handleClick }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'question-circle':
        return <QuestionCircle />;
      case 'bar-chart':
        return <BarChart />;
      case 'gear':
        return <Gear />;
      case 'list':
        return <List />;
      case 'person-circle':
        return <PersonCircle />;
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
