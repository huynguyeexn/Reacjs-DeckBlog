import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "ultils/guards/Routes";
import "./assets/css/tailwind.css";
import { useState } from "react";

export const App = () => {
  const [state, setstate] = useState(false);
  return (
    <Router>
      <Switch>
        {routes.map((el, i) => (
          <Route exact path={el.path} key={i} component={el.component} />
        ))}
      </Switch>
    </Router>
  );
};
