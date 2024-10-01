// React-related imports
import React, { useContext, useEffect, useState } from "react";
import { Offcanvas, Collapse, Carousel, Tabs, Tab } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";

import StatisticsGrid from "../components/StatisticsGrid";
import GuessDistribution from "../components/GuessDistribution";
import RatingSlider from "../components/RatingSlider";

const Stats = () => {
  const { t } = useTranslation();

  const { toggleStatsOpen, statsOpen } = useContext(MenuContext);

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true)

  return (
    <Offcanvas show={statsOpen} onHide={toggleStatsOpen} placement='bottom' className='h-100'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{t('modals.statistics.title')}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-0 py-0">
      <Tabs
      defaultActiveKey="personal"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="personal" title={t('modals.statistics.tabs.personal.title')} className="p-3">
      <h3 className="text-center" onClick={() => setOpen1(!open1)}>{t('modals.statistics.rating.title')}</h3>
        <Collapse in={open1}>
          <div>
            <RatingSlider rating={85} />
          </div>
        </Collapse>
        <h3 className="text-center" onClick={() => setOpen2(!open2)}>{t('modals.statistics.general-statistics.title')}</h3>
        <Collapse in={open2}>
        <div>
          <StatisticsGrid />
        </div>
        </Collapse>
        <h3 className="text-center" onClick={() => setOpen3(!open3)}>{t('modals.statistics.guess-distribution.title')}</h3>
        <Collapse in={open3} appear={false}>
        <div>
          <GuessDistribution />
        </div>
        </Collapse>
      </Tab>
      <Tab eventKey="global" title={t('modals.statistics.tabs.global.title')} className="p-3">
        Tab content for Profile
      </Tab>
    </Tabs>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Stats;

/*
<Offcanvas.Header closeButton>
        <Offcanvas.Title>{t('modals.statistics.title')}</Offcanvas.Title>
      </Offcanvas.Header>
*/