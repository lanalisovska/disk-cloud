import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch} from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from './routes'

const  AppRouter = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  return (
    isAuth
      ? 
      <Switch>
        {privateRoutes.map(route => 
        {
          return <Route path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path} />
        }
        )}
        <Redirect to={RouteNames.DISK}/>
      </Switch>
      : 
      <Switch>
        {publicRoutes.map(route => 
          <Route path={route.path}
            exact={route.exact} 
            component={route.component} 
            key={route.path}/>
        )}
        <Redirect to={RouteNames.LOGIN}/>
      </Switch>


  )
}


export default AppRouter