import React from 'react'
import './App.css' 
import {useDispatch, useSelector} from 'react-redux'
import { decreaseByFive, decrement, increaseByFive, increment } from './redux/features/counterSlice';

const App = () => { 

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
  return (
    <>
    <h1>{count}</h1>

     <button  onClick={() => dispatch(increment()) }>Increment</button>
     <button onClick={() => dispatch(decrement())}>Decrement</button> 

     <button onClick={() => dispatch(increaseByFive())}>Increment By 5</button>

     <button onClick={() => dispatch(decreaseByFive())}>Decrease By 5</button>
    </>
     
  )
}

export default App