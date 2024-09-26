// React-related imports
import React, { useContext } from "react";
import { Offcanvas } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";

import StatisticsGrid from "../components/StatisticsGrid";
import GuessDistribution from "../components/GuessDistribution";

const Stats = () => {
    const { t } = useTranslation();

    const { toggleStatsOpen, statsOpen } = useContext(MenuContext);

  return (
    <Offcanvas show={statsOpen} onHide={toggleStatsOpen} placement='bottom' className='h-100'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('modals.statistics.title')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3 className="text-center">{t('modals.statistics.general-statistics.title')}</h3>
          <StatisticsGrid />
          <h3 className="text-center">{t('modals.statistics.guess-distribution.title')}</h3>
          <GuessDistribution />
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default Stats;