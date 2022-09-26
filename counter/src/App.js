
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { incNumber, decNumber } from './components/Basics/actions/index';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className='counterWrapper'>
        <h2> Increment/Decrement counter </h2>
          <button className='decrementbtn' onClick={()=> dispatch(decNumber())}>-</button>
          {/* <input value={myState} /> */}
          <button className='incrementbtn' onClick={()=> dispatch(incNumber())}>+</button>
          <p className='mystateValue'>{myState}</p>
    </div>
  );
}

export default App;
