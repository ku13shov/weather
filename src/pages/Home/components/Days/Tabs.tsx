import { useState } from 'react';
import s from './Days.module.scss';

type Props = {};

const tabs: string[] = ['На неделю', 'На месяц', 'На 10 дней'];

const Tabs = (props: Props) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab, i) => (
                    <div key={tab} className={`${s.tab} ${activeTab === i ? s.active : ''}`} onClick={() => setActiveTab(i)}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className={s.tabs__cancel}>Отменить</div>
        </div>
    );
};

export default Tabs;
