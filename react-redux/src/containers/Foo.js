/**
 * Created by jwdn on 2016/12/16.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import List from '../components/List'

class Foo extends Component {
  render() {
    const {lists} = this.props

    return(
      <div>
        <ul className="list-group">
          {lists.map((e,index)=>
            <List text={e.text} key={index} />
          )}
        </ul>
      </div>
    )
  }
}

Foo.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}


/*
* React.PropTypes.shape({
 * // 是否符合指定格式的Object
 color: React.PropTypes.string,
 fontSize: React.PropTypes.number
 });

 React.PropTypes.arrayOf(React.PropTypes.string)
  // 某种类别的数组(字串類型)
 */

const getList = state => {
  return {
    lists: state.update.lists
  }
}

export default connect(getList)(Foo)