import * as actionTypes from './constants'
import {fromJS} from 'immutable'
import {getBannerRequest, getRecommendRequest} from '@/api/api'

export const changeBannerList = (data) => ({
  type: actionTypes.BANNER,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners))
    }).catch(() => {
      console.error('获取轮播图失败')
    })
  }
}

export const changeRecommend = (data) => ({
  type: actionTypes.RECOMMEND_HOME,
  data: fromJS(data)
})

export const getRecommend = () => {
  return (dispatch, getState) => {
    let number = getState().getIn(['recommend', 'number'])
    getRecommendRequest(number).then(data => {
      dispatch(changeRecommend(data.result))
    }).catch(() => {
      console.error('获取首页数据失败')
    })
  }
}

export const changeNumber = (data) => ({
  type: actionTypes.RECOMMEND_NUMBER,
  data: data
})