import  React from 'react';

const Record = ({item, field, label}) => (
    <li>
        <span>{label}</span>
        <span>{` ${item[field]}`}</span>
    </li>
);

export {
    Record
}