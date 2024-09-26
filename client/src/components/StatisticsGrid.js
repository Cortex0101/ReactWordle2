// React-related imports
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import StatisticsBox from "./StatisticsBox";

// Internal styles
import "./StatisticsGrid.css";

import { UserContext } from "../contexts/UserContext";

import { useTranslation } from "react-i18next";

/* 
Renders a 3x2 grid of statistics boxes on extra-small to large screens
and 1x6 grid on extra-large screens
*/
const StatisticsGrid = () => {
    const { t } = useTranslation();

    const { generalStatistics } = useContext(UserContext);

    return (
        <Container className="statistics-grid">
            <Row>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.gamesPlayed} description={t('modals.statistics.general-statistics.gamesPlayed')} />
                </Col>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.winPercentage} description={t('modals.statistics.general-statistics.winPercentage')} />
                </Col>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.averageGuesses} description={t('modals.statistics.general-statistics.averageGuesses')} />
                </Col>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.currentStreak} description={t('modals.statistics.general-statistics.currentStreak')} />
                </Col>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.bestStreak} description={t('modals.statistics.general-statistics.bestStreak')} />
                </Col>
                <Col xs={4} lg={2} className="statistics-grid__col">
                    <StatisticsBox statistic={generalStatistics.daysInRow} description={t('modals.statistics.general-statistics.daysInRow')} />
                </Col>
            </Row>
        </Container>
    );
}

export default StatisticsGrid;