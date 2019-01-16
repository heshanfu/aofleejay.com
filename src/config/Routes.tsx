import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from '../screens/Blog'
import Home from '../screens/Home'
import NotFound from '../screens/NotFound'

class Routes extends React.Component {
  public render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Routes