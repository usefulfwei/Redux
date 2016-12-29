/**
 * Created by jwdn on 2016/12/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded, refreshData } from '../actions/count';

class Bar extends Component {
  render() {
    const { lists, fetchPostsIfNeeded, refreshData } = this.props
    
    return (
      <div>
        <div className="btn-group">
          <button type="button" className="btn btn-default" onClick={()=> fetchPostsIfNeeded()}>加载数据</button>
          <button type="button" className="btn btn-default" onClick={()=> refreshData()}>清空数据</button>
        </div>
        <br/>
        {lists.map((e,index)=>
        <div className="well well-sm" key={index}><a href={e.url} target="_blank">{e.title}</a></div>)}
      </div>
    )
  }
}

const getList = state => {
  return {
    lists: state.update.data
  }
}

export default connect(
  getList,
  {fetchPostsIfNeeded, refreshData}
)(Bar)