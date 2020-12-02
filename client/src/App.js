import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './scenes/Home/Home';
import NotFound from './scenes/NotFound/NotFound';
import hogwarts from './hogwarts.jpg';

function App() {
    return (
        <BrowserRouter>
            <img id='backgroundImg' src={hogwarts} alt='howarts crest' />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='*' component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
