import React from 'react';

type Props = {};

type ItemNameProp = {
    item_name: string;
}

const ThisDayItem = ({ item_name }: ItemNameProp) => {
    return <div>{item_name}</div>;
};

export default ThisDayItem;
