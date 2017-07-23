import React from 'react';

import { Route, Switch } from 'react-router-dom';

import BlogPage from '../container/BlogPage';
import Post from '../container/Post';
import { postsPath } from './paths';


const Routes = () => (
  <Switch>
    <Route exact path={'/'} component={BlogPage} />
    <Route path={postsPath()} component={Post} />
  </Switch>
);

export default Routes;
