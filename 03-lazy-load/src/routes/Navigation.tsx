import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import { routes } from '../routes/routes';
import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo" />
            <ul>
              {routes.map(({ path, name, exact }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    activeClassName="nav-active"
                    exact={exact}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} render={() => <Component />} />
            ))}

            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}