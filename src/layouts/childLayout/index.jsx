import React, { memo, useState, useImperativeHandle, forwardRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';
import '@/style/mixin.less';

const Index = memo(withRouter((props) => {
  const [showStatus, setShowStatus] = useState (true);
  useImperativeHandle(props.forwardedRef, () => ({
    goBack: () => {
      setShowStatus(false)
    }
  }));
  console.log(props.children)
  return (
    // <div className="childPage">
      <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fade"
      appear={true}
      unmountOnExit
      ref={props.forwardedRef}
      onExited={props.history.goBack}
    >
      {props.children}
    </CSSTransition>
    // </div>
  );
}));

export default forwardRef((props, ref) => {
  return <Index {...props} forwardedRef={ref}/>
});