import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
            <button
          aria-label="Reset value"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>


        <button
          aria-label="Reset value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Five
        </button>
      </div>
    </div>
  )
}