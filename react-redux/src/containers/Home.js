/**
 * Created by jwdn on 2016/12/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { browserHistory } from 'react-router'
import { increase, decrease,multiThree } from '../actions/count';

class Home extends Component {
  render() {
    const { number, increase,decrease,multiThree } = this.props

    return(
      <div>
        <p><span className="badge">{number}</span></p>
        <br/>
        <button type="button" className="btn btn-default" onClick={()=>increase(1)}>+1按钮</button>
        { ' ' }
        <button type="button" className="btn btn-default" onClick={()=>decrease(1)}>-1按钮</button>
        { ' ' }
        <button type="button" className="btn btn-default" onClick={()=>multiThree(3)}>乘3按钮</button>
        { ' ' }
        <button type="button" className="btn btn-default" onClick={()=>browserHistory.push('/foo')}>跳转到 foo</button>
      </div>
    )
  }
}

const getNumber = state => {
  return {
    number: state.update.number
  }
}
//mapStateToProps
export default connect(
  getNumber,
  //mapStateToProps
  {increase,decrease,multiThree}
  //mapDispatchToProps
)(Home)