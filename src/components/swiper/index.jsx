import React, { memo } from 'react';
import {Carousel} from 'antd-mobile';
import style from './style.module.less';
import LazyLoad from 'react-lazyload';

const dotStyle = {
  zoom: 1.5,
  background: 'rgba(240,240,240,.6)'
}
const dotActiveStyle = {
  zoom: 1.5,
  background: '#C20C0C'
}

const index = memo((props) => {
  const { bannerList } = props
  return (
    <Carousel
      autoplay={false}
      infinite
      dotStyle={dotStyle}
      dotActiveStyle={dotActiveStyle}
      cellSpacing={10}
    >
      {
        bannerList.map((item, index) => {
          return (
            <a href="/" key={index} className={style.slide}>
              {/* <LazyLoad placeholder={<img src={require('@/assets/music.png')} alt=""/>}> */}
                <img src={item.imageUrl} alt=""/>
              {/* </LazyLoad> */}
            </a>
          )
        })
      }
    </Carousel>
  );
});

export default index;