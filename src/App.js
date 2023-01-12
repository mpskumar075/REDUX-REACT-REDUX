import React from "react";
import "./style.css";
import {incNumber} from "./actions";
import {decNumber} from "./actions";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux</h1>
     <button onClick={() => dispatch(decNumber())}>-</button>
     <input type="text" value={changeTheNumber}/>
     <button onClick={() => dispatch(incNumber())}>+</button>
    </div>
  );
}
