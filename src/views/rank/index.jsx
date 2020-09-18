import React, { Component } from 'react';
import { connect } from 'react-redux';
import DragAcr from "@/utils/DragAcr";
import styles from './styles.module.less';

class index extends Component {

  componentDidMount() {
    const dom = document.getElementById("drag")
    console.log(dom)

    new DragAcr({
        el: dom,
        startDeg: 0.7,
        endDeg: 2.7,
        outColor: '#6a707e',
        color: ['#00ffc7', '#8Ab3ff'],
        value: 80,
        title: '亚健康',
        duration: 1,
        outLineWidth: 30
    })
  }

  render() {
    return (
      <div className="main">
        排行榜
        <div id="drag" className={styles.drag}></div>
      </div>
    );
  }
}

export default connect(
)(index);