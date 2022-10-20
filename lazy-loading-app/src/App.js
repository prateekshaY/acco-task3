import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import React,{Suspense} from "react"
const Home= React.lazy(()=>import("./components/Home/Home"));
const ViewPosts= React.lazy(()=>import("./components/Posts/Posts"));
const NotFound= React.lazy(()=>import("./components/NotFound"));

function App() {

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
     <Routes>
     <Route
          path="/"
          element={
            <Suspense fallback={<div>Page is loadig...</div>}>
              <Home />
            </Suspense>
          }
        />
      <Route path="/posts" 
      element={
        <Suspense fallback={<div>Page is loadig...</div>}>
        <ViewPosts />
      </Suspense>
      }/>

      <Route path="*"  element={
                <Suspense fallback={<div>Page is loadig...</div>}>
                <NotFound/>
              </Suspense>
            }
            />

     </Routes>

    </div>
  );
}

export default App;