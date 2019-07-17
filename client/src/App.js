import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Loading from "./components/pages/Loading";
import Planning from "./components/pages/planning/Planning";
import Events from "./components/pages/planning/Event/Events";
import GuestList from "./components/pages/planning/GuestList";
import Todos from "./components/pages/planning/Todo/Todos";
import Vendors from "./components/pages/planning/myVendors/Vendors";
import Registry from "./components/pages/registry/Registry";
import Team from "./components/pages/team/Team";
import Website from "./components/pages/website/Website";
import Signup from "./components/pages/join/Signup";
import Login from "./components/pages/join/Login";
import VendorSignup from "./components/pages/join/VendorSignup";
import VendorLogin from "./components/pages/join/VendorLogin";
import GuestState from "./context/guest/GuestState";
import WebsiteComplete from "./components/pages/websitecomplete/WebsiteComplete";

function App() {
  return (
    <GuestState>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Loading} />
            <Route exact path="/planning" component={Planning} />
            <Route exact path="/planning/calendar" component={Events} />
            <Route exact path="/planning/checklist" component={Todos} />
            <Route exact path="/planning/guestlist" component={GuestList} />
            <Route exact path="/planning/vendor" component={Vendors} />
            <Route exact path="/registry" component={Registry} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/website" component={Website} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/login/vendor" component={VendorLogin} />
            <Route exact path="/signup/vendor" component={VendorSignup} />
          </Switch>
          <Route exact path="/website/user/:id" component={WebsiteComplete} />
        </div>
      </Router>
    </GuestState>
  );
}

export default App;
