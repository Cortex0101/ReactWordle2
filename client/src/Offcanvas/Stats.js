// React-related imports
import React, { useContext, useEffect, useState } from "react";
import { Offcanvas, Collapse, Tabs, Tab, Table, Dropdown, DropdownButton, Button } from "react-bootstrap";

// External libraries
import { useTranslation } from "react-i18next";

// Internal context providers (like global app contexts)
import { MenuContext } from "../contexts/MenuContext";
import { UserContext } from "../contexts/UserContext";

import StatisticsGrid from "../components/StatisticsGrid";
import GuessDistribution from "../components/GuessDistribution";
import RatingSlider from "../components/RatingSlider";
import SignedInBanner from "../components/SignedInBanner";

const PersonalStats = () => {
  const { t } = useTranslation();

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true)

  return (
    <>
      <SignedInBanner fullName="Lucas Eiruff" userName={"Cortex0101"} joinedDate="05-10-2024" imageURL="https://lh3.googleusercontent.com/a/ACg8ocI2kmPBsLxmg6HbgMAilpWk9Ieg-2KIxVNwlkz2MM55Xk526A=s96-c" />
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
    </>
  )
}

const GlobalStats = () => {
  const [players, setPlayers] = useState([]); // Player data
  const [sortKey, setSortKey] = useState('rating'); // Default sort by rating
  const [sortOrder, setSortOrder] = useState('desc'); // Default descending order
  const [page, setPage] = useState(1); // Pagination

  // Simulated data fetch (replace with your API call)
  const fetchPlayers = async (page, sortKey, sortOrder) => {
    // Fake data fetch
    const response = await fetch(`/api/players?page=${page}&sort=${sortKey}&order=${sortOrder}`);
    const data = await response.json();
    return data.players;
  };

  // Fetch and load players when component mounts or when page, sortKey, or sortOrder changes
  useEffect(() => {
    const loadPlayers = async () => {
      const newPlayers = await fetchPlayers(page, sortKey, sortOrder);
      setPlayers(prev => [...prev, ...newPlayers]); // Append new players to the list
    };
    loadPlayers();
  }, [page, sortKey, sortOrder]);

  // Handle sorting selection from dropdown
  const handleSortChange = (key) => {
    setSortKey(key);
    setSortOrder('desc'); // Reset to descending by default
    setPlayers([]); // Clear the table for new sorted data
    setPage(1); // Reset page for the new sorted list
  };

  // Load more players (lazy loading)
  const loadMorePlayers = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {/* Sorting Dropdown */}
      <DropdownButton id="dropdown-basic-button" title="Sort by" className="mb-3">
        <Dropdown.Item onClick={() => handleSortChange('games')}>Most Games</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortChange('avgGuesses')}>Lowest Avg. Guesses</Dropdown.Item>
        <Dropdown.Item onClick={() => handleSortChange('rating')}>Highest Rating</Dropdown.Item>
      </DropdownButton>

      {/* Players Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Games</th>
            <th>Avg. Guesses</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.games}</td>
              <td>{player.avgGuesses}</td>
              <td>{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Load More Button */}
      <div className="d-flex justify-content-center">
        <Button onClick={loadMorePlayers}>Load More</Button>
      </div>
    </div>
  );
}

const Stats = () => {
  const { t } = useTranslation();

  const { toggleStatsOpen, statsOpen } = useContext(MenuContext);
  const { user } = useContext(UserContext);

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
            <PersonalStats />
          </Tab>
          <Tab eventKey="global" title={t('modals.statistics.tabs.global.title')} className="p-3">
            <GlobalStats />
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