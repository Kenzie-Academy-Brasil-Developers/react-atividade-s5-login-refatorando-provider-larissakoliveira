import Login from "../components/Login"
import Dashboard from "../components/Dashboard"
import { Route, Switch } from "react-router"
import { useEffect, useState } from "react";

const Routes = () => {

    // const [authenticated, setAuthenticated] = useState(false);

    // useEffect(() => {
    //   const token = localStorage.getItem("@token");
    //   token && setAuthenticated(true);
    // }, [authenticated]);

    return(
        <Switch>
        <Route exact path='/'>
            <Login/>
        </Route>
        <Route exact path='/dashboard'>
            <Dashboard/>
        </Route>
        </Switch>
    )
}

export default Routes