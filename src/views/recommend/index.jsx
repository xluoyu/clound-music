import React, { memo, useRef } from 'react';
import {WingBlank, WhiteSpace} from 'antd-mobile';
import Swiper from '@/components/swiper';
import Scroll from '@/components/scroll';
import Recommend from '@/components/list';
import * as actionTypes from './store/actionCreators';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loading from '@/components/loading';
import { useState } from 'react';

const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  homePage: state.getIn(['recommend', 'homePage']),
  number: state.getIn(['recommend', 'number'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getHomePageDispatch() {
      dispatch(actionTypes.getRecommend())
    },
    setNumberDispatch(data) {
      dispatch(actionTypes.changeNumber(data))
    }
  }
}

const index = memo((props) => {
  const {bannerList, homePage, number} = props
  const {getBannerDispatch, getHomePageDispatch, setNumberDispatch} = props
  const scrollEl = useRef()
  const [loading, setLoading] = useState(true)
  const pullUp = () => {
    setNumberDispatch(number + 1)
    getHomePageDispatch()
  }
  const pullDown = () => {
    console.log('下拉')
  }
  useEffect(() => {
    getBannerDispatch();
    getHomePageDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const homeDataJS = homePage ? homePage.toJS() : []
  if (homeDataJS.length && loading) {
    setLoading(false)
  }
  
  return (
    <Scroll ref={scrollEl}
      pullUp={pullUp}
      pullDown={pullDown}
    >
      <WingBlank>
        {loading && <Loading></Loading>}
        <WhiteSpace size="lg"/>
        {bannerListJS.length ? <Swiper id="homeSwiper" bannerList={bannerListJS}></Swiper> : ''}
        <Recommend list={homeDataJS}></Recommend>
      </WingBlank>
    </Scroll>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);