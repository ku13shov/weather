import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import Days from './components/Days/Days';
import { DaysProvider } from '../../provider/DaysProvider';

type Props = {};

function Home({}: Props) {
    return (
        <div className={s.home}>
            <div className={s.home__wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>

            <DaysProvider>
                <Days />
            </DaysProvider>
        </div>
    );
}

export default Home;
