import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

// import PrivateRoutes from "./PrivateRoutes";
import Home from "./pages/Home";
import Details from "./pages/Details";

const Routes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" exact component={Details} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default Routes;
