import { Route, Link } from "react-router-dom";

// wrapper component for protected routes

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Link to="./login" />
      }
    </Route>
  );
};

export default ProtectedRoute;
