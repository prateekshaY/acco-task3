import './App.css';
import Navbar from './components/Basics/Navbar';
import {Routes, Route, Link} from 'react-router-dom';
import Posts from './components/Basics/Posts/Posts';
import Home from './components/Basics/Home';
import PostDetails from './components/Basics/PostDetails';
function App() {
  return (
    <>
  <Navbar />
   <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path='/posts' element={<Posts />} />
    <Route exact path="/posts/:id" element={<PostDetails />} /> 
   </Routes>
   </>
  );
}

export default App;
