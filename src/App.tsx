import Home from './pages/Home/Home';
import Header from './shared/Header/Header';

const App = () => {
    return (
        <div className="global-container">
            <div className="container">
                <Header />
                <Home />
            </div>
        </div>
    );
};

export default App;
