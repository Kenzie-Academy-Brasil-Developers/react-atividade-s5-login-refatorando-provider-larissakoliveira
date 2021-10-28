import Login from "../components/Login"

const Routes = () => {
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