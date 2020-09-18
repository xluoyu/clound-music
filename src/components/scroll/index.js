import React, { forwardRef, useEffect, useState, useRef, useImperativeHandle } from 'react';
import BScroll from '@better-scroll/core';
import PropTypes from 'prop-types'
import { forceCheck } from 'react-lazyload';

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();
  const scrollContainerRef = useRef();
  const { direction, click, refresh, bounceTop, bounceBottom, lazyload } = props;
  const { pullUp, pullDown, onScroll } = props;
  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === 'horizental',
      scrollY: direction === 'vertical',
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom
      }
    })
    setBScroll(scroll)
    return () => {
      console.log('清理')
      setBScroll(null)
    }
  }, [direction, click, bounceBottom, bounceTop])
  useEffect (() => {
    if (refresh && bScroll){
      bScroll.refresh ();
    }
  });
  // scroll事件
  useEffect (() => {
    if (!bScroll || !onScroll || !lazyload) return;
    bScroll.on ('scroll', (scroll) => {
      onScroll && onScroll (scroll);
      lazyload && forceCheck(scroll);
    })
    return () => {
      bScroll.off ('scroll');
    }
  }, [onScroll, lazyload, bScroll]);
  // 上拉操作
  useEffect (() => {
    if (!bScroll || !pullUp) return;
    bScroll.on ('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100){
        pullUp ();
      }
    });
    return () => {
      bScroll.off ('scrollEnd');
    }
  }, [pullUp, bScroll]);
  // 下拉操作
  useEffect (() => {
    if (!bScroll || !pullDown) return;
    bScroll.on ('touchEnd', (pos) => {
      console.log(pos)
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown ();
      }
    });
    return () => {
      bScroll.off ('touchEnd');
    }
  }, [pullDown, bScroll]);

  useImperativeHandle (ref, () => ({
    refresh () {
      if (bScroll) {
        bScroll.refresh ();
        bScroll.scrollTo (0, 0);
      }
    },
    getBScroll () {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  return (
    <div className="scroll" ref={scrollContainerRef}>
      {props.children}
    </div>
  );
});

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  lazyload: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  bounceTop: PropTypes.bool,
  bounceBottom: PropTypes.bool
}

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true,
  lazyload: true
}

export default Scroll;