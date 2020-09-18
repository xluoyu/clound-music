import React, { memo } from 'react';
import styles from './style.module.less';

const index = memo((props) => {

  const clickItem = (item) => {
    console.log(item)
  }

  return (
      <div className={styles.musicBox}>
        <h2 className={styles.title}>推荐歌单</h2>
        <div className={styles.listWrapper}>
          {
            props.list.map((item, index) => {
              return (
                <div className={styles.item} key={index} onClick={() => {clickItem(item)}}>
                  <img src={item.picUrl} alt=""/>
                  <div className={styles.playCount}>
                    <i className=""></i>
                    <span className={styles.count}>{item.playCount}</span>
                  </div>
                  <p>{item.name}</p>
                </div>
              )
            })
          }
        </div>
      </div>
  );
});

export default index;