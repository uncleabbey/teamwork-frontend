import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminLogin from './../components/Admin/Admin-Login';
import CreateEmployee from '../components/Admin/CreateEmployee';
import Header from '../components/Nav/Header';
import Error from './Error';
import CreateArticle from './../components/Post/CreateArticle';
import EditArticle from '../components/Post/EditArticle';
import CreateGif from './../components/Post/CreateGif';
import OneArticle from '../components/Get/OneArticle';
import OneGif from '../components/Get/OneGif';
import Dashboard from '../components/Admin/Dashboard';
import Flagged from './../components/Admin/Flagged';
import Feed from './../components/Feed/Feed';
import SearchByTags from '../components/Feed/SearchByTags';
import GetArticlesByTags from './../components/Feed/GetTags';



const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={"/"} component={AdminLogin} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/create-emp"} component={CreateEmployee} />
        <Route exact path={'/timeline'} component={Feed} />
        <Route exact path={'/create-article'} component={CreateArticle} />
        <Route exact path={'/edit-article/:id'} component={EditArticle} />
        <Route exact path={'/post-gif'} component={CreateGif} />
        <Route exact path={'/article/:id'} component={OneArticle} />
        <Route exact path={'/gif/:id'} component={OneGif} />
        <Route exact path={'/flag'} component={Flagged} />
        <Route exact path={'/search'} component={SearchByTags} />
        <Route exact path={'/tags/:tag'} component={GetArticlesByTags} />
        <Route component={Error}/>
      </Switch>
    </div>
  )
}

export default Main;
