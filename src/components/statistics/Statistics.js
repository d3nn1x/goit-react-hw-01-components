import React from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

import Statistic from "./Statistic";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((el) => {
          return <Statistic key={el.id} label={el.label} percentage={el.percentage} />;
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};

export default Statistics;
