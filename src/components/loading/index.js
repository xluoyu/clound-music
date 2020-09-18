import React from 'react';
import style from './style.module.less';

const loading = () => {
  return (
    <div className={style.loading}>
      <div></div>
      <div></div>
    </div>
  );
};

export default loading;