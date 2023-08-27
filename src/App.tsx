import Home from './pages/Home/Home';
import { RootState, useAppSelector } from './redux/store';
import Header from './shared/Header/Header';
import Popup from './shared/Popup/Popup';

const App = () => {
    const { status: currentWeatherStatus } = useAppSelector(
        (state: RootState) => state.currentWeather,
    );

    const { status: dailyWeatherStatus } = useAppSelector((state: RootState) => state.dailyWeather);

    const { status: hourlyWeatherStatus } = useAppSelector(
        (state: RootState) => state.hourlyWeather,
    );

    const renderPopup = () => {
        if (
            currentWeatherStatus === 'error' ||
            dailyWeatherStatus === 'error' ||
            hourlyWeatherStatus === 'error'
        ) {
            return <Popup />;
        }
    };

    return (
        <div className="global-container">
            {renderPopup()}
            <div className="container">
                <Header />
                <Home />
            </div>
        </div>
    );
};

export default App;
