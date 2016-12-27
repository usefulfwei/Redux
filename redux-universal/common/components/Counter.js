import React, { Component, PropTypes } from 'react'

const Counter = ({increment, incrementIfOdd, incrementAsync, decrement, counter}) => {
  return (
    <p>
      Clicked:{counter} times
      {' '}
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
      {' '}
      <button onClick={incrementIfOdd}>Increment If Odd</button>
      {' '}
      <button onClick={incrementAsync}>Increment Async</button>
    </p>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter