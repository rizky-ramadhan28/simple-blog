import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import PostList from "./components/post-list/post-list.component";
import PostDetails from "./components/post-details/post-details.component";
import About from "./pages/about/about.component";

import PostContextProvider from "./contexts/post-context/post.context";
import NavbarContextProvider from "./contexts/navbar-context/navbar.context";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PostContextProvider>
        <NavbarContextProvider>
          <Navbar />
        </NavbarContextProvider>

        <div className="container mt-5 mb-5">
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route path="/about" component={About} />
            <Route exact path="/simple-blog" component={PostList} />
            <Route path="/:id" component={PostDetails} />
          </Switch>
        </div>
      </PostContextProvider>
    </div>
  );
}

export default App;
