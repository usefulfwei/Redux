/**
 * Created by jwdn on 2016/12/16.
 */
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link'

const mapStateToProps = (state,ownProps) => ({
  active: ownProps.fitler === state.visibilityFilter
})

const mapDispatchToProps = (dispatch,ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink