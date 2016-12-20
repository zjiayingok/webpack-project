
/**
 * Created by ytm on 4/7/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Counter     from "./Counter"
import {onIncrement, onDecrement} from "actionsReducers/IndexPage"

class IndexPage extends React.Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

    render() {
    	const { $$state } = this.props;
    	let value = $$state.get("val");

        return (
        	<div>
              <Counter
                value={value}
                onIncrement={ this.props.onIncrement.bind(this) }
                onDecrement={  this.props.onDecrement.bind(this) }
              />
          </div>
        )
    }
}


// function mapStateToProps(state) {
//   return {
//     $$state: state.indexPageReducer
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement: () => dispatch(onIncrement()),
//     onDecrement: () => dispatch(onDecrement())
//   }
// }

// module.exports = connect(mapStateToProps, mapDispatchToProps)(IndexPage)


//or


function mapStateToProps(state) {
  return {
    $$state: state.indexPageReducer
  }
}

module.exports = connect(mapStateToProps, {
  onIncrement,
  onDecrement,
})(IndexPage)