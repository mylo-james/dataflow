import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
