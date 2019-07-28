import React from 'react';

export interface IList {
    title: string,
    values: string[],
}
  
const List = (props: IList) => {
    return (<>
        <p className="bodyText">
            <b>{props.title} </b>
            {props.values.join(' ')}.
        </p>
    </>);
};

export default List;