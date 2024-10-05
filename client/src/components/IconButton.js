import React from "react";
import './IconButton.css';

import { Image } from "react-bootstrap";

import { BiHelpCircle } from "react-icons/bi";
import { FaChartBar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const IconButton = ({ icon, variant, handleClick }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'question-circle':
        return <BiHelpCircle />;
      case 'bar-chart':
        return <FaChartBar />;
      case 'gear':
        return <CiSettings />;
      case 'list':
        return <FaList />;
      case 'person-circle':
        return <IoPersonCircleOutline />;
      default:
        return <Image src={icon} width={20} height={20} roundedCircle />;
    }
  };

  return (
    <button className={`btn btn-${variant}`} onClick={handleClick}>
        {renderIcon()}
    </button>
  );
};

export default IconButton;
