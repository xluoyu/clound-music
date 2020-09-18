import React from 'react';
import styles from './style.module.less'

const index = (props, index) => {
  const clickItem = () => {
    console.log('点击了')
    console.log(index)
  }
  return (
    <div className={styles.item} key={index} onClick={() => {clickItem()}}>
      <img src={props.picUrl} alt=""/>
      <div className={styles.playCount}>
        <i className=""></i>
        <span className={styles.count}>{props.playCount}</span>
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default index;