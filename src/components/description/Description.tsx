import React from 'react';

interface IDescProps {
    description?: string,
}

const Description = (props: IDescProps) => {
    if (props.description) {
        return (<p className="bodyText">{props.description}</p>);
    }

    return (
        <p className="bodyText"></p>
    );
};

export default Description;