import React, { memo } from 'react';
import styles from './index.module.less';
import Swiper from '@/components/swiper';
import {WingBlank} from 'antd-mobile';

const index = memo((props) => {
  const bannerList = [1,2,3,4].map (item => {
    return { imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg" }
  });
  return (
    <div className='main'>
      <div className={styles.headerBg}></div>
      <WingBlank size="lg">
        <Swiper id="homeSwiper" bannerList={bannerList}></Swiper>
      </WingBlank>
    </div>
  );
});

export default index;