import { useState, useContext } from 'react';
import s from './Days.module.scss';
import { DaysContext } from '../../../../context/DaysContext';

const tabs = [
    { label: 'Почасовой', value: '2' },
    { label: 'На неделю', value: '7' },
    { label: 'На 14 дней', value: '14' },
];

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const days = useContext(DaysContext);

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map((tab, i) => (
                    <div
                        key={tab.label}
                        className={`${s.tab} ${activeTab === i ? s.active : ''}`}
                        onClick={() => {
                            days.changeDays(tab.value);
                            return setActiveTab(i);
                        }}>
                        {tab.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
