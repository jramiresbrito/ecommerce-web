import React from 'react';
import styles from '../../../../styles/AdminTitle.module.css';

interface TitleAndPath {
  title: string;
  path: string;
}

const TitleAndPath: React.FC<TitleAndPath> = ({ title, path }) => {
  return (
    <>
      <h4>{title}</h4>
      <span className={styles.styledPath}>{path}</span>
    </>
  );
};

export default TitleAndPath;
