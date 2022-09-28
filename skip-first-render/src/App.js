import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useSkipFirstRender from './hooks/useSkipFirstRender';

function App() {
  const [reRendered, setReRendered] = useState(false);
  const [count, setCount] = useState(1);


  useSkipFirstRender(() => {
    console.log("Not called on first render, getting called on re-rendering");
    console.log(`App component has been rendered ${count} times`);
    setReRendered(true);
  }, [count])

  //useSkipFirstRender();
  const clickHandler = () => {
    setCount(count + 1);
  }
  
  return (
    <div className="App">
     <button onClick={clickHandler}>Click Me to re-render</button>
     {reRendered && <div>
        <p>It was not visible on first render, visible on re-rendering</p>
        <p>App component has been rendered {count} times</p>
     </div>}
    </div>
  );
}

export default App;
