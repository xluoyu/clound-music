import React, {memo, lazy, Suspense } from 'react';
import {renderRoutes} from 'react-router-config';
import styles from './index.module.less';
import {WingBlank} from 'antd-mobile';
import { useState } from 'react';

const RankComponents = lazy(() => import("@/views/rank/"));
const SingersComponents = lazy(() => import("@/views/singers/"));
const RecommendComponents = lazy(() => import("@/views/recommend/"));
const Tabs = [
  {value: 'recommend', name: '推荐', index: true, components: RecommendComponents},
  {value: 'rank', name: '排行榜', components: RankComponents},
  {value: 'dj', name: '电台', index: false, components: SingersComponents},
];

const homeLayout = memo((props) => {
  const {route} = props;
  const [tabState, setTabState] = useState(Tabs.find(e => e.index).value)
  const [index, setIndex] = useState(Tabs.findIndex(e => e.index))
  const [itemState, setItemState] = useState(Tabs.reduce((pre, cur) => {
    pre[cur.value] = !!cur.index
    return pre
  }, {}))
  const navTo = (path) => {
    props.history.push(path)
  }
  const handleTabState = (curState, curIndex) => {
    if (curState === tabState) return
    setIndex(curIndex)
    setTabState(curState)
    let items = Object.assign({}, itemState)
    if (items[curState]) return
    items[curState] = true
    setItemState(items)
  }
  
  return (
    <div>
      {renderRoutes(route.routes)}
      <div className={styles.header}>
        <WingBlank>
          <div className={styles.top}>
            <i className='iconfont icon-caidan'></i>
            <div className={styles['tabBar']}>
              {
                Tabs.map((item, index) => {
                  return (
                    <span key={item.value} className={styles.tabBarItem + ' ' + (tabState === item.value ? styles.selected : '')} onClick={() => {handleTabState(item.value, index)}}>
                      {item.name}
                    </span>
                  )
                })
              }
            </div>
            <i className='iconfont icon-sousuo' onClick={() => navTo('/search')}></i>
          </div>
        </WingBlank>
      </div>
      <div className={styles.homeBox} style={{'--index': -index}}>
      <Suspense fallback={null}>
        {
          Tabs.map((item) => {
            return (
              <div className={styles.homeItem} key={item.value}>
                {
                  itemState[item.value] && (
                    <item.components></item.components>
                  )
                }
              </div>
            )
          })
        }
        </Suspense>
      </div>
    </div>
  );
});

export default homeLayout;