/* No need to open this file for lecture. */
import { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import EditForm from './components/EditFrom';
import Home from './components/Home';

function App() {
    const { pathname } = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (pathname === '/') {
            history.push('groups/1');
        }
    }, [pathname, history]);

    return (
        <>
            <Switch>
                <Route path='/edit/:userId'>
                    <EditForm />
                </Route>
                <Route path='*'>
                    <div className='header'>
                        <h1>First Solo Project</h1>
                        <h3>Let's GO!!</h3>
                    </div>
                    <Home />
                </Route>
            </Switch>
        </>
    );
}

export default App;
