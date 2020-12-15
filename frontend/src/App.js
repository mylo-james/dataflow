import Home from './components/Home';
import hogwarts from './hogwarts.jpg';

function App() {
    return (
        <>
            <img id='backgroundImg' src={hogwarts} alt='howarts crest' />
            <Home />
        </>
    );
}

export default App;
