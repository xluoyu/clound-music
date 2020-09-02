import React, { memo } from 'react';
import {Carousel} from 'antd-mobile';
import style from './style.module.less';

const index = memo((props) => {
  const { bannerList } = props
  return (
    <Carousel
      autoplay={true}
      infinite
      
    >
      {
        bannerList.map((item, index) => {
          return (
            <a href="http://www.alipay.com" key={index} className={style.slide}>
              <img src={item.imageUrl} alt=""/>
            </a>
          )
        })
      }
    </Carousel>
  );
});

export default index;