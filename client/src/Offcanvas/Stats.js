// React-related imports
import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";

// TEMP REMOVE AND RENDER ON A STATISTICS COMPONENT THAT RENDER 6 STATS
import StatisticsBox from "../components/StatisticsBox";

import StatisticsGrid from "../components/StatisticsGrid";


const Stats = () => {
    const { t } = useTranslation();

    const toggleStatsOpen = useContext(MenuContext).toggleStatsOpen;
    const statsOpen = useContext(MenuContext).statsOpen;

  return (
    <Offcanvas show={statsOpen} onHide={toggleStatsOpen} placement='bottom' className='h-100'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('modals.statistics.title')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="text-center">{t('modals.statistics.general-statistics.title')}</h3>
          <StatisticsGrid />
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Stats;