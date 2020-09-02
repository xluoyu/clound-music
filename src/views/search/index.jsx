import React, { memo } from 'react';
import ChildLayout from '@/layouts/childLayout'
import { useRef } from 'react';
import styles from './index.module.less';

const Index = (props) => {
  const layoutEl = useRef();
  const back = () => {
    // console.log(layoutEl)
    layoutEl.current.goBack()
  }
  return (
    <ChildLayout ref={layoutEl}>
      <div className={`childPage ${styles.test}`}>
        <div>search</div>
        <button onClick={() => back()}>返回</button>
      </div>
    </ChildLayout>
  );
};

export default memo(Index);