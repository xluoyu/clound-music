import * as actionTypes from './constants'
import {fromJS} from 'immutable'

const defaultState = fromJS({
  bannerList: [],
  homePage: [],
  number: 1,
  loadStatus: false // 0 => 没有更多数据，1=> 加载中
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.BANNER:
      return state.set('bannerList', action.data);
    case actionTypes.RECOMMEND_HOME:
      return state.set('homePage', action.data);
    case actionTypes.RECOMMEND_NUMBER:
      return state.set('number', action.data);
    default:
      return state;
  }
}