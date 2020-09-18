import React, { memo, useEffect } from 'react';
import ListView from '@/components/listView';
import ListItem from '@/components/listItem';
import { connect } from 'react-redux';
import * as actionTypes from '../recommend/store/actionCreators';


const mapStateToProps = (state) => ({
  homePage: state.getIn(['recommend', 'homePage'])
})

const mapDispatchToProps = (dispatch) => {
  return {
    getHomePageDispatch() {
      dispatch(actionTypes.getRecommend())
    }
  }
}

const index = memo((props) => {
  const {homePage} = props
  const {getHomePageDispatch} = props
  useEffect(() => {
    getHomePageDispatch();
    //eslint-disable-next-line
  }, [])
  const list = homePage ? homePage.toJS() : []
  return (
    <ListView list={list} renderItem={ListItem}></ListView>
  );
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);