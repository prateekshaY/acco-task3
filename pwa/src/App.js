
import React from "react";
import "./App.css";
import ToDoPage from "./ToDoListPage";
import PostsPage from "./PostsPage";

import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
   

    return (
       
        <div className="App">
        <Router>
                  <Link to="/">Home </Link>
                  <Link to="/todo">To do </Link>
                  <Link to="/posts">Posts </Link>
          <Routes>
            <Route path="/todo" element={<ToDoPage />}></Route>
            <Route path="/posts" element={<PostsPage />}></Route>
            <Route path="/" element={<div>This is home page</div>}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App;