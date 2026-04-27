import React from 'react'
import './App.css' 
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './redux/features/counterSlice';

const App = () => { 

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
  return (
    <>
    <h1>{count}</h1>

     <button  onClick={() => dispatch(increment()) }>Increment</button>
     <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
     
  )
}

export default App