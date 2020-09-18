import React, { memo, useEffect, useState } from 'react';
import {ListView, PullToRefresh} from 'antd-mobile';
import PropTypes from 'prop-types';

const List = memo((props) => {
  const [refreshing, setRefreshing] = useState(false)
  const [isLoading, setIsloading] = useState(true)
  const [dataSource, setDataSource] = useState(new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
  }))
  const {list, hasRefresh, onRefresh, onEndReached, hasMore, renderItem} = props

  const goRefresh = () => {
    setRefreshing(true)
    onRefresh().then(() => {
      setRefreshing(false)
    })
  }

  const goEndReached = () => {
    if (isLoading || !hasMore) return
    setIsloading(true)
    onEndReached().then(() => {
      setIsloading(false)
    })
  }

  useEffect(() => {
    setDataSource(dataSource.cloneWithRows(list))
    setIsloading(false)
    //eslint-disable-next-line
  }, [list])

  return (
    <ListView
      dataSource = {dataSource}
      renderRow={renderItem}
      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
      onEndReached={goEndReached}
      pullToRefresh={hasRefresh && <PullToRefresh
        refreshing={refreshing}
        onRefresh={goRefresh}
      />}
      style={{height: '100%'}}
      pageSize={10}
    >
    </ListView>
  );
});

List.propTypes = {
  list: PropTypes.array,
  hasRefresh: PropTypes.bool,
  onRefresh: PropTypes.func,
  onEndReached: PropTypes.bool,
  hasMore: PropTypes.bool,
}

List.defaultProps = {
  list: [],
  hasRefresh: false,
  onRefresh: null,
  onEndReached: null,
  hasMore: null,
}

export default List;