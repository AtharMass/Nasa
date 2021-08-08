import {Route} from 'react-router-dom';
import React from 'react';
import Home from './Home'
import Search from './Search'
import Favourites from './Favourites'
import MediaCard from './MediaCard'

function Container() {
    return (
  
       [ 
        // <Route key="primary" exact path="/" render={() => <Home />}  />,
        <Route key="home" exact path="/home" render={() => <Home />}  />,
        <Route key="search" exact path="/search" render={() => <Search />}  />,
        <Route key="favourites" exact path="/favourites" render={() => <Favourites />}  />,
        <Route  key="favouritesById" exact path="/favourite/:id" render={(match) => <MediaCard match={match}/>}  />
      ]
    );
  }
  
  export default Container;
  