import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class index extends Component {
  render() {
    return (
      <div>
        歌手
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(index);