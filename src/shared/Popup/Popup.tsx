import s from './Popup.module.scss';

const Popup = () => {
    return (
        <>
            <div className={s.overlay}></div>
            <div className={s.popup}>
                <div className={s.popup__wrapper}>
                    <div className={s.popup__info}>
                        При загрузке данных произошла ошибка ⛔
                    </div>
                    <div className={s.popup__info}>
                        Попробуйте обновить страницу 🔄
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
