import React from 'react';

interface IDateProps {
    date: string,
}

const Date = (props: IDateProps) => {
    return (
        <span className="date">{props.date}</span>
    );
};

export default Date;