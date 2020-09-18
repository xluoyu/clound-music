import {Get} from './config'

export const getBannerRequest = () => {
  return Get('/banner')
}

export const getRecommendRequest = (number) => {
  let params = {
    limit: 30 * number
  }
  return Get('/personalized', params)
}