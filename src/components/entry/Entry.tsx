import React from 'react';
import Title from '../title/Title'
import Date from '../date/Date'
import Description from '../description/Description';

export interface IEntryProps {
    company: string,
    title?: string, 
    date: string,
    description?: string,
    visable?: boolean,
}

const Entry = (props: IEntryProps) => {
    return (<>
        <Title company={props.company} title={props.title}></Title>
        <Date date={props.date}></Date>
        <Description description={props.description}></Description>
    </>);
};

export default Entry;