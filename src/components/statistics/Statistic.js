import React from "react";
import PropTypes from "prop-types";
import styles from './Statistics.module.css';

const Statistic = ({ label, percentage }) => {
  const randomColor = () => {
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let random3 = Math.round(Math.random() * 255);
    return `rgb(${random1}, ${random2}, ${random3})`;
  };

  return (
    <li
    className={styles.item}
    style={{
      backgroundColor:randomColor(),
    }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

Statistic.defaultProps = {
  percentage: 0,
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};

export default Statistic;
